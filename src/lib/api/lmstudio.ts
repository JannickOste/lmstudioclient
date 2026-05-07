import JWTAuthorizationToken from "../lmstudio/auth/JWTAuthorizationToken";
import ChatClient from "./chat";
import LMStudioConnection from "../lmstudio/connection";
import ModelClient from "./models";

/**
 * LMStudio REST API client.
 * 
 * DOCS: https://lmstudio.ai/docs/developer/rest
 */
export default class LMStudioClient {
    public readonly model: Readonly<ModelClient>;
    public readonly chat: Readonly<ChatClient>;

    public readonly connection: Readonly<LMStudioConnection>;

    public constructor(
        baseUrl: Readonly<string> = "http://localhost:1234",
        defaultModel: Readonly<string> = "qwen2.5-7b-instruct"
    ) {
        this.connection = new LMStudioConnection(baseUrl, defaultModel);

        this.model = new ModelClient(this.connection);
        this.chat = new ChatClient(this.connection);
    }
}