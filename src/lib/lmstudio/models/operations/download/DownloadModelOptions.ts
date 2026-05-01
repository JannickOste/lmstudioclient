

type DownloadModelOptions = {
    /** The model to download. Accepts model catalog identifiers (e.g., openai/gpt-oss-20b) and exact Hugging Face links (e.g., https://huggingface.co/lmstudio-community/gpt-oss-20b-GGUF) */
    model: string;

    /** Quantization level of the model to download (e.g., Q4_K_M). Only supported for Hugging Face links. */
    quantization?: string;
}

export default DownloadModelOptions;