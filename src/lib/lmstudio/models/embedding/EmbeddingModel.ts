import ModelBase from "../base/ModelBase";
import ModelType  from "../base/ModelType";

type EmbeddingModel = ModelBase & {
  type: Extract<ModelType, "embedding">;
}

export default EmbeddingModel;