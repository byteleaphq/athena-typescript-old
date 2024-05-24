/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetIntegrationIntegrationNameDisconnectRequest = {
    /**
     * Currently supported integrations are "notion" and "confluence". More integrations will be added in the future.
     */
    integrationName: string;
};

export type GetIntegrationIntegrationNameDisconnectResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export namespace GetIntegrationIntegrationNameDisconnectRequest$ {
    export const inboundSchema: z.ZodType<
        GetIntegrationIntegrationNameDisconnectRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            integration_name: z.string(),
        })
        .transform((v) => {
            return {
                integrationName: v.integration_name,
            };
        });

    export type Outbound = {
        integration_name: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetIntegrationIntegrationNameDisconnectRequest
    > = z
        .object({
            integrationName: z.string(),
        })
        .transform((v) => {
            return {
                integration_name: v.integrationName,
            };
        });
}

/** @internal */
export namespace GetIntegrationIntegrationNameDisconnectResponse$ {
    export const inboundSchema: z.ZodType<
        GetIntegrationIntegrationNameDisconnectResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetIntegrationIntegrationNameDisconnectResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
            };
        });
}
