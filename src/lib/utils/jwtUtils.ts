/**
 * Decode a base64url encoded string
 * @param {string} base64Url - The base64url encoded string
 * @returns {string} - The decoded string
 */
function decodeBase64Url(base64Url: string): string {
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

    while (base64.length % 4 !== 0) {
        base64 += "=";
    }

    return base64DecodeToString(base64);
}

/**
 * Base64 decode implementation
 * @param {string} input - The base64 encoded string
 * @returns {string} - The decoded string
 */
function base64DecodeToString(input: string): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let str = "";
    let i = 0;

    input = input.replace(/[=]+$/, "");

    while (i < input.length) {
        const enc1 = chars.indexOf(input.charAt(i++));
        const enc2 = chars.indexOf(input.charAt(i++));
        const enc3 = chars.indexOf(input.charAt(i++));
        const enc4 = chars.indexOf(input.charAt(i++));

        // eslint-disable-next-line no-bitwise
        const chr1 = (enc1 << 2) | (enc2 >> 4);
        // eslint-disable-next-line no-bitwise
        const chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        // eslint-disable-next-line no-bitwise
        const chr3 = ((enc3 & 3) << 6) | enc4;

        str += String.fromCharCode(chr1);

        if (enc3 !== 64) {
            str += String.fromCharCode(chr2);
        }

        if (enc4 !== 64) {
            str += String.fromCharCode(chr3);
        }
    }

    return str;
}

/**
 * Extract the user ID from a JWT token for FakeStore API
 * @param {string} token - The JWT token string
 * @returns {number|null} - The user ID extracted from the token, or null if invalid
 */
export function getUserIdFromToken(token: string): number | null {
    try {
        const payload = decodeJwtPayload(token);

        const userId = payload?.userId || payload?.user_id || payload?.sub || payload?.id;

        return userId ? Number(userId) : null;
    } catch (error) {
        console.error("Error extracting user ID from token:", error);
        return null;
    }
}

/**
 * Decode and extract all payload information from a JWT token
 * @param {string} token - The JWT token string
 * @returns {object|null} - The decoded payload object or null if invalid
 */
export function decodeJwtPayload(token: string): Record<string, any> | null {
    try {
        const parts = token.split(".");
        if (parts.length !== 3) {
            console.error("Invalid token format");
            return null;
        }

        const payload = parts[1];

        const decodedPayload = decodeBase64Url(payload);

        return JSON.parse(decodedPayload);
    } catch (error) {
        console.error("Error decoding JWT payload:", error);
        return null;
    }
}
