import LoadEmbeddingModelResult from "./embedding/LoadEmbeddingModelResult";
import LoadLLMModelResult from "./llm/LoadLLMModelResult";

type ModelLoadResult = LoadLLMModelResult | LoadEmbeddingModelResult;

export default ModelLoadResult;