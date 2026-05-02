
/**
 * A tool call executed by the model.
 */

import ProviderInfo from "../../providers/ProviderInfo";

type ToolCallMessage = {
  /**
   * Type of output item.
   */
  type: "tool_call";

  /**
   * Name of the tool that was called.
   */
  tool: string;

  /**
   * Arguments passed to the tool.
   */
  arguments: Record<string, unknown>;

  /**
   * Result returned from the tool execution.
   */
  output: string;

  /**
   * Information about the tool provider.
   */
  provider_info: ProviderInfo;
}

export default ToolCallMessage;