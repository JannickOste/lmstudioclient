import MCPIntegration from "./mcp/MCPIntegration";
import PluginIntegration from "./plugin/PluginIntegration";

/**
 * Supported integration types for extending model capabilities.
 */
type Integration = PluginIntegration | MCPIntegration; 

export default Integration;