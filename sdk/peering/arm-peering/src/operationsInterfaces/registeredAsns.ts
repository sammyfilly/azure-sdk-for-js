/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PeeringRegisteredAsn,
  RegisteredAsnsListByPeeringOptionalParams,
  RegisteredAsnsGetOptionalParams,
  RegisteredAsnsGetResponse,
  RegisteredAsnsCreateOrUpdateOptionalParams,
  RegisteredAsnsCreateOrUpdateResponse,
  RegisteredAsnsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RegisteredAsns. */
export interface RegisteredAsns {
  /**
   * Lists all registered ASNs under the given subscription, resource group and peering.
   * @param resourceGroupName The name of the resource group.
   * @param peeringName The name of the peering.
   * @param options The options parameters.
   */
  listByPeering(
    resourceGroupName: string,
    peeringName: string,
    options?: RegisteredAsnsListByPeeringOptionalParams
  ): PagedAsyncIterableIterator<PeeringRegisteredAsn>;
  /**
   * Gets an existing registered ASN with the specified name under the given subscription, resource group
   * and peering.
   * @param resourceGroupName The name of the resource group.
   * @param peeringName The name of the peering.
   * @param registeredAsnName The name of the registered ASN.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    peeringName: string,
    registeredAsnName: string,
    options?: RegisteredAsnsGetOptionalParams
  ): Promise<RegisteredAsnsGetResponse>;
  /**
   * Creates a new registered ASN with the specified name under the given subscription, resource group
   * and peering.
   * @param resourceGroupName The name of the resource group.
   * @param peeringName The name of the peering.
   * @param registeredAsnName The name of the ASN.
   * @param registeredAsn The properties needed to create a registered ASN.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    peeringName: string,
    registeredAsnName: string,
    registeredAsn: PeeringRegisteredAsn,
    options?: RegisteredAsnsCreateOrUpdateOptionalParams
  ): Promise<RegisteredAsnsCreateOrUpdateResponse>;
  /**
   * Deletes an existing registered ASN with the specified name under the given subscription, resource
   * group and peering.
   * @param resourceGroupName The name of the resource group.
   * @param peeringName The name of the peering.
   * @param registeredAsnName The name of the registered ASN.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    peeringName: string,
    registeredAsnName: string,
    options?: RegisteredAsnsDeleteOptionalParams
  ): Promise<void>;
}
