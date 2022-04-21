/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PolicySetDefinition, PolicyClient } from "@azure/arm-policy";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to This operation creates or updates a policy set definition in the given management group with the given name.
 *
 * @summary This operation creates or updates a policy set definition in the given management group with the given name.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2021-06-01/examples/createOrUpdatePolicySetDefinitionAtManagementGroup.json
 */
async function createOrUpdateAPolicySetDefinitionAtManagementGroupLevel() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const policySetDefinitionName = "CostManagement";
  const managementGroupId = "MyManagementGroup";
  const parameters: PolicySetDefinition = {
    description: "Policies to enforce low cost storage SKUs",
    displayName: "Cost Management",
    metadata: { category: "Cost Management" },
    policyDefinitions: [
      {
        parameters: {
          listOfAllowedSKUs: { value: ["Standard_GRS", "Standard_LRS"] }
        },
        policyDefinitionId:
          "/providers/Microsoft.Management/managementgroups/MyManagementGroup/providers/Microsoft.Authorization/policyDefinitions/7433c107-6db4-4ad1-b57a-a76dce0154a1",
        policyDefinitionReferenceId: "Limit_Skus"
      },
      {
        parameters: { prefix: { value: "DeptA" }, suffix: { value: "-LC" } },
        policyDefinitionId:
          "/providers/Microsoft.Management/managementgroups/MyManagementGroup/providers/Microsoft.Authorization/policyDefinitions/ResourceNaming",
        policyDefinitionReferenceId: "Resource_Naming"
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential, subscriptionId);
  const result = await client.policySetDefinitions.createOrUpdateAtManagementGroup(
    policySetDefinitionName,
    managementGroupId,
    parameters
  );
  console.log(result);
}

createOrUpdateAPolicySetDefinitionAtManagementGroupLevel().catch(console.error);

/**
 * This sample demonstrates how to This operation creates or updates a policy set definition in the given management group with the given name.
 *
 * @summary This operation creates or updates a policy set definition in the given management group with the given name.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2021-06-01/examples/createOrUpdatePolicySetDefinitionWithGroupsAtManagementGroup.json
 */
async function createOrUpdateAPolicySetDefinitionWithGroupsAtManagementGroupLevel() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const policySetDefinitionName = "CostManagement";
  const managementGroupId = "MyManagementGroup";
  const parameters: PolicySetDefinition = {
    description: "Policies to enforce low cost storage SKUs",
    displayName: "Cost Management",
    metadata: { category: "Cost Management" },
    policyDefinitionGroups: [
      {
        name: "CostSaving",
        description:
          "Policies designed to control spend within a subscription.",
        displayName: "Cost Management Policies"
      },
      {
        name: "Organizational",
        description:
          "Policies that help enforce resource organization standards within a subscription.",
        displayName: "Organizational Policies"
      }
    ],
    policyDefinitions: [
      {
        groupNames: ["CostSaving"],
        parameters: {
          listOfAllowedSKUs: { value: ["Standard_GRS", "Standard_LRS"] }
        },
        policyDefinitionId:
          "/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policyDefinitions/7433c107-6db4-4ad1-b57a-a76dce0154a1",
        policyDefinitionReferenceId: "Limit_Skus"
      },
      {
        groupNames: ["Organizational"],
        parameters: { prefix: { value: "DeptA" }, suffix: { value: "-LC" } },
        policyDefinitionId:
          "/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policyDefinitions/ResourceNaming",
        policyDefinitionReferenceId: "Resource_Naming"
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential, subscriptionId);
  const result = await client.policySetDefinitions.createOrUpdateAtManagementGroup(
    policySetDefinitionName,
    managementGroupId,
    parameters
  );
  console.log(result);
}

createOrUpdateAPolicySetDefinitionWithGroupsAtManagementGroupLevel().catch(
  console.error
);