/**
 * Quantization details for a model.
 */

type ModelQuantization = {
  /**
   * Quantization method name.
   */
  name: string | null;

  /**
   * Bits per weight for quantization.
   */
  bits_per_weight: number | null;
};

export default ModelQuantization;