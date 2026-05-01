import ModelBase from "../../base/ModelBase";
import LLMLoadConfig from "./llm/LLMLoadConfig";

/**
 * Request body for loading a model in LM Studio.
 * docs: https://lmstudio.ai/docs/developer/rest/load
 */
type ModelLoadOptions = {
  /**
   * Unique identifier for the model to load.
   * Can be an LLM or embedding model.
   */
  model: ModelBase["key"];
} & LLMLoadConfig;

export default ModelLoadOptions;