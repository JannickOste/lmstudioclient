import ReasoningMode from "./ReasoningMode";

/**
 * Public reasoning configuration for a model.
 */
type ModelReasoningConfig = {
  /**
   * Allowed reasoning modes.
   */
  allowed_options: ReasoningMode[];

  /**
   * Default reasoning mode.
   */
  default: ReasoningMode;
}

export default ModelReasoningConfig;