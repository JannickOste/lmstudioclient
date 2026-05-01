import ModelType from "../../../base/ModelType"
/**
 * Base fields shared across all model load responses.
 */
type BaseModelLoadResult = {
  /**
   * Type of the loaded model.
   */
  type: ModelType

  /**
   * Unique identifier for the loaded model instance.
   */
  instance_id: string;

  /**
   * Time taken to load the model in seconds.
   */
  load_time_seconds: number;

  /**
   * Load status.
   */
  status: "loaded";
}

export default BaseModelLoadResult;