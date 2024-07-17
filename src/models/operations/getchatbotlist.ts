/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type GetChatbotListRequest = {
    /**
     * The ID of the brain to filter chatbots
     */
    brainId?: string | undefined;
};

export type GetChatbotListResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    chatbotResponses?: Array<components.ChatbotResponse> | undefined;
    headers: { [k: string]: Array<string> };
};

/** @internal */
export const GetChatbotListRequest$inboundSchema: z.ZodType<
    GetChatbotListRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        brain_id: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            brain_id: "brainId",
        });
    });

/** @internal */
export type GetChatbotListRequest$Outbound = {
    brain_id?: string | undefined;
};

/** @internal */
export const GetChatbotListRequest$outboundSchema: z.ZodType<
    GetChatbotListRequest$Outbound,
    z.ZodTypeDef,
    GetChatbotListRequest
> = z
    .object({
        brainId: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            brainId: "brain_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetChatbotListRequest$ {
    /** @deprecated use `GetChatbotListRequest$inboundSchema` instead. */
    export const inboundSchema = GetChatbotListRequest$inboundSchema;
    /** @deprecated use `GetChatbotListRequest$outboundSchema` instead. */
    export const outboundSchema = GetChatbotListRequest$outboundSchema;
    /** @deprecated use `GetChatbotListRequest$Outbound` instead. */
    export type Outbound = GetChatbotListRequest$Outbound;
}

/** @internal */
export const GetChatbotListResponse$inboundSchema: z.ZodType<
    GetChatbotListResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        ChatbotResponses: z.array(components.ChatbotResponse$inboundSchema).optional(),
        Headers: z.record(z.array(z.string())),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            ChatbotResponses: "chatbotResponses",
            Headers: "headers",
        });
    });

/** @internal */
export type GetChatbotListResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ChatbotResponses?: Array<components.ChatbotResponse$Outbound> | undefined;
    Headers: { [k: string]: Array<string> };
};

/** @internal */
export const GetChatbotListResponse$outboundSchema: z.ZodType<
    GetChatbotListResponse$Outbound,
    z.ZodTypeDef,
    GetChatbotListResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        chatbotResponses: z.array(components.ChatbotResponse$outboundSchema).optional(),
        headers: z.record(z.array(z.string())),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            chatbotResponses: "ChatbotResponses",
            headers: "Headers",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetChatbotListResponse$ {
    /** @deprecated use `GetChatbotListResponse$inboundSchema` instead. */
    export const inboundSchema = GetChatbotListResponse$inboundSchema;
    /** @deprecated use `GetChatbotListResponse$outboundSchema` instead. */
    export const outboundSchema = GetChatbotListResponse$outboundSchema;
    /** @deprecated use `GetChatbotListResponse$Outbound` instead. */
    export type Outbound = GetChatbotListResponse$Outbound;
}
