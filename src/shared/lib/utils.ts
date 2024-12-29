import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ROUTES } from '@/shared/consts/routes';

/**
 * Combines multiple class values into a single string, merging Tailwind CSS classes when necessary.
 *
 * @param {...ClassValue[]} inputs - A list of class values (strings, objects, or arrays) to combine.
 * @returns {string} - The combined class string with merged Tailwind CSS classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Retrieves a value from a map object based on the provided key.
 *
 * @template T - The type of the keys in the map object (e.g., string, number, symbol).
 * @template U - The type of the values in the map object.
 * @param {T} key - The key to look up in the map.
 * @param {Record<T, U>} map - The object containing key-value pairs.
 * @returns {U | undefined} - The value associated with the key, or undefined if the key does not exist.
 */
export function gv<T extends string | number | symbol, U>(key: T, map: Record<T, U>): U | undefined {
  return map[key];
}
