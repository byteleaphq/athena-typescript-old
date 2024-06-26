/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

/**
 * Not Found
 */
export type GetBrainBrainIdResponseBodyData = {
    httpMeta: components.HTTPMetadata;
};

/**
 * Not Found
 */
export class GetBrainBrainIdResponseBody extends Error {
    httpMeta: components.HTTPMetadata;

    /** The original data that was passed to this error instance. */
    data$: GetBrainBrainIdResponseBodyData;

    constructor(err: GetBrainBrainIdResponseBodyData) {
        super("");
        this.data$ = err;

        this.httpMeta = err.httpMeta;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "GetBrainBrainIdResponseBody";
    }
}

/** @internal */
export namespace GetBrainBrainIdResponseBody$ {
    export const inboundSchema: z.ZodType<GetBrainBrainIdResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
        })
        .transform((v) => {
            const remapped = remap$(v, {
                HttpMeta: "httpMeta",
            });

            return new GetBrainBrainIdResponseBody(remapped);
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBrainBrainIdResponseBody> = z
        .instanceof(GetBrainBrainIdResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    httpMeta: components.HTTPMetadata$.outboundSchema,
                })
                .transform((v) => {
                    return remap$(v, {
                        httpMeta: "HttpMeta",
                    });
                })
        );
}
