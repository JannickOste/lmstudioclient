import LMStudioModel from "../../LMStudioModel";

/**
 * List of available models (both LLMs and embedding models).
 * DOCS: https://lmstudio.ai/docs/developer/rest/list
 */
type ModelListResult = {
    /** List of available models in LM Studio. */
    models: LMStudioModel[]
}

export default ModelListResult;