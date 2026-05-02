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
        options: SendMessageOptions
    ): Promise<SendMessageResult> {
        return this.client.request("/api/v1/chat", {
            method: "POST",
            body: JSON.stringify(options),
        });
    }
}