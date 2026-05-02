/**
 * Plugin-based tool provider.
 */

type PluginProviderInfo = {
    /**
     * Provider type.
     */
    type: "plugin";

    /**
     * Plugin identifier (optional depending on context).
     */
    plugin_id?: string;
}

export default PluginProviderInfo; 
