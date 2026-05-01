import EmbeddingModel from "./embedding/EmbeddingModel";
import LLMModel from "./llm/LLMModel";

/**
 * Represents a model available in LM Studio.
 * Can be either an LLM or embedding model.
 */
type LMStudioModel = LLMModel | EmbeddingModel;

export default LMStudioModel;