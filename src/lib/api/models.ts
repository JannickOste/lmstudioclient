import LMStudioClient from "./lmstudio";
export default class ModelClient {
    public constructor(
        private readonly client: Readonly<LMStudioClient>
    ) {

    }
}