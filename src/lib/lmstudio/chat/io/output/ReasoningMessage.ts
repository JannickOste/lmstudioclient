/**
 * Internal reasoning output from the model.
 */
type ReasoningMessage = {
  /**
   * Type of output item.
   */
  type: "reasoning";

  /**
   * Reasoning text content.
   */
  content: string;
}

export default ReasoningMessage;