/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

/**
 * Internal Server Error
 */
export type CreateNewBrainBrainResponseBodyData = {
    httpMeta: components.HTTPMetadata;
};

/**
 * Internal Server Error
 */
export class CreateNewBrainBrainResponseBody extends Error {
    httpMeta: components.HTTPMetadata;

    /** The original data that was passed to this error instance. */
    data$: CreateNewBrainBrainResponseBodyData;

    constructor(err: CreateNewBrainBrainResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.httpMeta = err.httpMeta;

        this.name = "CreateNewBrainBrainResponseBody";
    }
}

/**
 * Unauthorized
 */
export type CreateNewBrainResponseBodyData = {
    httpMeta: components.HTTPMetadata;
};

/**
 * Unauthorized
 */
export class CreateNewBrainResponseBody extends Error {
    httpMeta: components.HTTPMetadata;

    /** The original data that was passed to this error instance. */
    data$: CreateNewBrainResponseBodyData;

    constructor(err: CreateNewBrainResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.httpMeta = err.httpMeta;

        this.name = "CreateNewBrainResponseBody";
    }
}

/** @internal */
export const CreateNewBrainBrainResponseBody$inboundSchema: z.ZodType<
    CreateNewBrainBrainResponseBody,
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

        return new CreateNewBrainBrainResponseBody(remapped);
    });

/** @internal */
export type CreateNewBrainBrainResponseBody$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const CreateNewBrainBrainResponseBody$outboundSchema: z.ZodType<
    CreateNewBrainBrainResponseBody$Outbound,
    z.ZodTypeDef,
    CreateNewBrainBrainResponseBody
> = z
    .instanceof(CreateNewBrainBrainResponseBody)
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
export namespace CreateNewBrainBrainResponseBody$ {
    /** @deprecated use `CreateNewBrainBrainResponseBody$inboundSchema` instead. */
    export const inboundSchema = CreateNewBrainBrainResponseBody$inboundSchema;
    /** @deprecated use `CreateNewBrainBrainResponseBody$outboundSchema` instead. */
    export const outboundSchema = CreateNewBrainBrainResponseBody$outboundSchema;
    /** @deprecated use `CreateNewBrainBrainResponseBody$Outbound` instead. */
    export type Outbound = CreateNewBrainBrainResponseBody$Outbound;
}

/** @internal */
export const CreateNewBrainResponseBody$inboundSchema: z.ZodType<
    CreateNewBrainResponseBody,
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

        return new CreateNewBrainResponseBody(remapped);
    });

/** @internal */
export type CreateNewBrainResponseBody$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const CreateNewBrainResponseBody$outboundSchema: z.ZodType<
    CreateNewBrainResponseBody$Outbound,
    z.ZodTypeDef,
    CreateNewBrainResponseBody
> = z
    .instanceof(CreateNewBrainResponseBody)
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
export namespace CreateNewBrainResponseBody$ {
    /** @deprecated use `CreateNewBrainResponseBody$inboundSchema` instead. */
    export const inboundSchema = CreateNewBrainResponseBody$inboundSchema;
    /** @deprecated use `CreateNewBrainResponseBody$outboundSchema` instead. */
    export const outboundSchema = CreateNewBrainResponseBody$outboundSchema;
    /** @deprecated use `CreateNewBrainResponseBody$Outbound` instead. */
    export type Outbound = CreateNewBrainResponseBody$Outbound;
}
