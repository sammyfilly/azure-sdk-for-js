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
  NetworkInterfaceTapConfiguration,
  NetworkManagementClient
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates a Tap configuration in the specified NetworkInterface.
 *
 * @summary Creates or updates a Tap configuration in the specified NetworkInterface.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/NetworkInterfaceTapConfigurationCreate.json
 */
async function createNetworkInterfaceTapConfigurations() {
  const subscriptionId = "subid";
  const resourceGroupName = "testrg";
  const networkInterfaceName = "mynic";
  const tapConfigurationName = "tapconfiguration1";
  const tapConfigurationParameters: NetworkInterfaceTapConfiguration = {
    virtualNetworkTap: {
      id:
        "/subscriptions/subid/resourceGroups/testrg/providers/Microsoft.Network/virtualNetworkTaps/testvtap"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.networkInterfaceTapConfigurations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    networkInterfaceName,
    tapConfigurationName,
    tapConfigurationParameters
  );
  console.log(result);
}

createNetworkInterfaceTapConfigurations().catch(console.error);
