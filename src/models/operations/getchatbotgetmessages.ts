/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type GetChatbotGetMessagesRequest = {
    chatbotId?: string | undefined;
};

export type GetChatbotGetMessagesResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    chatbotMessages?: components.ChatbotMessages | undefined;
    headers: { [k: string]: Array<string> };
};

/** @internal */
export namespace GetChatbotGetMessagesRequest$ {
    export const inboundSchema: z.ZodType<GetChatbotGetMessagesRequest, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetChatbotGetMessagesRequest> = z
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
export namespace GetChatbotGetMessagesResponse$ {
    export const inboundSchema: z.ZodType<GetChatbotGetMessagesResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            ChatbotMessages: components.ChatbotMessages$.inboundSchema.optional(),
            Headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                ChatbotMessages: "chatbotMessages",
                Headers: "headers",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        ChatbotMessages?: components.ChatbotMessages$.Outbound | undefined;
        Headers: { [k: string]: Array<string> };
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetChatbotGetMessagesResponse> =
        z
            .object({
                httpMeta: components.HTTPMetadata$.outboundSchema,
                chatbotMessages: components.ChatbotMessages$.outboundSchema.optional(),
                headers: z.record(z.array(z.string())),
            })
            .transform((v) => {
                return remap$(v, {
                    httpMeta: "HttpMeta",
                    chatbotMessages: "ChatbotMessages",
                    headers: "Headers",
                });
            });
}
