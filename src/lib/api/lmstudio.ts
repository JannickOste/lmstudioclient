import ChatClient from "./chat";
import ModelClient from "./models";

export default class LMStudioClient {
    private readonly modelClient: Readonly<ModelClient>;
    private readonly chatClient: Readonly<ChatClient>; 

    public constructor(
        public readonly baseUrl: Readonly<string> = "http://localhost:1234"
    ) {

        this.modelClient = new ModelClient(this);
        this.chatClient = new ChatClient(this);
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
                ...(options?.headers || {})
            },
            ...options
        });

        if (!res.ok) {
            throw new Error(`Request failed: ${res.status} ${res.statusText}`);
        }

        return res.json();
    }
}