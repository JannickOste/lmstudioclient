import DownloadModelOptions from "../lmstudio/models/operations/download/DownloadModelOptions";
import DownloadModelResult from "../lmstudio/models/operations/download/DownloadModelResult";
import LMStudioClient from "./lmstudio";
export default class ModelClient {
    public constructor(
        private readonly client: Readonly<LMStudioClient>
    ) {

    }
    
    /** 
     * Download LLMs and embedding models
     * 
     * endpoint: /api/v1/models/download 
     * docs: https://lmstudio.ai/docs/developer/rest/download
     * */
    public download(
        options: DownloadModelOptions
    ): Promise<DownloadModelResult> {
        return this.client.request("/api/v1/models/download", {
            method: "POST",
            body: JSON.stringify(options),
        });
    }
}