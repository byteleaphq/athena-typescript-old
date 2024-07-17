/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type DeleteDocumentRequest = {
    brainId: string;
    documentId: string;
};

export type DeleteDocumentResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    deleteResponse?: components.DeleteResponse | undefined;
    headers: { [k: string]: Array<string> };
};

/** @internal */
export const DeleteDocumentRequest$inboundSchema: z.ZodType<
    DeleteDocumentRequest,
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
export type DeleteDocumentRequest$Outbound = {
    brain_id: string;
    document_id: string;
};

/** @internal */
export const DeleteDocumentRequest$outboundSchema: z.ZodType<
    DeleteDocumentRequest$Outbound,
    z.ZodTypeDef,
    DeleteDocumentRequest
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
export namespace DeleteDocumentRequest$ {
    /** @deprecated use `DeleteDocumentRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteDocumentRequest$inboundSchema;
    /** @deprecated use `DeleteDocumentRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteDocumentRequest$outboundSchema;
    /** @deprecated use `DeleteDocumentRequest$Outbound` instead. */
    export type Outbound = DeleteDocumentRequest$Outbound;
}

/** @internal */
export const DeleteDocumentResponse$inboundSchema: z.ZodType<
    DeleteDocumentResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        DeleteResponse: components.DeleteResponse$inboundSchema.optional(),
        Headers: z.record(z.array(z.string())),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            DeleteResponse: "deleteResponse",
            Headers: "headers",
        });
    });

/** @internal */
export type DeleteDocumentResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    DeleteResponse?: components.DeleteResponse$Outbound | undefined;
    Headers: { [k: string]: Array<string> };
};

/** @internal */
export const DeleteDocumentResponse$outboundSchema: z.ZodType<
    DeleteDocumentResponse$Outbound,
    z.ZodTypeDef,
    DeleteDocumentResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        deleteResponse: components.DeleteResponse$outboundSchema.optional(),
        headers: z.record(z.array(z.string())),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            deleteResponse: "DeleteResponse",
            headers: "Headers",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteDocumentResponse$ {
    /** @deprecated use `DeleteDocumentResponse$inboundSchema` instead. */
    export const inboundSchema = DeleteDocumentResponse$inboundSchema;
    /** @deprecated use `DeleteDocumentResponse$outboundSchema` instead. */
    export const outboundSchema = DeleteDocumentResponse$outboundSchema;
    /** @deprecated use `DeleteDocumentResponse$Outbound` instead. */
    export type Outbound = DeleteDocumentResponse$Outbound;
}
