import ModelBase  from "../base/ModelBase";
import ModelCapabilities from "./ModelCapabilities";


type LLMModel = ModelBase & {
  type: "llm";

  /**
   * Model architecture (e.g. "llama", "mistral").
   */
  architecture?: string | null;


  /**
   * Model capabilities.
   */
  capabilities?: ModelCapabilities;

  /**
   * Model description.
   */
  description?: string | null;
}


export default LLMModel;