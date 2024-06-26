/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type PostChatbotDeleteRequest = {
    chatbotId?: string | undefined;
};

export type PostChatbotDeleteResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    deleteResponse?: components.DeleteResponse | undefined;
    headers: { [k: string]: Array<string> };
};

/** @internal */
export namespace PostChatbotDeleteRequest$ {
    export const inboundSchema: z.ZodType<PostChatbotDeleteRequest, z.ZodTypeDef, unknown> = z
        .object({
            chatbot_id: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                chatbot_id: "chatbotId",
            });
        });

    export type Outbound = {
        chatbot_id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostChatbotDeleteRequest> = z
        .object({
            chatbotId: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                chatbotId: "chatbot_id",
            });
        });
}

/** @internal */
export namespace PostChatbotDeleteResponse$ {
    export const inboundSchema: z.ZodType<PostChatbotDeleteResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            DeleteResponse: components.DeleteResponse$.inboundSchema.optional(),
            Headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                DeleteResponse: "deleteResponse",
                Headers: "headers",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        DeleteResponse?: components.DeleteResponse$.Outbound | undefined;
        Headers: { [k: string]: Array<string> };
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostChatbotDeleteResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            deleteResponse: components.DeleteResponse$.outboundSchema.optional(),
            headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                deleteResponse: "DeleteResponse",
                headers: "Headers",
            });
        });
}
