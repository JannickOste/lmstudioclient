

/**
 * Unload a model
 * - Unload a loaded model from memory
 * - DOCS: https://lmstudio.ai/docs/developer/rest/unload
 */
type ModelUnloadOptions =  { 
    /** Unique identifier of the model instance to unload. */
    instance_id : string;
}

export default ModelUnloadOptions;