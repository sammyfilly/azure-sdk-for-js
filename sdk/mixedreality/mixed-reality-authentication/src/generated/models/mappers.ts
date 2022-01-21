/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const StsTokenResponseMessage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StsTokenResponseMessage",
    modelProperties: {
      accessToken: {
        serializedName: "AccessToken",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MixedRealityStsRestClientGetTokenHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MixedRealityStsRestClientGetTokenHeaders",
    modelProperties: {
      requestId: {
        serializedName: "ms-cv",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MixedRealityStsRestClientGetTokenExceptionHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MixedRealityStsRestClientGetTokenExceptionHeaders",
    modelProperties: {
      requestId: {
        serializedName: "ms-cv",
        type: {
          name: "String"
        }
      },
      wWWAuthenticate: {
        serializedName: "www-authenticate",
        type: {
          name: "String"
        }
      }
    }
  }
};
