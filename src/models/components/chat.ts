/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ModelResponse = {
    content?: string | undefined;
    timestamp?: number | undefined;
};

export type UserInput = {
    content?: string | undefined;
    timestamp?: number | undefined;
};

export type RecentChatHistory = {
    id?: string | undefined;
    modelResponse?: ModelResponse | undefined;
    userInput?: UserInput | undefined;
};

/**
 * The default options for the chat
 */
export type DefaultOptions = {
    autoQueryGuidance?: string | undefined;
    knowledgeBaseIds?: Array<string> | undefined;
    model?: string | undefined;
};

export type Chat = {
    /**
     * The ID of the brain associated with the chat
     */
    brainId?: string | null | undefined;
    /**
     * The unique identifier of the chat
     */
    chatId?: string | undefined;
    /**
     * The timestamp when the chat was created
     */
    createdAt?: string | undefined;
    /**
     * The unique identifier of the chat record
     */
    id?: number | undefined;
    /**
     * The timestamp when the chat was last updated
     */
    lastUpdated?: string | null | undefined;
    /**
     * The name of the model used for the chat
     */
    model?: string | undefined;
    /**
     * The metadata related to the chat interactions
     */
    recentChatHistory?: Array<RecentChatHistory> | undefined;
    /**
     * The system message or prompt for the chat
     */
    systemMessage?: string | null | undefined;
    /**
     * The temperature value used for the model
     */
    temperature?: number | null | undefined;
    /**
     * The title or name of the chat
     */
    title?: string | undefined;
    /**
     * The ID of the user associated with the chat
     */
    userId?: string | undefined;
    /**
     * The default options for the chat
     */
    defaultOptions?: DefaultOptions | null | undefined;
};

/** @internal */
export namespace ModelResponse$ {
    export const inboundSchema: z.ZodType<ModelResponse, z.ZodTypeDef, unknown> = z
        .object({
            content: z.string().optional(),
            timestamp: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.timestamp === undefined ? null : { timestamp: v.timestamp }),
            };
        });

    export type Outbound = {
        content?: string | undefined;
        timestamp?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ModelResponse> = z
        .object({
            content: z.string().optional(),
            timestamp: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.timestamp === undefined ? null : { timestamp: v.timestamp }),
            };
        });
}

/** @internal */
export namespace UserInput$ {
    export const inboundSchema: z.ZodType<UserInput, z.ZodTypeDef, unknown> = z
        .object({
            content: z.string().optional(),
            timestamp: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.timestamp === undefined ? null : { timestamp: v.timestamp }),
            };
        });

    export type Outbound = {
        content?: string | undefined;
        timestamp?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UserInput> = z
        .object({
            content: z.string().optional(),
            timestamp: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.content === undefined ? null : { content: v.content }),
                ...(v.timestamp === undefined ? null : { timestamp: v.timestamp }),
            };
        });
}

/** @internal */
export namespace RecentChatHistory$ {
    export const inboundSchema: z.ZodType<RecentChatHistory, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string().optional(),
            model_response: z.lazy(() => ModelResponse$.inboundSchema).optional(),
            user_input: z.lazy(() => UserInput$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.model_response === undefined ? null : { modelResponse: v.model_response }),
                ...(v.user_input === undefined ? null : { userInput: v.user_input }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        model_response?: ModelResponse$.Outbound | undefined;
        user_input?: UserInput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RecentChatHistory> = z
        .object({
            id: z.string().optional(),
            modelResponse: z.lazy(() => ModelResponse$.outboundSchema).optional(),
            userInput: z.lazy(() => UserInput$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.modelResponse === undefined ? null : { model_response: v.modelResponse }),
                ...(v.userInput === undefined ? null : { user_input: v.userInput }),
            };
        });
}

/** @internal */
export namespace DefaultOptions$ {
    export const inboundSchema: z.ZodType<DefaultOptions, z.ZodTypeDef, unknown> = z
        .object({
            auto_query_guidance: z.string().optional(),
            knowledge_base_ids: z.array(z.string()).optional(),
            model: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.auto_query_guidance === undefined
                    ? null
                    : { autoQueryGuidance: v.auto_query_guidance }),
                ...(v.knowledge_base_ids === undefined
                    ? null
                    : { knowledgeBaseIds: v.knowledge_base_ids }),
                ...(v.model === undefined ? null : { model: v.model }),
            };
        });

    export type Outbound = {
        auto_query_guidance?: string | undefined;
        knowledge_base_ids?: Array<string> | undefined;
        model?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DefaultOptions> = z
        .object({
            autoQueryGuidance: z.string().optional(),
            knowledgeBaseIds: z.array(z.string()).optional(),
            model: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.autoQueryGuidance === undefined
                    ? null
                    : { auto_query_guidance: v.autoQueryGuidance }),
                ...(v.knowledgeBaseIds === undefined
                    ? null
                    : { knowledge_base_ids: v.knowledgeBaseIds }),
                ...(v.model === undefined ? null : { model: v.model }),
            };
        });
}

/** @internal */
export namespace Chat$ {
    export const inboundSchema: z.ZodType<Chat, z.ZodTypeDef, unknown> = z
        .object({
            brain_id: z.nullable(z.string()).optional(),
            chat_id: z.string().optional(),
            created_at: z.string().optional(),
            id: z.number().int().optional(),
            last_updated: z.nullable(z.string()).optional(),
            model: z.string().optional(),
            recent_chat_history: z.array(z.lazy(() => RecentChatHistory$.inboundSchema)).optional(),
            system_message: z.nullable(z.string()).optional(),
            temperature: z.nullable(z.number()).optional(),
            title: z.string().optional(),
            user_id: z.string().optional(),
            default_options: z.nullable(z.lazy(() => DefaultOptions$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.brain_id === undefined ? null : { brainId: v.brain_id }),
                ...(v.chat_id === undefined ? null : { chatId: v.chat_id }),
                ...(v.created_at === undefined ? null : { createdAt: v.created_at }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.last_updated === undefined ? null : { lastUpdated: v.last_updated }),
                ...(v.model === undefined ? null : { model: v.model }),
                ...(v.recent_chat_history === undefined
                    ? null
                    : { recentChatHistory: v.recent_chat_history }),
                ...(v.system_message === undefined ? null : { systemMessage: v.system_message }),
                ...(v.temperature === undefined ? null : { temperature: v.temperature }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.user_id === undefined ? null : { userId: v.user_id }),
                ...(v.default_options === undefined ? null : { defaultOptions: v.default_options }),
            };
        });

    export type Outbound = {
        brain_id?: string | null | undefined;
        chat_id?: string | undefined;
        created_at?: string | undefined;
        id?: number | undefined;
        last_updated?: string | null | undefined;
        model?: string | undefined;
        recent_chat_history?: Array<RecentChatHistory$.Outbound> | undefined;
        system_message?: string | null | undefined;
        temperature?: number | null | undefined;
        title?: string | undefined;
        user_id?: string | undefined;
        default_options?: DefaultOptions$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Chat> = z
        .object({
            brainId: z.nullable(z.string()).optional(),
            chatId: z.string().optional(),
            createdAt: z.string().optional(),
            id: z.number().int().optional(),
            lastUpdated: z.nullable(z.string()).optional(),
            model: z.string().optional(),
            recentChatHistory: z.array(z.lazy(() => RecentChatHistory$.outboundSchema)).optional(),
            systemMessage: z.nullable(z.string()).optional(),
            temperature: z.nullable(z.number()).optional(),
            title: z.string().optional(),
            userId: z.string().optional(),
            defaultOptions: z.nullable(z.lazy(() => DefaultOptions$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.brainId === undefined ? null : { brain_id: v.brainId }),
                ...(v.chatId === undefined ? null : { chat_id: v.chatId }),
                ...(v.createdAt === undefined ? null : { created_at: v.createdAt }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.lastUpdated === undefined ? null : { last_updated: v.lastUpdated }),
                ...(v.model === undefined ? null : { model: v.model }),
                ...(v.recentChatHistory === undefined
                    ? null
                    : { recent_chat_history: v.recentChatHistory }),
                ...(v.systemMessage === undefined ? null : { system_message: v.systemMessage }),
                ...(v.temperature === undefined ? null : { temperature: v.temperature }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.userId === undefined ? null : { user_id: v.userId }),
                ...(v.defaultOptions === undefined ? null : { default_options: v.defaultOptions }),
            };
        });
}
