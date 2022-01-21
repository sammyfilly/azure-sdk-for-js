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
 * This sample demonstrates how to For the specified Azure region (location), subscription, and resource provider, get the history of the quota requests for the past year. To select specific quota requests, use the oData filter.
 *
 * @summary For the specified Azure region (location), subscription, and resource provider, get the history of the quota requests for the past year. To select specific quota requests, use the oData filter.
 * x-ms-original-file: specification/reservations/resource-manager/Microsoft.Capacity/stable/2020-10-25/examples/getQuotaRequestsHistory.json
 */
import { AzureReservationAPI } from "@azure/arm-reservations";
import { DefaultAzureCredential } from "@azure/identity";

async function quotaRequestHistory() {
  const subscriptionId = "3f75fdf7-977e-44ad-990d-99f14f0f299f";
  const providerId = "Microsoft.Compute";
  const location = "eastus";
  const credential = new DefaultAzureCredential();
  const client = new AzureReservationAPI(credential);
  const resArray = new Array();
  for await (let item of client.quotaRequestStatus.list(
    subscriptionId,
    providerId,
    location
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

quotaRequestHistory().catch(console.error);
