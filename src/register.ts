import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { KintoneRestAPIClient } from "@kintone/rest-api-client";
import { tools } from "./tools/index.js";
import { createToolCallback } from "./tools/factory.js";

/**
 * Options for registering Kintone tools to an MCP server
 */
export type RegisterKintoneToolsOptions = {
  /**
   * Factory function to create KintoneRestAPIClient instance
   * Called for each tool invocation, allowing per-request client creation
   *
   * @example
   * ```typescript
   * getClient: () => new KintoneRestAPIClient({
   *   baseUrl: 'https://example.kintone.com',
   *   auth: { apiToken: process.env.API_TOKEN }
   * })
   * ```
   */
  getClient: () => KintoneRestAPIClient;

  /**
   * Optional directory path for file attachments
   * Used by file download tools
   */
  attachmentsDir?: string;

  /**
   * Optional filter to enable/disable specific tools
   * - Array: Only tools in the array are registered
   * - Function: Tools for which the function returns true are registered
   * - Undefined: All tools are registered (default)
   *
   * @example
   * ```typescript
   * // Register only specific tools
   * enabledTools: ['kintone-add-app', 'kintone-get-records']
   *
   * // Register all record-related tools
   * enabledTools: (name) => name.includes('record')
   * ```
   */
  enabledTools?: string[] | ((toolName: string) => boolean);
};

/**
 * Register all or filtered Kintone tools to an MCP server
 *
 * @param server - MCP server instance to register tools to
 * @param options - Configuration options for tool registration
 *
 * @example
 * ```typescript
 * import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
 * import { registerKintoneTools, createKintoneClient } from '@kiva-corp/kintone-mcp-server';
 *
 * const server = new McpServer({ name: 'my-server', version: '1.0.0' });
 *
 * registerKintoneTools(server, {
 *   getClient: () => createKintoneClient({
 *     KINTONE_BASE_URL: process.env.KINTONE_BASE_URL,
 *     KINTONE_API_TOKEN: process.env.KINTONE_API_TOKEN,
 *   })
 * });
 * ```
 */
export const registerKintoneTools = (
  server: McpServer,
  options: RegisterKintoneToolsOptions,
): void => {
  const { getClient, attachmentsDir, enabledTools } = options;

  // Filter logic
  const shouldEnable = (toolName: string): boolean => {
    if (!enabledTools) return true;
    if (Array.isArray(enabledTools)) return enabledTools.includes(toolName);
    return enabledTools(toolName);
  };

  // Register filtered tools
  tools
    .filter((tool) => shouldEnable(tool.name))
    .forEach((tool) => {
      server.registerTool(
        tool.name,
        tool.config,
        createToolCallback(tool.callback, { getClient, attachmentsDir }),
      );
    });
};
