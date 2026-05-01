/**
 * Configuration applied to an embedding model.
 */
type EmbeddingLoadConfig  = {
  /**
   * Maximum number of tokens the model will consider.
   */
  context_length: number;
}

export default EmbeddingLoadConfig;