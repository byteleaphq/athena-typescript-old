/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type PostChatListInteractionsRequestBody = {};

/**
 * OK
 */
export type PostChatListInteractionsResponseBody = {};

export type PostChatListInteractionsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    object?: PostChatListInteractionsResponseBody | undefined;
    headers: { [k: string]: Array<string> };
};

/** @internal */
export namespace PostChatListInteractionsRequestBody$ {
    export const inboundSchema: z.ZodType<
        PostChatListInteractionsRequestBody,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostChatListInteractionsRequestBody
    > = z.object({});
}

/** @internal */
export namespace PostChatListInteractionsResponseBody$ {
    export const inboundSchema: z.ZodType<
        PostChatListInteractionsResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostChatListInteractionsResponseBody
    > = z.object({});
}

/** @internal */
export namespace PostChatListInteractionsResponse$ {
    export const inboundSchema: z.ZodType<PostChatListInteractionsResponse, z.ZodTypeDef, unknown> =
        z
            .object({
                HttpMeta: components.HTTPMetadata$.inboundSchema,
                object: z
                    .lazy(() => PostChatListInteractionsResponseBody$.inboundSchema)
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
        object?: PostChatListInteractionsResponseBody$.Outbound | undefined;
        Headers: { [k: string]: Array<string> };
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostChatListInteractionsResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => PostChatListInteractionsResponseBody$.outboundSchema).optional(),
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
