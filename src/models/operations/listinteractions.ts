/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type ListInteractionsRequestBody = {
    /**
     * Id of chat to which you want to send message
     */
    chatThreadId?: string | undefined;
    /**
     * message
     */
    text?: string | undefined;
};

export type ListInteractionsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    chatInteractions?: Array<components.ChatInteraction> | undefined;
    headers: { [k: string]: Array<string> };
};

/** @internal */
export const ListInteractionsRequestBody$inboundSchema: z.ZodType<
    ListInteractionsRequestBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        chat_thread_id: z.string().optional(),
        text: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            chat_thread_id: "chatThreadId",
        });
    });

/** @internal */
export type ListInteractionsRequestBody$Outbound = {
    chat_thread_id?: string | undefined;
    text?: string | undefined;
};

/** @internal */
export const ListInteractionsRequestBody$outboundSchema: z.ZodType<
    ListInteractionsRequestBody$Outbound,
    z.ZodTypeDef,
    ListInteractionsRequestBody
> = z
    .object({
        chatThreadId: z.string().optional(),
        text: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            chatThreadId: "chat_thread_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListInteractionsRequestBody$ {
    /** @deprecated use `ListInteractionsRequestBody$inboundSchema` instead. */
    export const inboundSchema = ListInteractionsRequestBody$inboundSchema;
    /** @deprecated use `ListInteractionsRequestBody$outboundSchema` instead. */
    export const outboundSchema = ListInteractionsRequestBody$outboundSchema;
    /** @deprecated use `ListInteractionsRequestBody$Outbound` instead. */
    export type Outbound = ListInteractionsRequestBody$Outbound;
}

/** @internal */
export const ListInteractionsResponse$inboundSchema: z.ZodType<
    ListInteractionsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        ChatInteractions: z.array(components.ChatInteraction$inboundSchema).optional(),
        Headers: z.record(z.array(z.string())),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            ChatInteractions: "chatInteractions",
            Headers: "headers",
        });
    });

/** @internal */
export type ListInteractionsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ChatInteractions?: Array<components.ChatInteraction$Outbound> | undefined;
    Headers: { [k: string]: Array<string> };
};

/** @internal */
export const ListInteractionsResponse$outboundSchema: z.ZodType<
    ListInteractionsResponse$Outbound,
    z.ZodTypeDef,
    ListInteractionsResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        chatInteractions: z.array(components.ChatInteraction$outboundSchema).optional(),
        headers: z.record(z.array(z.string())),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            chatInteractions: "ChatInteractions",
            headers: "Headers",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListInteractionsResponse$ {
    /** @deprecated use `ListInteractionsResponse$inboundSchema` instead. */
    export const inboundSchema = ListInteractionsResponse$inboundSchema;
    /** @deprecated use `ListInteractionsResponse$outboundSchema` instead. */
    export const outboundSchema = ListInteractionsResponse$outboundSchema;
    /** @deprecated use `ListInteractionsResponse$Outbound` instead. */
    export type Outbound = ListInteractionsResponse$Outbound;
}
