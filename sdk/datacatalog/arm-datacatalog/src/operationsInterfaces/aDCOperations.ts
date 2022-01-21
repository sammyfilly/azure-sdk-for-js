/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ADCOperationsListOptionalParams,
  ADCOperationsListResponse
} from "../models";

/** Interface representing a ADCOperations. */
export interface ADCOperations {
  /**
   * Lists all the available Azure Data Catalog service operations.
   * @param options The options parameters.
   */
  list(
    options?: ADCOperationsListOptionalParams
  ): Promise<ADCOperationsListResponse>;
}
