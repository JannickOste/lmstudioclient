/**
 * Token usage and performance metrics.
 */
type ResponseStatistics = {
    /**
     * Number of input tokens (prompt + context + tools).
     */
    input_tokens: number;

    /**
     * Total number of output tokens generated.
     */
    total_output_tokens: number;

    /**
     * Tokens used for reasoning.
     */
    reasoning_output_tokens: number;

    /**
     * Generation speed in tokens per second.
     */
    tokens_per_second: number;

    /**
     * Time to first token in seconds.
     */
    time_to_first_token_seconds: number;

    /**
     * Model load time (only if not already loaded).
     */
    model_load_time_seconds?: number;
}

export default ResponseStatistics;