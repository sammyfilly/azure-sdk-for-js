/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PeeringServiceLocation,
  PeeringServiceLocationsListOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PeeringServiceLocations. */
export interface PeeringServiceLocations {
  /**
   * Lists all of the available locations for peering service.
   * @param options The options parameters.
   */
  list(
    options?: PeeringServiceLocationsListOptionalParams
  ): PagedAsyncIterableIterator<PeeringServiceLocation>;
}
