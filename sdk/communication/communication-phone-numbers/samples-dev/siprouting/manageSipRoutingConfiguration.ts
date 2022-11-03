// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SipRoutingClient } from "@azure/communication-phone-numbers";

import * as dotenv from "dotenv";
dotenv.config();

// NOTE: Before running the example please make sure that the trunks and the routes are empty for specified connection string.
// Otherwise the example may fail on data constraints.
const connectionString =
  process.env.COMMUNICATION_SAMPLES_CONNECTION_STRING ||
  "endpoint=https://resourceName.communication.azure.net/;accessKey=test-key";

export async function main() {
  console.log("\n== SIP Routing Client Example ==\n");

  // Build client
  const client = new SipRoutingClient(connectionString);

  // Set trunks
  await client.setTrunks([
    {
      fqdn: "first.sample.com",
      sipSignalingPort: 1234,
    },
    {
      fqdn: "first1.sample.com",
      sipSignalingPort: 1234,
    },
  ]);

  // Set routes
  await client.setRoutes([
    {
      name: "First Route",
      description: "First sample",
      numberPattern: "^+[1-9][0-9]{3,23}$",
      trunks: ["first.sample.com"],
    },
    {
      name: "Second Route",
      description: "Second sample",
      numberPattern: "^.*$",
      trunks: ["first1.sample.com", "first.sample.com"],
    },
  ]);

  // Update a trunk
  await client.setTrunk({
    fqdn: "first.sample.com",
    sipSignalingPort: 4321,
  });

  // Get trunks
  const trunks = await client.getTrunks();
  for (const trunk of trunks) {
    console.log(`Trunk ${trunk.fqdn}:${trunk.sipSignalingPort}`);
  }

  // Get routes
  const routes = await client.getRoutes();
  for (const route of routes) {
    console.log(`Route ${route.name} with pattern ${route.numberPattern}`);
    console.log(`Route's trunks: ${route.trunks?.join()}`);
  }
}

main().catch((error) => {
  console.log("The sample encountered an error:", error);
  process.exit(1);
});
