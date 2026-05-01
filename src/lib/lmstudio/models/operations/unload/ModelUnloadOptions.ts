

/**
 * Unload a model
 * - Unload a loaded model from memory
 * - DOCS: https://lmstudio.ai/docs/developer/rest/unload
 */
export interface ModelUnloadOptions { 
    /** Unique identifier of the model instance to unload. */
    instance_id : string;
}