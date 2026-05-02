
/**
* An ephemeral MCP server integration.
* Allows defining MCP servers dynamically per request.
*/
type MCPIntegration = {
    /**
     * Type of integration.
     */
    type: "ephemeral_mcp";

    /**
     * Human-readable label for the MCP server.
     */
    server_label: string;

    /**
     * Base URL of the MCP server.
     */
    server_url: string;

    /**
     * Optional list of allowed tool names exposed by this server.
     * If omitted, all tools are available.
     */
    allowed_tools?: string[];

    /**
     * Optional custom HTTP headers sent to the MCP server.
     */
    headers?: Record<string, string>;
}

export default MCPIntegration;