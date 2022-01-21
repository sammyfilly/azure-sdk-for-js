/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ExportJobsOperationResults } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClient } from "../recoveryServicesBackupClient";
import {
  ExportJobsOperationResultsGetOptionalParams,
  ExportJobsOperationResultsGetResponse
} from "../models";

/** Class containing ExportJobsOperationResults operations. */
export class ExportJobsOperationResultsImpl
  implements ExportJobsOperationResults {
  private readonly client: RecoveryServicesBackupClient;

  /**
   * Initialize a new instance of the class ExportJobsOperationResults class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesBackupClient) {
    this.client = client;
  }

  /**
   * Gets the operation result of operation triggered by Export Jobs API. If the operation is successful,
   * then it also
   * contains URL of a Blob and a SAS key to access the same. The blob contains exported jobs in JSON
   * serialized format.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param operationId OperationID which represents the export job.
   * @param options The options parameters.
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    operationId: string,
    options?: ExportJobsOperationResultsGetOptionalParams
  ): Promise<ExportJobsOperationResultsGetResponse> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, operationId, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupJobs/operationResults/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationResultInfoBaseResource
    },
    202: {
      bodyMapper: Mappers.OperationResultInfoBaseResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
