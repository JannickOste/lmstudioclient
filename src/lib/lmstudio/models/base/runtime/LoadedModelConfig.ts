/**
 * Configuration for a loaded model instance.
 */

type LoadedModelConfig = {
  /**
   * Maximum context length in tokens.
   */
  context_length: number;

  /**
   * Batch size for evaluation (LLM only).
   */
  eval_batch_size?: number;

  /**
   * Maximum number of parallel predictions (LLM only).
   */
  parallel?: number;

  /**
   * Whether Flash Attention is enabled (LLM only).
   */
  flash_attention?: boolean;

  /**
   * Number of experts (MoE models only).
   */
  num_experts?: number;

  /**
   * Whether KV cache is offloaded to GPU (LLM only).
   */
  offload_kv_cache_to_gpu?: boolean;

  /**
   * Maximum supported context length.
   */
  max_context_length: number;
}

export default LoadedModelConfig;