export type ServerActionState<TData = void> = {
  isError: boolean;
  errors?: string[];
  data?: TData;
};

export type ApiHookState<ActionT extends (prevState: any, data: any) => Promise<unknown>> = ServerActionState & {
  registerAction: (data: Parameters<ActionT>[1]) => ReturnType<ActionT>;
  isLoading: boolean;
};

export interface HttpQueryOptions<TBody> {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: TBody; // Can be JSON, FormData, etc.
  timeout?: number; // Timeout in milliseconds
}

export class HttpQueryError extends Error {
  constructor(
    message: string,
    public response?: Response,
    public data?: any
  ) {
    super(message);
    this.name = 'HttpQueryError';
  }
}
