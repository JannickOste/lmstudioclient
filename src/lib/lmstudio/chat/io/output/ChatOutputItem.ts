
import ChatImageMessage from "../input/ChatImageMessage";
import ChatTextMessage from "../input/ChatTextMessage";
import InvalidToolCallMessage from "./InvalidToolCallMessage";
import ReasoningMessage from "./ReasoningMessage";
import ToolCallMessage from "./ToolCallMessage";

/**
 * All possible output item types returned by the model.
 */
type ChatOutputItem = ChatTextMessage | 
    ChatImageMessage |
    ToolCallMessage |
    InvalidToolCallMessage |
    ReasoningMessage;

export default ChatOutputItem;