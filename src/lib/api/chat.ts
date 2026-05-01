import LMStudioClient from "./lmstudio";
export default class ChatClient {
    public constructor(
        private readonly client: Readonly<LMStudioClient>
    ) {

    }
}