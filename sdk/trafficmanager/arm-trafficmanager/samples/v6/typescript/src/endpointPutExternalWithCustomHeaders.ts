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
 * This sample demonstrates how to Create or update a Traffic Manager endpoint.
 *
 * @summary Create or update a Traffic Manager endpoint.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2018-08-01/examples/Endpoint-PUT-External-WithCustomHeaders.json
 */
import {
  Endpoint,
  TrafficManagerManagementClient
} from "@azure/arm-trafficmanager";
import { DefaultAzureCredential } from "@azure/identity";

async function endpointPutExternalWithCustomHeaders() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "azuresdkfornetautoresttrafficmanager1421";
  const profileName = "azsmnet6386";
  const endpointType = "ExternalEndpoints";
  const endpointName = "azsmnet7187";
  const parameters: Endpoint = {
    name: "azsmnet7187",
    type: "Microsoft.network/TrafficManagerProfiles/ExternalEndpoints",
    customHeaders: [
      { name: "header-1", value: "value-1" },
      { name: "header-2", value: "value-2" }
    ],
    endpointLocation: "North Europe",
    endpointStatus: "Enabled",
    target: "foobar.contoso.com"
  };
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.endpoints.createOrUpdate(
    resourceGroupName,
    profileName,
    endpointType,
    endpointName,
    parameters
  );
  console.log(result);
}

endpointPutExternalWithCustomHeaders().catch(console.error);
