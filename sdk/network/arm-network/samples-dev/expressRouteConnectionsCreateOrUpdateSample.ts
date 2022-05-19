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
  ExpressRouteConnection,
  NetworkManagementClient
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates a connection between an ExpressRoute gateway and an ExpressRoute circuit.
 *
 * @summary Creates a connection between an ExpressRoute gateway and an ExpressRoute circuit.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/ExpressRouteConnectionCreate.json
 */
async function expressRouteConnectionCreate() {
  const subscriptionId = "subid";
  const resourceGroupName = "resourceGroupName";
  const expressRouteGatewayName = "gateway-2";
  const connectionName = "connectionName";
  const putExpressRouteConnectionParameters: ExpressRouteConnection = {
    name: "connectionName",
    authorizationKey: "authorizationKey",
    expressRouteCircuitPeering: {
      id:
        "/subscriptions/subid/resourceGroups/resourceGroupName/providers/Microsoft.Network/expressRouteCircuits/circuitName/peerings/AzurePrivatePeering"
    },
    id:
      "/subscriptions/subid/resourceGroups/resourceGroupName/providers/Microsoft.Network/expressRouteGateways/gateway-2/expressRouteConnections/connectionName",
    routingWeight: 2
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.expressRouteConnections.beginCreateOrUpdateAndWait(
    resourceGroupName,
    expressRouteGatewayName,
    connectionName,
    putExpressRouteConnectionParameters
  );
  console.log(result);
}

expressRouteConnectionCreate().catch(console.error);
