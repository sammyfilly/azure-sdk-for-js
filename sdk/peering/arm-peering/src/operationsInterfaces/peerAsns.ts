/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PeerAsn,
  PeerAsnsListBySubscriptionOptionalParams,
  PeerAsnsGetOptionalParams,
  PeerAsnsGetResponse,
  PeerAsnsCreateOrUpdateOptionalParams,
  PeerAsnsCreateOrUpdateResponse,
  PeerAsnsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PeerAsns. */
export interface PeerAsns {
  /**
   * Lists all of the peer ASNs under the given subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: PeerAsnsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<PeerAsn>;
  /**
   * Gets the peer ASN with the specified name under the given subscription.
   * @param peerAsnName The peer ASN name.
   * @param options The options parameters.
   */
  get(
    peerAsnName: string,
    options?: PeerAsnsGetOptionalParams
  ): Promise<PeerAsnsGetResponse>;
  /**
   * Creates a new peer ASN or updates an existing peer ASN with the specified name under the given
   * subscription.
   * @param peerAsnName The peer ASN name.
   * @param peerAsn The peer ASN.
   * @param options The options parameters.
   */
  createOrUpdate(
    peerAsnName: string,
    peerAsn: PeerAsn,
    options?: PeerAsnsCreateOrUpdateOptionalParams
  ): Promise<PeerAsnsCreateOrUpdateResponse>;
  /**
   * Deletes an existing peer ASN with the specified name under the given subscription.
   * @param peerAsnName The peer ASN name.
   * @param options The options parameters.
   */
  delete(
    peerAsnName: string,
    options?: PeerAsnsDeleteOptionalParams
  ): Promise<void>;
}
