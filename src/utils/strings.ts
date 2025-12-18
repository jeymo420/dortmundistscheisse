/**
 * Capitalizes the first character of a string.
 * @param str - The input string to capitalize
 * @returns The string with the first character in uppercase, or an empty string if input is falsy
 * @example
 * capitalize("hello") // Returns "Hello"
 * capitalize("") // Returns ""
 */
export const capitalize = (str: string) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
};
