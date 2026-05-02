import ProviderInfo from "../../providers/ProviderInfo";
import InvalidToolCallMessageMetadata from "./metadata/InvalidToolCallMessageMetadata";

/**
 * A tool call that failed validation or execution.
 */
type InvalidToolCallMessage = {
    /**
    * Type of output item.
    */
    type: "invalid_tool_call";

    /**
     * Reason why the tool call failed.
     */
    reason: string;

    /**
     * Metadata about the failure.
     */
    metadata: InvalidToolCallMessageMetadata;

    /**
     * Name of the tool that was attempted.
     */
    tool_name: string;

    /**
     * Arguments passed to the tool (if available).
     */
    arguments?: Record<string, unknown>;

    /**
     * Provider information (if available).
     */
    provider_info?: ProviderInfo;
}

export default InvalidToolCallMessage;