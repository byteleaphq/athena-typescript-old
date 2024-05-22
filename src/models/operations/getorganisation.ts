/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * OK
 */
export type GetOrganisationResponseBody = {};

export type GetOrganisationResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    object?: GetOrganisationResponseBody | undefined;
    headers: { [k: string]: Array<string> };
};

/** @internal */
export namespace GetOrganisationResponseBody$ {
    export const inboundSchema: z.ZodType<GetOrganisationResponseBody, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOrganisationResponseBody> =
        z.object({});
}

/** @internal */
export namespace GetOrganisationResponse$ {
    export const inboundSchema: z.ZodType<GetOrganisationResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetOrganisationResponseBody$.inboundSchema).optional(),
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
        object?: GetOrganisationResponseBody$.Outbound | undefined;
        Headers: { [k: string]: Array<string> };
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetOrganisationResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetOrganisationResponseBody$.outboundSchema).optional(),
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
