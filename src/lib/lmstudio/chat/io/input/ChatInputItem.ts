import ChatImageMessage from "./ChatImageMessage";
import ChatTextMessage from "./ChatTextMessage";

/** Either a text or image input given by the user or the model. */
type ChatInputItem = ChatImageMessage | ChatTextMessage;

export default ChatInputItem; 
