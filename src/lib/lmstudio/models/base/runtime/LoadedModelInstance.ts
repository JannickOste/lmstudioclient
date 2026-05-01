import LoadedModelConfig from "./LoadedModelConfig";

/**
 * A currently loaded model instance.
 */

type LoadedModelInstance = {
  /**
   * Unique identifier for the loaded model instance.
   */
  id: string;

  /**
   * Configuration for the loaded instance.
   */
  config: LoadedModelConfig;
}

export default LoadedModelInstance;