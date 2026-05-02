import JWTAuthorizationToken from "../lmstudio/auth/JWTAuthorizationToken";
import ChatClient from "./chat";
import ModelClient from "./models";

/**
 * LMStudio REST API client.
 * 
 * DOCS: https://lmstudio.ai/docs/developer/rest
 */
export default class LMStudioClient {
    public readonly model: Readonly<ModelClient>;
    public readonly chat: Readonly<ChatClient>;

    private authorizationToken: JWTAuthorizationToken | null = null;

    public constructor(
        public readonly baseUrl: Readonly<string> = "http://localhost:1234"
    ) {
        this.model = new ModelClient(this);
        this.chat = new ChatClient(this);
    }


    /**
     * Make a request to the LMStudio REST API. Automatically prepends the baseUrl and sets the Content-Type header to application/json.
     * @param path the path of the API endpoint, e.g. "/api/v1/models"
     * @param options the request options, same as the second argument to fetch, except the headers will be automatically set to include "Content-Type: application/json"
     * @returns APIResponse of type T
     */
    public async request<T>(
        path: string,
        options?: RequestInit
    ): Promise<T> {
        const res = await fetch(`${this.baseUrl}${path}`, {
            headers: {
                "Content-Type": "application/json",
                ... this.authorizationToken ? {
                    "Authorization": `Bearer ${this.authorizationToken?.bearer}`,
                } : {},
                ...(options?.headers || {})
            },
            ...options
        });

        if (!res.ok) {
            throw new Error(`Request failed: ${res.status} ${res.statusText}`);
        }

        return res.json();
    }

    /**
     * Sets the authorization token for the current session.
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