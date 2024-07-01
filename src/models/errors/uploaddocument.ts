/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

/**
 * Internal Server Error
 */
export type UploadDocumentDocumentResponseBodyData = {
    error?: string | undefined;
    httpMeta: components.HTTPMetadata;
};

/**
 * Internal Server Error
 */
export class UploadDocumentDocumentResponseBody extends Error {
    error?: string | undefined;
    httpMeta: components.HTTPMetadata;

    /** The original data that was passed to this error instance. */
    data$: UploadDocumentDocumentResponseBodyData;

    constructor(err: UploadDocumentDocumentResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.error != null) {
            this.error = err.error;
        }
        this.httpMeta = err.httpMeta;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "UploadDocumentDocumentResponseBody";
    }
}

/**
 * Bad Request
 */
export type UploadDocumentResponseBodyData = {
    error?: string | undefined;
    httpMeta: components.HTTPMetadata;
};

/**
 * Bad Request
 */
export class UploadDocumentResponseBody extends Error {
    error?: string | undefined;
    httpMeta: components.HTTPMetadata;

    /** The original data that was passed to this error instance. */
    data$: UploadDocumentResponseBodyData;

    constructor(err: UploadDocumentResponseBodyData) {
        super("");
        this.data$ = err;

        if (err.error != null) {
            this.error = err.error;
        }
        this.httpMeta = err.httpMeta;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "UploadDocumentResponseBody";
    }
}

/** @internal */
export namespace UploadDocumentDocumentResponseBody$ {
    export const inboundSchema: z.ZodType<
        UploadDocumentDocumentResponseBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            error: z.string().optional(),
            HttpMeta: components.HTTPMetadata$.inboundSchema,
        })
        .transform((v) => {
            const remapped = remap$(v, {
                HttpMeta: "httpMeta",
            });

            return new UploadDocumentDocumentResponseBody(remapped);
        });

    export type Outbound = {
        error?: string | undefined;
        HttpMeta: components.HTTPMetadata$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UploadDocumentDocumentResponseBody
    > = z
        .instanceof(UploadDocumentDocumentResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    error: z.string().optional(),
                    httpMeta: components.HTTPMetadata$.outboundSchema,
                })
                .transform((v) => {
                    return remap$(v, {
                        httpMeta: "HttpMeta",
                    });
                })
        );
}

/** @internal */
export namespace UploadDocumentResponseBody$ {
    export const inboundSchema: z.ZodType<UploadDocumentResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            error: z.string().optional(),
            HttpMeta: components.HTTPMetadata$.inboundSchema,
        })
        .transform((v) => {
            const remapped = remap$(v, {
                HttpMeta: "httpMeta",
            });

            return new UploadDocumentResponseBody(remapped);
        });

    export type Outbound = {
        error?: string | undefined;
        HttpMeta: components.HTTPMetadata$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadDocumentResponseBody> = z
        .instanceof(UploadDocumentResponseBody)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    error: z.string().optional(),
                    httpMeta: components.HTTPMetadata$.outboundSchema,
                })
                .transform((v) => {
                    return remap$(v, {
                        httpMeta: "HttpMeta",
                    });
                })
        );
}
