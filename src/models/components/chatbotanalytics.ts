/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type ChatbotAnalytics = {
    /**
     * The number of chats the chatbot has participated in
     */
    numberOfChats?: number | undefined;
    /**
     * The total number of messages the chatbot has exchanged
     */
    numberOfMessages?: number | undefined;
};

/** @internal */
export namespace ChatbotAnalytics$ {
    export const inboundSchema: z.ZodType<ChatbotAnalytics, z.ZodTypeDef, unknown> = z
        .object({
            number_of_chats: z.number().int().optional(),
            number_of_messages: z.number().int().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                number_of_chats: "numberOfChats",
                number_of_messages: "numberOfMessages",
            });
        });

    export type Outbound = {
        number_of_chats?: number | undefined;
        number_of_messages?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ChatbotAnalytics> = z
        .object({
            numberOfChats: z.number().int().optional(),
            numberOfMessages: z.number().int().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                numberOfChats: "number_of_chats",
                numberOfMessages: "number_of_messages",
            });
        });
}
