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
 * This sample demonstrates how to Creates or updates a watchlist and its watchlist items (bulk creation, e.g. through text/csv content type). To create a Watchlist and its items, we should call this endpoint with rawContent and contentType properties.
 *
 * @summary Creates or updates a watchlist and its watchlist items (bulk creation, e.g. through text/csv content type). To create a Watchlist and its items, we should call this endpoint with rawContent and contentType properties.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2021-09-01-preview/examples/watchlists/CreateWatchlist.json
 */
import { Watchlist, SecurityInsights } from "@azure/arm-securityinsight";
import { DefaultAzureCredential } from "@azure/identity";

async function createsOrUpdatesAWatchlist() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const watchlistAlias = "highValueAsset";
  const watchlist: Watchlist = {
    description: "Watchlist from CSV content",
    displayName: "High Value Assets Watchlist",
    etag: '"0300bf09-0000-0000-0000-5c37296e0000"',
    itemsSearchKey: "header1",
    provider: "Microsoft",
    source: "Local file"
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.watchlists.createOrUpdate(
    resourceGroupName,
    workspaceName,
    watchlistAlias,
    watchlist
  );
  console.log(result);
}

createsOrUpdatesAWatchlist().catch(console.error);
