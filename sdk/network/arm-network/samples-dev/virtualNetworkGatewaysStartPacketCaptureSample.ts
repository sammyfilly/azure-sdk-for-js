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
  VpnPacketCaptureStartParameters,
  VirtualNetworkGatewaysStartPacketCaptureOptionalParams,
  NetworkManagementClient
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Starts packet capture on virtual network gateway in the specified resource group.
 *
 * @summary Starts packet capture on virtual network gateway in the specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/VirtualNetworkGatewayStartPacketCaptureFilterData.json
 */
async function startPacketCaptureOnVirtualNetworkGatewayWithFilter() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualNetworkGatewayName = "vpngw";
  const parameters: VpnPacketCaptureStartParameters = {
    filterData:
      "{'TracingFlags': 11,'MaxPacketBufferSize': 120,'MaxFileSize': 200,'Filters': [{'SourceSubnets': ['20.1.1.0/24'],'DestinationSubnets': ['10.1.1.0/24'],'SourcePort': [500],'DestinationPort': [4500],'Protocol': 6,'TcpFlags': 16,'CaptureSingleDirectionTrafficOnly': true}]}"
  };
  const options: VirtualNetworkGatewaysStartPacketCaptureOptionalParams = {
    parameters
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkGateways.beginStartPacketCaptureAndWait(
    resourceGroupName,
    virtualNetworkGatewayName,
    options
  );
  console.log(result);
}

startPacketCaptureOnVirtualNetworkGatewayWithFilter().catch(console.error);

/**
 * This sample demonstrates how to Starts packet capture on virtual network gateway in the specified resource group.
 *
 * @summary Starts packet capture on virtual network gateway in the specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-08-01/examples/VirtualNetworkGatewayStartPacketCapture.json
 */
async function startPacketCaptureOnVirtualNetworkGatewayWithoutFilter() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualNetworkGatewayName = "vpngw";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkGateways.beginStartPacketCaptureAndWait(
    resourceGroupName,
    virtualNetworkGatewayName
  );
  console.log(result);
}

startPacketCaptureOnVirtualNetworkGatewayWithoutFilter().catch(console.error);
