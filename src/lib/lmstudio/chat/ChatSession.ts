import ChatClient from "../../api/chat";
import ChatIOItem from "./io/ChatIOItem";
import ChatInputItem from "./io/input/ChatInputItem";
import SendMessageOptions from "./operations/sendMessage/SendMessageOptions";

/**
 * Represents a stateful chat session that maintains conversation context
 * across multiple messages using the underlying ChatClient.
 */
class ChatSession {

    /**
     * The last response/message ID returned by the server.
     * Used to maintain conversation continuity via `previous_response_id`.
     */
    private previous_message_id: string | null = null;

    /**
     * Internal mutable chat history storage.
     */
    private _chatHistory: ChatIOItem[] = [];

    /**
     * Returns a readonly copy of the chat history.
     * The returned array cannot be mutated and does not affect internal state.
     */
    public chatHistory(): Readonly<ChatIOItem[]> {
        return [...this._chatHistory];
    }

    /**
     * Creates a new ChatSession instance.
     *
     * @param client - The ChatClient used to send requests to the backend API.
     * @param chatOptions - Default options applied to every message sent
     *                       (excluding the `store` flag which is managed internally).
     */
    public constructor(
        private readonly client: Readonly<ChatClient>,
        private readonly chatOptions: Readonly<Omit<SendMessageOptions, "store" | "input" | "previous_message_id">>
    ) {}

    /**
     * Sends a message in the current chat session.
     *
     * Automatically attaches:
     * - previous_response_id (if available) to maintain context
     * - store=true to persist server-side conversation state
     *
     * @param input - The user input message to send.
     * @returns The raw response from the ChatClient.
     */
    public async sendMessage(
        input: ChatInputItem
    ) {
        const response = await this.client.send({
            ...this.chatOptions,
            input: [input],
            ...(this.previous_message_id
                ? { previous_response_id: this.previous_message_id }
                : {}),
            store: true
        });

        this.previous_message_id = response.response_id ?? null;
        this._chatHistory.push(
            input, 
            ... response.output
        )

        return response;
    }

    /**
     * Clears the local chat session state.
     *
     * This resets:
     * - Chat history
     * - Conversation continuity (previous_response_id)
     *
     * Note: This does NOT clear any server-side stored conversation as there is no support for destroying sessions. 
     */
    public flush(): void {
        this._chatHistory = [];
        this.previous_message_id = null;
    }
}

export default ChatSession;