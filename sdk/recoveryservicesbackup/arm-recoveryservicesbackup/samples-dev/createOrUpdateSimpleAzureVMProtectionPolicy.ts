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
 * This sample demonstrates how to Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched
using GetPolicyOperationResult API.
 *
 * @summary Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can be fetched
using GetPolicyOperationResult API.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2021-10-01/examples/AzureIaasVm/ProtectionPolicies_CreateOrUpdate_Simple.json
 */
import {
  ProtectionPolicyResource,
  RecoveryServicesBackupClient
} from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";

async function createOrUpdateSimpleAzureVMProtectionPolicy() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const vaultName = "NetSDKTestRsVault";
  const resourceGroupName = "SwaggerTestRg";
  const policyName = "testPolicy1";
  const parameters: ProtectionPolicyResource = {
    properties: {
      backupManagementType: "AzureIaasVM",
      retentionPolicy: {
        dailySchedule: {
          retentionDuration: { count: 1, durationType: "Days" },
          retentionTimes: [new Date("2018-01-24T02:00:00Z")]
        },
        retentionPolicyType: "LongTermRetentionPolicy"
      },
      schedulePolicy: {
        schedulePolicyType: "SimpleSchedulePolicy",
        scheduleRunFrequency: "Daily",
        scheduleRunTimes: [new Date("2018-01-24T02:00:00Z")]
      },
      timeZone: "Pacific Standard Time"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectionPolicies.createOrUpdate(
    vaultName,
    resourceGroupName,
    policyName,
    parameters
  );
  console.log(result);
}

createOrUpdateSimpleAzureVMProtectionPolicy().catch(console.error);
