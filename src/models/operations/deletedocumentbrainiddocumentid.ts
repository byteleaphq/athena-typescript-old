/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type DeleteDocumentBrainIdDocumentIdRequest = {
    brainId: string;
    documentId: string;
};

export type DeleteDocumentBrainIdDocumentIdResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    deleteResponse?: components.DeleteResponse | undefined;
    headers: { [k: string]: Array<string> };
};

/** @internal */
export namespace DeleteDocumentBrainIdDocumentIdRequest$ {
    export const inboundSchema: z.ZodType<
        DeleteDocumentBrainIdDocumentIdRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            brain_id: z.string(),
            document_id: z.string(),
        })
        .transform((v) => {
            return {
                brainId: v.brain_id,
                documentId: v.document_id,
            };
        });

    export type Outbound = {
        brain_id: string;
        document_id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteDocumentBrainIdDocumentIdRequest
    > = z
        .object({
            brainId: z.string(),
            documentId: z.string(),
        })
        .transform((v) => {
            return {
                brain_id: v.brainId,
                document_id: v.documentId,
            };
        });
}

/** @internal */
export namespace DeleteDocumentBrainIdDocumentIdResponse$ {
    export const inboundSchema: z.ZodType<
        DeleteDocumentBrainIdDocumentIdResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            DeleteResponse: components.DeleteResponse$.inboundSchema.optional(),
            Headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.DeleteResponse === undefined ? null : { deleteResponse: v.DeleteResponse }),
                headers: v.Headers,
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        DeleteResponse?: components.DeleteResponse$.Outbound | undefined;
        Headers: { [k: string]: Array<string> };
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteDocumentBrainIdDocumentIdResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            deleteResponse: components.DeleteResponse$.outboundSchema.optional(),
            headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.deleteResponse === undefined ? null : { DeleteResponse: v.deleteResponse }),
                Headers: v.headers,
            };
        });
}
