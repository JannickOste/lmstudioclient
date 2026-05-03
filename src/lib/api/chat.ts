import ChatSession from "../lmstudio/chat/ChatSession";
import ChatInputItem from "../lmstudio/chat/io/input/ChatInputItem";
import SendMessageOptions from "../lmstudio/chat/operations/sendMessage/SendMessageOptions";
import SendMessageResult from "../lmstudio/chat/operations/sendMessage/SendMessageResult";
import LMStudioClient from "./lmstudio";
export default class ChatClient {
    public constructor(
        private readonly client: Readonly<LMStudioClient>
    ) {

    }

    /**
     * Send a message to a model and receive a response. Supports MCP integration.
     * 
     * endpoint: /api/v1/chat
     * docs: https://lmstudio.ai/docs/developer/rest/chat
     */
    public send(
        options: Omit<SendMessageOptions, "model"> | SendMessageOptions
    ): Promise<SendMessageResult> {

        const finalOptions: SendMessageOptions = {
            ...options,
            model: "model" in options
                ? options.model
                : this.client.defaultModel
        };

        return this.client.request("/api/v1/chat", {
            method: "POST",
            body: JSON.stringify(finalOptions)
        });
    }

    /**
     * Sends a one-off (stateless) chat request to the model.
     *
     * This method ensures the request is not stored by LM Studio (`store: false`),
     * making it suitable for temporary interactions where conversation history
     * should not be persisted.
     *
     * @param input - The chat input items (messages, system prompts, etc.)
     * @param options - Optional request configuration (temperature, top_p, model, etc.)
     *
     * @returns The model's response
     */
    public sendStateless(
        input: ChatInputItem[],
        options: Partial<Omit<SendMessageOptions, "store" | "previous_response_id">> = {}
    ): Promise<SendMessageResult> {
        const finalOptions: SendMessageOptions | Omit<SendMessageOptions, "model"> = {
            ...options,
            input,
            store: false
        };

        return this.send(finalOptions);
    }
    
    /**
     * Creates a new ChatSession instance bound to this client.
     *
     * This method initializes a stateful session wrapper around the ChatClient,
     * allowing messages to retain conversational context via `previous_response_id`.
     *
     * If no `model` is provided in the options, the client's default model will be used.
     *
     * The following fields are intentionally managed internally and cannot be provided:
     * - `store`
     * - `previous_response_id`
     *
     * @param options - Configuration options for the session. Must exclude:
     *                  `store` and `previous_response_id`, and optionally `model`.
     *
     * @returns A new `ChatSession` instance configured with the provided options.
     */
    public getSession(
        options: Omit<SendMessageOptions, "store" | "previous_response_id"> | Omit<SendMessageOptions, "store" | "previous_response_id" | "model">
    ): ChatSession {
        return new ChatSession(this, {
            ...options,
            model: "model" in options ? options.model : this.client.defaultModel
        })
    }
}