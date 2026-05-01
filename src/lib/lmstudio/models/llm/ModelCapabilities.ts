/**
 * Capabilities of a LLM model.
 */
type ModelCapabilities = {
  /**
   * Whether the model supports vision/image inputs.
   */
  vision: boolean;

  /**
   * Whether the model supports tool/function calling.
   */
  trained_for_tool_use: boolean;
}

export default ModelCapabilities;