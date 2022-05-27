/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  WebhookCreateParameters,
  ContainerRegistryManagementClient
} from "@azure/arm-containerregistry";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates a webhook for a container registry with the specified parameters.
 *
 * @summary Creates a webhook for a container registry with the specified parameters.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2022-02-01-preview/examples/WebhookCreate.json
 */
async function webhookCreate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const registryName = "myRegistry";
  const webhookName = "myWebhook";
  const webhookCreateParameters: WebhookCreateParameters = {
    actions: ["push"],
    customHeaders: {
      authorization: ""
    },
    location: "westus",
    scope: "myRepository",
    serviceUri: "http://myservice.com",
    status: "enabled",
    tags: { key: "value" }
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.webhooks.beginCreateAndWait(
    resourceGroupName,
    registryName,
    webhookName,
    webhookCreateParameters
  );
  console.log(result);
}

webhookCreate().catch(console.error);
