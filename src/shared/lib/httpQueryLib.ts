import { HttpQueryError, HttpQueryOptions } from '@/shared/types/httpQueryTypes';

/**
 * A wrapper function for the Fetch API with enhanced functionality, including
 * support for HTTP methods, headers, request body, and timeout handling.
 *
 * @template TRes - The expected type of the JSON response.
 * @template TReqBody - The type of the request body.
 * @param url - The URL to send the request to.
 * @param options - Configuration options for the request.
 * @returns A promise that resolves with the parsed JSON response.
 * @throws {HttpQueryError} When the request fails or times out.
 *
 * @example
 * // Example usage for a GET request
 * const data = await httpQuery<MyResponseType>('https://api.example.com/data');
 *
 * @example
 * // Example usage for a POST request
 * const data = await httpQuery<MyResponseType, MyRequestBodyType>(
 *   'https://api.example.com/data',
 *   {
 *     method: 'POST',
 *     body: { key: 'value' },
 *     timeout: 5000,
 *   }
 * );
 */
export async function httpQuery<TRes, TReqBody>(url: string, options: HttpQueryOptions<TReqBody> = {}): Promise<TRes> {
  const { method = 'GET', headers = {}, body, timeout } = options;

  // Set up fetch options
  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body && method !== 'GET' ? JSON.stringify(body) : undefined,
  };

  // Handle timeout
  const controller = new AbortController();
  if (timeout) {
    setTimeout(() => controller.abort(), timeout);
    fetchOptions.signal = controller.signal;
  }

  try {
    const response = await fetch(url, fetchOptions);
    // Check for HTTP errors
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);

      throw new HttpQueryError(`${response.statusText}`, response, errorData);
    }

    // Parse JSON response
    return await response.json();
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new HttpQueryError('Request timed out');
    }
    throw error;
  }
}

/**
 * Creates a function that wraps a server action, binding the `prevState` parameter
 * to a predefined value, leaving only the `data` parameter for the caller to provide.
 *
 * @template ActionT - The type of the server action function. Must be a function that accepts
 * `prevState` and `data` as parameters and returns a `Promise`.
 * @param {ActionT} serverAction - The server action function to wrap.
 * @param {Parameters<ActionT>[0]} prevState - The value to bind to the `prevState` parameter of the server action.
 * @returns {(data: Parameters<ActionT>[1]) => ReturnType<ActionT>} - A function that takes the `data` parameter
 * and returns the result of the server action.
 */
export function withoutPrevStateServerAction<ActionT extends (prevState: any, data: any) => Promise<any>>(
  serverAction: ActionT,
  prevState: Parameters<ActionT>[0]
): (data: Parameters<ActionT>[1]) => ReturnType<ActionT> {
  return function (data: Parameters<ActionT>[1]): ReturnType<ActionT> {
    return serverAction(prevState, data) as ReturnType<ActionT>;
  };
}
