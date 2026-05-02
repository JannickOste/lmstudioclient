import Integration from "../../integration/Integration";
import ChatInputItem from "../../io/input/ChatInputItem";
/**
 * Send a message to a model and receive a response. Supports MCP integration.
 * DOCS: https://lmstudio.ai/docs/developer/rest/chat
 */
type SendMessageOptions = {
  /** Unique identifier for the model to use. */
  model: string;

  /** Message to send to the model. */
  input: ChatInputItem[];

  /** System message that sets model behavior or instructions. */
  system_prompt?: string;

  /** List of integrations (plugins, MCP servers, etc.). */
  integrations?: Integration[];

  /** Whether to stream partial outputs via SSE. */
  stream?: boolean;

  /** Randomness in token selection [0,1]. */
  temperature?: number;

  /** Nucleus sampling threshold [0,1]. */
  top_p?: number;

  /** Limits next token selection to top-k tokens. */
  top_k?: number;

  /** Minimum probability threshold [0,1]. */
  min_p?: number;

  /** Penalty for repetition (1 = none). */
  repeat_penalty?: number;

  /** Max number of tokens to generate. */
  max_output_tokens?: number;

  /** Reasoning mode. */
  reasoning?: "off" | "low" | "medium" | "high" | "on";

  /** Context length in tokens. */
  context_length?: number;

  /** Whether to store the chat. */
  store?: boolean;

  /** Previous response to continue from. */
  previous_response_id?: string;
}

export default SendMessageOptions; 