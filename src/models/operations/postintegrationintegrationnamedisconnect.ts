/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type PostIntegrationIntegrationNameDisconnectRequest = {
    /**
     * Currently supported integrations are "notion" and "confluence". More integrations will be added in the future.
     */
    integrationName: string;
};

/**
 * Empty object
 */
export type PostIntegrationIntegrationNameDisconnectResponseBody = {};

export type PostIntegrationIntegrationNameDisconnectResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successful response
     */
    object?: PostIntegrationIntegrationNameDisconnectResponseBody | undefined;
};

/** @internal */
export const PostIntegrationIntegrationNameDisconnectRequest$inboundSchema: z.ZodType<
    PostIntegrationIntegrationNameDisconnectRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        integration_name: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            integration_name: "integrationName",
        });
    });

/** @internal */
export type PostIntegrationIntegrationNameDisconnectRequest$Outbound = {
    integration_name: string;
};

/** @internal */
export const PostIntegrationIntegrationNameDisconnectRequest$outboundSchema: z.ZodType<
    PostIntegrationIntegrationNameDisconnectRequest$Outbound,
    z.ZodTypeDef,
    PostIntegrationIntegrationNameDisconnectRequest
> = z
    .object({
        integrationName: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            integrationName: "integration_name",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostIntegrationIntegrationNameDisconnectRequest$ {
    /** @deprecated use `PostIntegrationIntegrationNameDisconnectRequest$inboundSchema` instead. */
    export const inboundSchema = PostIntegrationIntegrationNameDisconnectRequest$inboundSchema;
    /** @deprecated use `PostIntegrationIntegrationNameDisconnectRequest$outboundSchema` instead. */
    export const outboundSchema = PostIntegrationIntegrationNameDisconnectRequest$outboundSchema;
    /** @deprecated use `PostIntegrationIntegrationNameDisconnectRequest$Outbound` instead. */
    export type Outbound = PostIntegrationIntegrationNameDisconnectRequest$Outbound;
}

/** @internal */
export const PostIntegrationIntegrationNameDisconnectResponseBody$inboundSchema: z.ZodType<
    PostIntegrationIntegrationNameDisconnectResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type PostIntegrationIntegrationNameDisconnectResponseBody$Outbound = {};

/** @internal */
export const PostIntegrationIntegrationNameDisconnectResponseBody$outboundSchema: z.ZodType<
    PostIntegrationIntegrationNameDisconnectResponseBody$Outbound,
    z.ZodTypeDef,
    PostIntegrationIntegrationNameDisconnectResponseBody
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostIntegrationIntegrationNameDisconnectResponseBody$ {
    /** @deprecated use `PostIntegrationIntegrationNameDisconnectResponseBody$inboundSchema` instead. */
    export const inboundSchema = PostIntegrationIntegrationNameDisconnectResponseBody$inboundSchema;
    /** @deprecated use `PostIntegrationIntegrationNameDisconnectResponseBody$outboundSchema` instead. */
    export const outboundSchema =
        PostIntegrationIntegrationNameDisconnectResponseBody$outboundSchema;
    /** @deprecated use `PostIntegrationIntegrationNameDisconnectResponseBody$Outbound` instead. */
    export type Outbound = PostIntegrationIntegrationNameDisconnectResponseBody$Outbound;
}

/** @internal */
export const PostIntegrationIntegrationNameDisconnectResponse$inboundSchema: z.ZodType<
    PostIntegrationIntegrationNameDisconnectResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z
            .lazy(() => PostIntegrationIntegrationNameDisconnectResponseBody$inboundSchema)
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
        });
    });

/** @internal */
export type PostIntegrationIntegrationNameDisconnectResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: PostIntegrationIntegrationNameDisconnectResponseBody$Outbound | undefined;
};

/** @internal */
export const PostIntegrationIntegrationNameDisconnectResponse$outboundSchema: z.ZodType<
    PostIntegrationIntegrationNameDisconnectResponse$Outbound,
    z.ZodTypeDef,
    PostIntegrationIntegrationNameDisconnectResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z
            .lazy(() => PostIntegrationIntegrationNameDisconnectResponseBody$outboundSchema)
            .optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostIntegrationIntegrationNameDisconnectResponse$ {
    /** @deprecated use `PostIntegrationIntegrationNameDisconnectResponse$inboundSchema` instead. */
    export const inboundSchema = PostIntegrationIntegrationNameDisconnectResponse$inboundSchema;
    /** @deprecated use `PostIntegrationIntegrationNameDisconnectResponse$outboundSchema` instead. */
    export const outboundSchema = PostIntegrationIntegrationNameDisconnectResponse$outboundSchema;
    /** @deprecated use `PostIntegrationIntegrationNameDisconnectResponse$Outbound` instead. */
    export type Outbound = PostIntegrationIntegrationNameDisconnectResponse$Outbound;
}
