/**
 * Configuration applied to an LLM model.
 * Only includes parameters that were actually used.
 */
type LLMLoadConfig = {
  /**
   * Maximum number of tokens the model will consider.
   */
  context_length?: number;

  /**
   * Batch size used during evaluation.
   */
  eval_batch_size?: number;

  /**
   * Whether Flash Attention is enabled.
   */
  flash_attention?: boolean;

  /**
   * Number of experts (MoE models only).
   */
  num_experts?: number;

  /**
   * Whether KV cache is offloaded to GPU.
   */
  offload_kv_cache_to_gpu?: boolean;
}

export default LLMLoadConfig;