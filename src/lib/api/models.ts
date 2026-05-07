import DownloadModelOptions from "../lmstudio/models/operations/download/DownloadModelOptions";
import DownloadModelResult from "../lmstudio/models/operations/download/DownloadModelResult";
import ModelListResult from "../lmstudio/models/operations/list/ModelListResult";
import ModelLoadOptions from "../lmstudio/models/operations/load/ModelLoadOptions";
import ModelLoadResult from "../lmstudio/models/operations/load/ModelLoadResult";
import ModelUnloadOptions from "../lmstudio/models/operations/unload/ModelUnloadOptions";
import ModelUnloadResult from "../lmstudio/models/operations/unload/ModelUnloadResult";
import LMStudioConnection from "../lmstudio/connection";

export default class ModelClient {
    public constructor(
        private readonly connection: Readonly<LMStudioConnection>
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
        return this.connection.jsonRequest("/api/v1/models/download", {
            method: "POST",
            body: JSON.stringify(options),
        });
    }

    
    /** 
     * Load an LLM or Embedding model into memory with custom configuration for inference
     * 
     * endpoint: /api/v1/models/load
     * docs: https://lmstudio.ai/docs/developer/rest/load
     * */
    public load(
        options: ModelLoadOptions
    ): Promise<ModelLoadResult> {
        return this.connection.jsonRequest("/api/v1/models/load", {
            method: "POST",
            body: JSON.stringify(options),
        });
    }
    
    /** 
     * Unload a loaded model from memory
     * 
     * endpoint: /api/v1/models/unload 
     * docs: https://lmstudio.ai/docs/developer/rest/unload
     * */
    public unload(
        options: ModelUnloadOptions
    ): Promise<ModelUnloadResult> {
        return this.connection.jsonRequest("/api/v1/models/unload", {
            method: "POST",
            body: JSON.stringify(options),
        });
    } 
    
    /** 
     * Get a list of available models on your system, including both LLMs and embedding models.
     * 
     * endpoint: /api/v1/models
     * docs: https://lmstudio.ai/docs/developer/rest/list
     * */
    public list(): Promise<ModelListResult> {
        return this.connection.jsonRequest("/api/v1/models");
    }
}
