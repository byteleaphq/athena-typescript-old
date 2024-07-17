/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

/**
 * Internal Server Error
 */
export type CreateUrlDocumentResponseBodyData = {
    httpMeta: components.HTTPMetadata;
};

/**
 * Internal Server Error
 */
export class CreateUrlDocumentResponseBody extends Error {
    httpMeta: components.HTTPMetadata;

    /** The original data that was passed to this error instance. */
    data$: CreateUrlDocumentResponseBodyData;

    constructor(err: CreateUrlDocumentResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.httpMeta = err.httpMeta;

        this.name = "CreateUrlDocumentResponseBody";
    }
}

/** @internal */
export const CreateUrlDocumentResponseBody$inboundSchema: z.ZodType<
    CreateUrlDocumentResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
    })
    .transform((v) => {
        const remapped = remap$(v, {
            HttpMeta: "httpMeta",
        });

        return new CreateUrlDocumentResponseBody(remapped);
    });

/** @internal */
export type CreateUrlDocumentResponseBody$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const CreateUrlDocumentResponseBody$outboundSchema: z.ZodType<
    CreateUrlDocumentResponseBody$Outbound,
    z.ZodTypeDef,
    CreateUrlDocumentResponseBody
> = z
    .instanceof(CreateUrlDocumentResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z
            .object({
                httpMeta: components.HTTPMetadata$outboundSchema,
            })
            .transform((v) => {
                return remap$(v, {
                    httpMeta: "HttpMeta",
                });
            })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateUrlDocumentResponseBody$ {
    /** @deprecated use `CreateUrlDocumentResponseBody$inboundSchema` instead. */
    export const inboundSchema = CreateUrlDocumentResponseBody$inboundSchema;
    /** @deprecated use `CreateUrlDocumentResponseBody$outboundSchema` instead. */
    export const outboundSchema = CreateUrlDocumentResponseBody$outboundSchema;
    /** @deprecated use `CreateUrlDocumentResponseBody$Outbound` instead. */
    export type Outbound = CreateUrlDocumentResponseBody$Outbound;
}
