/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetChatbotAnalyticsRequest = {
    chatbotId?: string | undefined;
};

export type GetChatbotAnalyticsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    chatbotAnalytics?: components.ChatbotAnalytics | undefined;
    headers: { [k: string]: Array<string> };
};

/** @internal */
export namespace GetChatbotAnalyticsRequest$ {
    export const inboundSchema: z.ZodType<GetChatbotAnalyticsRequest, z.ZodTypeDef, unknown> = z
        .object({
            chatbot_id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.chatbot_id === undefined ? null : { chatbotId: v.chatbot_id }),
            };
        });

    export type Outbound = {
        chatbot_id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetChatbotAnalyticsRequest> = z
        .object({
            chatbotId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.chatbotId === undefined ? null : { chatbot_id: v.chatbotId }),
            };
        });
}

/** @internal */
export namespace GetChatbotAnalyticsResponse$ {
    export const inboundSchema: z.ZodType<GetChatbotAnalyticsResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            ChatbotAnalytics: components.ChatbotAnalytics$.inboundSchema.optional(),
            Headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.ChatbotAnalytics === undefined
                    ? null
                    : { chatbotAnalytics: v.ChatbotAnalytics }),
                headers: v.Headers,
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        ChatbotAnalytics?: components.ChatbotAnalytics$.Outbound | undefined;
        Headers: { [k: string]: Array<string> };
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetChatbotAnalyticsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            chatbotAnalytics: components.ChatbotAnalytics$.outboundSchema.optional(),
            headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.chatbotAnalytics === undefined
                    ? null
                    : { ChatbotAnalytics: v.chatbotAnalytics }),
                Headers: v.headers,
            };
        });
}
