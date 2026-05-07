import JWTAuthorizationToken from "./auth/JWTAuthorizationToken";

/**
 * Handles HTTP communication with the LM Studio REST API.
 */
export default class LMStudioConnection {
    private authorizationToken: JWTAuthorizationToken | null = null;

    public constructor(
        public readonly baseUrl: Readonly<string>,
        public readonly defaultModel: Readonly<string>
    ) {}

    /**
     * Performs a raw HTTP request against the LM Studio REST API.
     *
     * Automatically:
     * - Prepends the configured base URL
     * - Sets `Content-Type: application/json`
     * - Adds the `Authorization` header when a JWT token is configured
     *
     * @param path API endpoint path, e.g. `/api/v1/models`
     * @param options Standard fetch request options
     * @returns The raw fetch Response object
     */
    public request(
        path: string,
        options?: RequestInit
    ): Promise<Response> {
        return fetch(`${this.baseUrl}${path}`, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...(this.authorizationToken
                    ? { "Authorization": `Bearer ${this.authorizationToken.bearer}` }
                    : {}),
                ...(options?.headers || {})
            }
        });
    }

    /**
     * Performs an HTTP request against the LM Studio REST API
     * and parses the response body as JSON.
     *
     * Automatically:
     * - Prepends the configured base URL
     * - Sets `Content-Type: application/json`
     * - Adds the `Authorization` header when a JWT token is configured
     * - Throws an Error when the response status is not successful
     *
     * @template T Expected JSON response type
     * @param path API endpoint path, e.g. `/api/v1/models`
     * @param options Standard fetch request options
     * @returns Parsed JSON response of type `T`
     * @throws Error when the request fails
     */
    public async jsonRequest<T>(
        path: string,
        options?: RequestInit
    ): Promise<T> {
        const res = await this.request(path, options);

        if (!res.ok) {
            throw new Error(`Request failed: ${res.status} ${res.statusText}`);
        }

        return res.json();
    }

    /**
     * Sets the authorization token for the current connection.
     *
     * This method performs a basic structural validation to ensure the token
     * follows the expected JWT format (`header.payload.signature`) before storing it.
     *
     * @param authToken - The JWT authorization token object containing the bearer string.
     * @throws Error if the token does not match the expected JWT structure.
     */
    public setAuthorizationToken(authToken: JWTAuthorizationToken): void {
        if (authToken.bearer?.split(".")?.length !== 3) {
            throw new Error("Invalid token structure");
        }

        this.authorizationToken = authToken;
    }
}
