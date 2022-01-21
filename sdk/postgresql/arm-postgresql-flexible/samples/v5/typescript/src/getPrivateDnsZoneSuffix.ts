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
 * This sample demonstrates how to Get private DNS zone suffix in the cloud
 *
 * @summary Get private DNS zone suffix in the cloud
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/stable/2021-06-01/examples/GetPrivateDnsZoneSuffix.json
 */
import { PostgreSQLManagementClient } from "@azure/arm-postgresql-flexible";
import { DefaultAzureCredential } from "@azure/identity";

async function getPrivateDnsZoneSuffix() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementClient(credential, subscriptionId);
  const result = await client.getPrivateDnsZoneSuffix.execute();
  console.log(result);
}

getPrivateDnsZoneSuffix().catch(console.error);
