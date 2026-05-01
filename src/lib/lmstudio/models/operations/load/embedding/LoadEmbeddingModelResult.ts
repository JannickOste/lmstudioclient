import BaseModelLoadResult from "../base/BaseModelLoadResult";
import EmbeddingLoadConfig from "./EmbeddingLoadConfig";

/**
 * Response for a loaded embedding model.
 */
type LoadEmbeddingModelResult = BaseModelLoadResult & {
  /**
   * Type discriminator.
   */
  type: "embedding";

  /**
   * Final configuration applied to the embedding model.
   * Only present when echo_load_config is true.
   */
  load_config?: EmbeddingLoadConfig;
}

export default LoadEmbeddingModelResult;