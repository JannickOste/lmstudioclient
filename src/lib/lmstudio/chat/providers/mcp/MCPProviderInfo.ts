/** EphemeralMCPProviderInfo */
type MCPProviderInfo = {
  /**
   * Provider type.
   */
  type: "ephemeral_mcp";

  /**
   * MCP server label (optional depending on context).
   */
  server_label?: string;
}

export default MCPProviderInfo;
