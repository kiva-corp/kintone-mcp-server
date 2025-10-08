import type { Tool } from "./types/tool.js";
import { addRecords } from "./kintone/record/add-records.js";
import { deleteRecords } from "./kintone/record/delete-records.js";
import { getRecords } from "./kintone/record/get-records.js";
import { updateRecords } from "./kintone/record/update-records.js";
import { getApp } from "./kintone/app/get-app.js";
import { getApps } from "./kintone/app/get-apps.js";
import { getFormFields } from "./kintone/app/get-form-fields.js";
import { getFormLayout } from "./kintone/app/get-form-layout.js";
import { updateFormFields } from "./kintone/app/update-form-fields.js";
import { updateFormLayout } from "./kintone/app/update-form-layout.js";
import { deleteFormFields } from "./kintone/app/delete-form-fields.js";
import { getProcessManagement } from "./kintone/app/get-process-management.js";
import { getAppDeployStatus } from "./kintone/app/get-app-deploy-status.js";
import { getGeneralSettings } from "./kintone/app/get-general-settings.js";
import { addFormFields } from "./kintone/app/add-form-fields.js";
import { updateStatuses } from "./kintone/record/update-statuses.js";
import { addApp } from "./kintone/app/add-app.js";
import { deployApp } from "./kintone/app/deploy-app.js";
import { updateGeneralSettings } from "./kintone/app/update-general-settings.js";
import { downloadFile } from "./kintone/file/download-file.js";

export { createToolCallback } from "./factory.js";

// Individual tool exports for external use
export { addApp } from "./kintone/app/add-app.js";
export { deployApp } from "./kintone/app/deploy-app.js";
export { getApp } from "./kintone/app/get-app.js";
export { getApps } from "./kintone/app/get-apps.js";
export { addFormFields } from "./kintone/app/add-form-fields.js";
export { deleteFormFields } from "./kintone/app/delete-form-fields.js";
export { updateFormFields } from "./kintone/app/update-form-fields.js";
export { getFormFields } from "./kintone/app/get-form-fields.js";
export { updateFormLayout } from "./kintone/app/update-form-layout.js";
export { getFormLayout } from "./kintone/app/get-form-layout.js";
export { updateGeneralSettings } from "./kintone/app/update-general-settings.js";
export { getGeneralSettings } from "./kintone/app/get-general-settings.js";
export { getAppDeployStatus } from "./kintone/app/get-app-deploy-status.js";
export { getProcessManagement } from "./kintone/app/get-process-management.js";
export { addRecords } from "./kintone/record/add-records.js";
export { getRecords } from "./kintone/record/get-records.js";
export { updateRecords } from "./kintone/record/update-records.js";
export { deleteRecords } from "./kintone/record/delete-records.js";
export { updateStatuses } from "./kintone/record/update-statuses.js";
export { downloadFile } from "./kintone/file/download-file.js";

// Tool groups for category-based registration
export const kintoneAppTools = [
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
] as const;

export const kintoneRecordTools = [
  addRecords,
  getRecords,
  updateRecords,
  deleteRecords,
  updateStatuses,
] as const;

export const kintoneFileTools = [downloadFile] as const;

// All tools (for internal use and backward compatibility)
export const tools: Array<Tool<any, any>> = [
  ...kintoneAppTools,
  ...kintoneRecordTools,
  ...kintoneFileTools,
] as const;
