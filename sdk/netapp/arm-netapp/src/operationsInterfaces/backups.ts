/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Backup,
  BackupsListOptionalParams,
  BackupsGetStatusOptionalParams,
  BackupsGetStatusResponse,
  BackupsGetVolumeRestoreStatusOptionalParams,
  BackupsGetVolumeRestoreStatusResponse,
  BackupsGetOptionalParams,
  BackupsGetResponse,
  BackupsCreateOptionalParams,
  BackupsCreateResponse,
  BackupsUpdateOptionalParams,
  BackupsUpdateResponse,
  BackupsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Backups. */
export interface Backups {
  /**
   * List all backups for a volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: BackupsListOptionalParams
  ): PagedAsyncIterableIterator<Backup>;
  /**
   * Get the status of the backup for a volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  getStatus(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: BackupsGetStatusOptionalParams
  ): Promise<BackupsGetStatusResponse>;
  /**
   * Get the status of the restore for a volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param options The options parameters.
   */
  getVolumeRestoreStatus(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    options?: BackupsGetVolumeRestoreStatusOptionalParams
  ): Promise<BackupsGetVolumeRestoreStatusResponse>;
  /**
   * Gets the specified backup of the volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param backupName The name of the backup
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    backupName: string,
    options?: BackupsGetOptionalParams
  ): Promise<BackupsGetResponse>;
  /**
   * Create a backup for the volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param backupName The name of the backup
   * @param body Backup object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    backupName: string,
    body: Backup,
    options?: BackupsCreateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<BackupsCreateResponse>, BackupsCreateResponse>
  >;
  /**
   * Create a backup for the volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param backupName The name of the backup
   * @param body Backup object supplied in the body of the operation.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    backupName: string,
    body: Backup,
    options?: BackupsCreateOptionalParams
  ): Promise<BackupsCreateResponse>;
  /**
   * Patch a backup for the volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param backupName The name of the backup
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    backupName: string,
    options?: BackupsUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<BackupsUpdateResponse>, BackupsUpdateResponse>
  >;
  /**
   * Patch a backup for the volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param backupName The name of the backup
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    backupName: string,
    options?: BackupsUpdateOptionalParams
  ): Promise<BackupsUpdateResponse>;
  /**
   * Delete a backup of the volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param backupName The name of the backup
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    backupName: string,
    options?: BackupsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete a backup of the volume
   * @param resourceGroupName The name of the resource group.
   * @param accountName The name of the NetApp account
   * @param poolName The name of the capacity pool
   * @param volumeName The name of the volume
   * @param backupName The name of the backup
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    poolName: string,
    volumeName: string,
    backupName: string,
    options?: BackupsDeleteOptionalParams
  ): Promise<void>;
}
