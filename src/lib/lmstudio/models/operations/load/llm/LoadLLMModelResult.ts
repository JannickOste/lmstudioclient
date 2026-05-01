import BaseModelLoadResult from "../base/BaseModelLoadResult";
import LLMLoadConfig from "./LLMLoadConfig";

/**
 * Response for a loaded LLM model.
 */
type LoadLLMModelResult = BaseModelLoadResult & {
  /**
   * Type discriminator.
   */
  type: "llm";

  /**
   * Final configuration applied to the model.
   * Only present when echo_load_config is true.
   */
  load_config?: LLMLoadConfig;
}

export default LoadLLMModelResult;