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
 * This sample demonstrates how to Tells a Cache to write all dirty data to the Storage Target(s). During the flush, clients will see errors returned until the flush is complete.
 *
 * @summary Tells a Cache to write all dirty data to the Storage Target(s). During the flush, clients will see errors returned until the flush is complete.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/stable/2021-09-01/examples/Caches_Flush.json
 */
const { StorageCacheManagementClient } = require("@azure/arm-storagecache");
const { DefaultAzureCredential } = require("@azure/identity");

async function cachesFlush() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "scgroup";
  const cacheName = "sc";
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const result = await client.caches.beginFlushAndWait(resourceGroupName, cacheName);
  console.log(result);
}

cachesFlush().catch(console.error);
