/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import {
  OperationsImpl,
  SkusImpl,
  UsageModelsImpl,
  AscOperationsImpl,
  CachesImpl,
  StorageTargetsImpl,
  StorageTargetOperationsImpl
} from "./operations";
import {
  Operations,
  Skus,
  UsageModels,
  AscOperations,
  Caches,
  StorageTargets,
  StorageTargetOperations
} from "./operationsInterfaces";
import { StorageCacheManagementClientOptionalParams } from "./models";

export class StorageCacheManagementClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the StorageCacheManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.
   *                       The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: StorageCacheManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: StorageCacheManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-storagecache/5.0.0`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-09-01";
    this.operations = new OperationsImpl(this);
    this.skus = new SkusImpl(this);
    this.usageModels = new UsageModelsImpl(this);
    this.ascOperations = new AscOperationsImpl(this);
    this.caches = new CachesImpl(this);
    this.storageTargets = new StorageTargetsImpl(this);
    this.storageTargetOperations = new StorageTargetOperationsImpl(this);
  }

  operations: Operations;
  skus: Skus;
  usageModels: UsageModels;
  ascOperations: AscOperations;
  caches: Caches;
  storageTargets: StorageTargets;
  storageTargetOperations: StorageTargetOperations;
}
