/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetChatChatIdRequest = {
    chatId: string;
};

export type GetChatChatIdResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    chat?: components.Chat | undefined;
    headers: { [k: string]: Array<string> };
};

/** @internal */
export namespace GetChatChatIdRequest$ {
    export const inboundSchema: z.ZodType<GetChatChatIdRequest, z.ZodTypeDef, unknown> = z
        .object({
            chat_id: z.string(),
        })
        .transform((v) => {
            return {
                chatId: v.chat_id,
            };
        });

    export type Outbound = {
        chat_id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetChatChatIdRequest> = z
        .object({
            chatId: z.string(),
        })
        .transform((v) => {
            return {
                chat_id: v.chatId,
            };
        });
}

/** @internal */
export namespace GetChatChatIdResponse$ {
    export const inboundSchema: z.ZodType<GetChatChatIdResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Chat: components.Chat$.inboundSchema.optional(),
            Headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Chat === undefined ? null : { chat: v.Chat }),
                headers: v.Headers,
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Chat?: components.Chat$.Outbound | undefined;
        Headers: { [k: string]: Array<string> };
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetChatChatIdResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            chat: components.Chat$.outboundSchema.optional(),
            headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.chat === undefined ? null : { Chat: v.chat }),
                Headers: v.headers,
            };
        });
}
