
/**
* A plugin integration that enables predefined MCP-backed tools.
* Plugins are identified by a unique plugin ID.
*/
type PluginIntegration = {
    /**
     * Type of integration.
     */
    type: "plugin";

    /**
     * Unique identifier of the plugin.
     * Example: "mcp/github"
     */
    id: string;

    /**
     * Optional list of tool names allowed from this plugin.
     * If omitted, all tools in the plugin are available.
     */
    allowed_tools?: string[];
}

export default PluginIntegration; 