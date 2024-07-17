/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type DownloadDocumentRequest = {
    brainId: string;
    documentId: string;
};

/**
 * OK
 */
export type DownloadDocumentResponseBody = {
    /**
     * The URL to download the document file. This URL is a pre-signed URL that provides temporary access to the document file hosted on a cloud storage service.
     */
    url?: string | undefined;
};

export type DownloadDocumentResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    object?: DownloadDocumentResponseBody | undefined;
    headers: { [k: string]: Array<string> };
};

/** @internal */
export const DownloadDocumentRequest$inboundSchema: z.ZodType<
    DownloadDocumentRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        brain_id: z.string(),
        document_id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            brain_id: "brainId",
            document_id: "documentId",
        });
    });

/** @internal */
export type DownloadDocumentRequest$Outbound = {
    brain_id: string;
    document_id: string;
};

/** @internal */
export const DownloadDocumentRequest$outboundSchema: z.ZodType<
    DownloadDocumentRequest$Outbound,
    z.ZodTypeDef,
    DownloadDocumentRequest
> = z
    .object({
        brainId: z.string(),
        documentId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            brainId: "brain_id",
            documentId: "document_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DownloadDocumentRequest$ {
    /** @deprecated use `DownloadDocumentRequest$inboundSchema` instead. */
    export const inboundSchema = DownloadDocumentRequest$inboundSchema;
    /** @deprecated use `DownloadDocumentRequest$outboundSchema` instead. */
    export const outboundSchema = DownloadDocumentRequest$outboundSchema;
    /** @deprecated use `DownloadDocumentRequest$Outbound` instead. */
    export type Outbound = DownloadDocumentRequest$Outbound;
}

/** @internal */
export const DownloadDocumentResponseBody$inboundSchema: z.ZodType<
    DownloadDocumentResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    url: z.string().optional(),
});

/** @internal */
export type DownloadDocumentResponseBody$Outbound = {
    url?: string | undefined;
};

/** @internal */
export const DownloadDocumentResponseBody$outboundSchema: z.ZodType<
    DownloadDocumentResponseBody$Outbound,
    z.ZodTypeDef,
    DownloadDocumentResponseBody
> = z.object({
    url: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DownloadDocumentResponseBody$ {
    /** @deprecated use `DownloadDocumentResponseBody$inboundSchema` instead. */
    export const inboundSchema = DownloadDocumentResponseBody$inboundSchema;
    /** @deprecated use `DownloadDocumentResponseBody$outboundSchema` instead. */
    export const outboundSchema = DownloadDocumentResponseBody$outboundSchema;
    /** @deprecated use `DownloadDocumentResponseBody$Outbound` instead. */
    export type Outbound = DownloadDocumentResponseBody$Outbound;
}

/** @internal */
export const DownloadDocumentResponse$inboundSchema: z.ZodType<
    DownloadDocumentResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        object: z.lazy(() => DownloadDocumentResponseBody$inboundSchema).optional(),
        Headers: z.record(z.array(z.string())),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            Headers: "headers",
        });
    });

/** @internal */
export type DownloadDocumentResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    object?: DownloadDocumentResponseBody$Outbound | undefined;
    Headers: { [k: string]: Array<string> };
};

/** @internal */
export const DownloadDocumentResponse$outboundSchema: z.ZodType<
    DownloadDocumentResponse$Outbound,
    z.ZodTypeDef,
    DownloadDocumentResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        object: z.lazy(() => DownloadDocumentResponseBody$outboundSchema).optional(),
        headers: z.record(z.array(z.string())),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            headers: "Headers",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DownloadDocumentResponse$ {
    /** @deprecated use `DownloadDocumentResponse$inboundSchema` instead. */
    export const inboundSchema = DownloadDocumentResponse$inboundSchema;
    /** @deprecated use `DownloadDocumentResponse$outboundSchema` instead. */
    export const outboundSchema = DownloadDocumentResponse$outboundSchema;
    /** @deprecated use `DownloadDocumentResponse$Outbound` instead. */
    export type Outbound = DownloadDocumentResponse$Outbound;
}
