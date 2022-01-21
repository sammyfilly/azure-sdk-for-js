/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Provides a pageable list of workload item of a specific container according to the query filter and the pagination
parameters.
 *
 * @summary Provides a pageable list of workload item of a specific container according to the query filter and the pagination
parameters.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2021-10-01/examples/AzureWorkload/BackupWorkloadItems_List.json
 */
import { RecoveryServicesBackupClient } from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";

async function listWorkloadItemsInContainer() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const vaultName = "suchandr-seacan-rsv";
  const resourceGroupName = "testRg";
  const fabricName = "Azure";
  const containerName = "VMAppContainer;Compute;bvtdtestag;sqlserver-1";
  const filter = "backupManagementType eq 'AzureWorkload'";
  const options = { filter: filter };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.backupWorkloadItems.list(
    vaultName,
    resourceGroupName,
    fabricName,
    containerName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listWorkloadItemsInContainer().catch(console.error);
