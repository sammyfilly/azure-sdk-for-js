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
 * This sample demonstrates how to Creates a new prefix with the specified name under the given subscription, resource group and peering service.
 *
 * @summary Creates a new prefix with the specified name under the given subscription, resource group and peering service.
 * x-ms-original-file: specification/peering/resource-manager/Microsoft.Peering/stable/2021-06-01/examples/CreatePeeringServicePrefix.json
 */
const { PeeringManagementClient } = require("@azure/arm-peering");
const { DefaultAzureCredential } = require("@azure/identity");

async function createOrUpdateAPrefixForThePeeringService() {
  const subscriptionId = "subId";
  const resourceGroupName = "rgName";
  const peeringServiceName = "peeringServiceName";
  const prefixName = "peeringServicePrefixName";
  const peeringServicePrefix = {
    peeringServicePrefixKey: "00000000-0000-0000-0000-000000000000",
    prefix: "192.168.1.0/24",
  };
  const credential = new DefaultAzureCredential();
  const client = new PeeringManagementClient(credential, subscriptionId);
  const result = await client.prefixes.createOrUpdate(
    resourceGroupName,
    peeringServiceName,
    prefixName,
    peeringServicePrefix
  );
  console.log(result);
}

createOrUpdateAPrefixForThePeeringService().catch(console.error);
