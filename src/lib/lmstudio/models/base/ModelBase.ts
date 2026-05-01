import ModelQuantization from "./quantization/ModelQuantization";
import LoadedModelInstance from "./runtime/LoadedModelInstance";
import ModelReasoningConfig from "./reasoning/ModelReasoningConfig";
import ModelType from "./ModelType";
import ModelFileFormat from "./ModelFileFormat";

export interface ModelBase {
  /**
   * Type of model.
   */
  type: ModelType;

  /**
   * Model publisher name.
   */
  publisher: string;

  /**
   * Unique identifier for the model.
   */
  key: string;

  /**
   * Human-readable model name.
   */
  display_name: string;

  /**
   * Quantization information for the model.
   */
  quantization: ModelQuantization | null;


  /**
   * Size of the model in bytes.
   */
  size_bytes: number;


  /**
   * Human-readable parameter count (e.g. "7B", "13B").
   */
  params_string: string | null;

  /**
   * List of currently loaded instances of this model.
   */
  loaded_instances: LoadedModelInstance[];

  /**
   * Model file format.
   */
  format: ModelFileFormat | null;


  /**
   * Public reasoning configuration for the model.
   * Not present when no reasoning config is exposed.
   */
  reasoning?: ModelReasoningConfig;

  /**
   * Available quantization variants.
   */
  variants?: string[];

  /**
   * Currently selected variant.
   */
  selected_variant?: string;
}
