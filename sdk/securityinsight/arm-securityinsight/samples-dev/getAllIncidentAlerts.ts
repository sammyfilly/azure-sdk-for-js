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
 * This sample demonstrates how to Gets all incident alerts.
 *
 * @summary Gets all incident alerts.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2021-09-01-preview/examples/incidents/GetAllIncidentAlerts.json
 */
import { SecurityInsights } from "@azure/arm-securityinsight";
import { DefaultAzureCredential } from "@azure/identity";

async function getAllIncidentAlerts() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const incidentId = "afbd324f-6c48-459c-8710-8d1e1cd03812";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.incidents.listAlerts(
    resourceGroupName,
    workspaceName,
    incidentId
  );
  console.log(result);
}

getAllIncidentAlerts().catch(console.error);
