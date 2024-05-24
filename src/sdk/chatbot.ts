/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as operations from "../models/operations";

export class Chatbot extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Create Chatbot
     */
    async postChatbotCreate(
        request?: operations.PostChatbotCreateRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.PostChatbotCreateResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.PostChatbotCreateRequestBody$.outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/chatbot/create")();

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "post_/chatbot/create",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.PostChatbotCreateResponse>()
            .json(200, operations.PostChatbotCreateResponse$, { hdrs: true, key: "object" })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * List Chatbots
     */
    async postChatbotList(options?: RequestOptions): Promise<operations.PostChatbotListResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/chatbot/list")();

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "post_/chatbot/list",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.PostChatbotListResponse>()
            .json(200, operations.PostChatbotListResponse$, { hdrs: true, key: "object" })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get Chatbot
     */
    async postChatbotGet(
        chatbotId?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.PostChatbotGetResponse> {
        const input$: operations.PostChatbotGetRequest = {
            chatbotId: chatbotId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.PostChatbotGetRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/chatbot/get")();

        const query$ = [
            enc$.encodeForm("chatbot_id", payload$.chatbot_id, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "post_/chatbot/get",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.PostChatbotGetResponse>()
            .json(200, operations.PostChatbotGetResponse$, { hdrs: true, key: "object" })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get Chatbot analytics
     */
    async getChatbotAnalytics(
        chatbotId?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.GetChatbotAnalyticsResponse> {
        const input$: operations.GetChatbotAnalyticsRequest = {
            chatbotId: chatbotId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetChatbotAnalyticsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/chatbot/analytics")();

        const query$ = [
            enc$.encodeForm("chatbot_id", payload$.chatbot_id, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "get_/chatbot/analytics",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.GetChatbotAnalyticsResponse>()
            .json(200, operations.GetChatbotAnalyticsResponse$, { hdrs: true, key: "object" })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get Chatbot messages
     *
     * @remarks
     * note: there is a limit of 10000 messages
     */
    async getChatbotGetMessages(
        chatbotId?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.GetChatbotGetMessagesResponse> {
        const input$: operations.GetChatbotGetMessagesRequest = {
            chatbotId: chatbotId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetChatbotGetMessagesRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/chatbot/get_messages")();

        const query$ = [
            enc$.encodeForm("chatbot_id", payload$.chatbot_id, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "get_/chatbot/get_messages",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.GetChatbotGetMessagesResponse>()
            .json(200, operations.GetChatbotGetMessagesResponse$, { hdrs: true, key: "object" })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Update Chatbot
     */
    async postChatbotUpdate(
        request?: operations.PostChatbotUpdateRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.PostChatbotUpdateResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.PostChatbotUpdateRequestBody$.outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/chatbot/update")();

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "post_/chatbot/update",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.PostChatbotUpdateResponse>()
            .json(200, operations.PostChatbotUpdateResponse$, { hdrs: true, key: "object" })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Delete Chatbot
     */
    async postChatbotDelete(
        chatbotId?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.PostChatbotDeleteResponse> {
        const input$: operations.PostChatbotDeleteRequest = {
            chatbotId: chatbotId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.PostChatbotDeleteRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/chatbot/delete")();

        const query$ = [
            enc$.encodeForm("chatbot_id", payload$.chatbot_id, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "post_/chatbot/delete",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.PostChatbotDeleteResponse>()
            .json(200, operations.PostChatbotDeleteResponse$, { hdrs: true, key: "object" })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Reset Token
     */
    async postChatbotReset(
        chatbotId?: string | undefined,
        options?: RequestOptions
    ): Promise<operations.PostChatbotResetResponse> {
        const input$: operations.PostChatbotResetRequest = {
            chatbotId: chatbotId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.PostChatbotResetRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/chatbot/reset")();

        const query$ = [
            enc$.encodeForm("chatbot_id", payload$.chatbot_id, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "post_/chatbot/reset",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.PostChatbotResetResponse>()
            .json(200, operations.PostChatbotResetResponse$, { hdrs: true, key: "object" })
            .fail(["4XX", "5XX"])
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }
}
