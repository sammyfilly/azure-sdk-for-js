/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { AccessPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { TimeSeriesInsightsClient } from "../timeSeriesInsightsClient";
import {
  AccessPolicyCreateOrUpdateParameters,
  AccessPoliciesCreateOrUpdateOptionalParams,
  AccessPoliciesCreateOrUpdateResponse,
  AccessPoliciesGetOptionalParams,
  AccessPoliciesGetResponse,
  AccessPolicyUpdateParameters,
  AccessPoliciesUpdateOptionalParams,
  AccessPoliciesUpdateResponse,
  AccessPoliciesDeleteOptionalParams,
  AccessPoliciesListByEnvironmentOptionalParams,
  AccessPoliciesListByEnvironmentResponse
} from "../models";

/** Class containing AccessPolicies operations. */
export class AccessPoliciesImpl implements AccessPolicies {
  private readonly client: TimeSeriesInsightsClient;

  /**
   * Initialize a new instance of the class AccessPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: TimeSeriesInsightsClient) {
    this.client = client;
  }

  /**
   * Create or update an access policy in the specified environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param accessPolicyName Name of the access policy.
   * @param parameters Parameters for creating an access policy.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    environmentName: string,
    accessPolicyName: string,
    parameters: AccessPolicyCreateOrUpdateParameters,
    options?: AccessPoliciesCreateOrUpdateOptionalParams
  ): Promise<AccessPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        environmentName,
        accessPolicyName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Gets the access policy with the specified name in the specified environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param accessPolicyName The name of the Time Series Insights access policy associated with the
   *                         specified environment.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    environmentName: string,
    accessPolicyName: string,
    options?: AccessPoliciesGetOptionalParams
  ): Promise<AccessPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, accessPolicyName, options },
      getOperationSpec
    );
  }

  /**
   * Updates the access policy with the specified name in the specified subscription, resource group, and
   * environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param accessPolicyName The name of the Time Series Insights access policy associated with the
   *                         specified environment.
   * @param accessPolicyUpdateParameters Request object that contains the updated information for the
   *                                     access policy.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    environmentName: string,
    accessPolicyName: string,
    accessPolicyUpdateParameters: AccessPolicyUpdateParameters,
    options?: AccessPoliciesUpdateOptionalParams
  ): Promise<AccessPoliciesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        environmentName,
        accessPolicyName,
        accessPolicyUpdateParameters,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Deletes the access policy with the specified name in the specified subscription, resource group, and
   * environment
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param accessPolicyName The name of the Time Series Insights access policy associated with the
   *                         specified environment.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    environmentName: string,
    accessPolicyName: string,
    options?: AccessPoliciesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, accessPolicyName, options },
      deleteOperationSpec
    );
  }

  /**
   * Lists all the available access policies associated with the environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param options The options parameters.
   */
  listByEnvironment(
    resourceGroupName: string,
    environmentName: string,
    options?: AccessPoliciesListByEnvironmentOptionalParams
  ): Promise<AccessPoliciesListByEnvironmentResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, options },
      listByEnvironmentOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies/{accessPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AccessPolicyResource
    },
    201: {
      bodyMapper: Mappers.AccessPolicyResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1,
    Parameters.accessPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies/{accessPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessPolicyResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1,
    Parameters.accessPolicyName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies/{accessPolicyName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AccessPolicyResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.accessPolicyUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1,
    Parameters.accessPolicyName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies/{accessPolicyName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1,
    Parameters.accessPolicyName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByEnvironmentOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessPolicyListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
