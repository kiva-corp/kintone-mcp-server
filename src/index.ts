// ============================================
// Library API (Primary Use Case)
// ============================================

// Main registration interface
export {
  registerKintoneTools,
  type RegisterKintoneToolsOptions,
} from "./register.js";

// Client utilities
export {
  createKintoneClient,
  type KintoneClientConfig,
} from "./client/index.js";

// Individual tools and tool groups
export {
  // Individual tools
  addApp,
  deployApp,
  getApp,
  getApps,
  addFormFields,
  deleteFormFields,
  updateFormFields,
  getFormFields,
  updateFormLayout,
  getFormLayout,
  updateGeneralSettings,
  getGeneralSettings,
  getAppDeployStatus,
  getProcessManagement,
  addRecords,
  getRecords,
  updateRecords,
  deleteRecords,
  updateStatuses,
  downloadFile,
  // Tool groups
  kintoneAppTools,
  kintoneRecordTools,
  kintoneFileTools,
  tools,
} from "./tools/index.js";

// Type exports
export type { ToolCallbackOptions, Tool } from "./tools/types/tool.js";

// ============================================
// Standalone Server API (Backward Compatibility)
// ============================================

export {
  createServer,
  type KintoneMcpServerOptions,
} from "./server/index.js";
