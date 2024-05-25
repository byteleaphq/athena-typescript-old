/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type PostIntegrationIntegrationNameAddRequestBody = {
    /**
     * ID of the brain to add pages to
     */
    brainId?: string | undefined;
    /**
     * Array of page IDs to add to the brain
     */
    pageIds?: Array<string> | undefined;
};

export type PostIntegrationIntegrationNameAddRequest = {
    /**
     * Currently supported integrations are "notion" and "confluence". More integrations will be added in the future.
     */
    integrationName: string;
    requestBody?: PostIntegrationIntegrationNameAddRequestBody | undefined;
};

/**
 * OK
 */
export type PostIntegrationIntegrationNameAddResponseBody = {
    /**
     * Message indicating the pages are being added to the brain
     */
    message?: string | undefined;
};

export type PostIntegrationIntegrationNameAddResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    object?: PostIntegrationIntegrationNameAddResponseBody | undefined;
    headers: { [k: string]: Array<string> };
};

/** @internal */
export namespace PostIntegrationIntegrationNameAddRequestBody$ {
    export const inboundSchema: z.ZodType<
        PostIntegrationIntegrationNameAddRequestBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            brain_id: z.string().optional(),
            page_ids: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.brain_id === undefined ? null : { brainId: v.brain_id }),
                ...(v.page_ids === undefined ? null : { pageIds: v.page_ids }),
            };
        });

    export type Outbound = {
        brain_id?: string | undefined;
        page_ids?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostIntegrationIntegrationNameAddRequestBody
    > = z
        .object({
            brainId: z.string().optional(),
            pageIds: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.brainId === undefined ? null : { brain_id: v.brainId }),
                ...(v.pageIds === undefined ? null : { page_ids: v.pageIds }),
            };
        });
}

/** @internal */
export namespace PostIntegrationIntegrationNameAddRequest$ {
    export const inboundSchema: z.ZodType<
        PostIntegrationIntegrationNameAddRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            integration_name: z.string(),
            RequestBody: z
                .lazy(() => PostIntegrationIntegrationNameAddRequestBody$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                integrationName: v.integration_name,
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        integration_name: string;
        RequestBody?: PostIntegrationIntegrationNameAddRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostIntegrationIntegrationNameAddRequest
    > = z
        .object({
            integrationName: z.string(),
            requestBody: z
                .lazy(() => PostIntegrationIntegrationNameAddRequestBody$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                integration_name: v.integrationName,
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace PostIntegrationIntegrationNameAddResponseBody$ {
    export const inboundSchema: z.ZodType<
        PostIntegrationIntegrationNameAddResponseBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            message: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.message === undefined ? null : { message: v.message }),
            };
        });

    export type Outbound = {
        message?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostIntegrationIntegrationNameAddResponseBody
    > = z
        .object({
            message: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.message === undefined ? null : { message: v.message }),
            };
        });
}

/** @internal */
export namespace PostIntegrationIntegrationNameAddResponse$ {
    export const inboundSchema: z.ZodType<
        PostIntegrationIntegrationNameAddResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z
                .lazy(() => PostIntegrationIntegrationNameAddResponseBody$.inboundSchema)
                .optional(),
            Headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
                headers: v.Headers,
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: PostIntegrationIntegrationNameAddResponseBody$.Outbound | undefined;
        Headers: { [k: string]: Array<string> };
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostIntegrationIntegrationNameAddResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z
                .lazy(() => PostIntegrationIntegrationNameAddResponseBody$.outboundSchema)
                .optional(),
            headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
                Headers: v.headers,
            };
        });
}
