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
}