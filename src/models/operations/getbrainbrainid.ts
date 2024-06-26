/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type GetBrainBrainIdRequest = {
    brainId: string;
};

export type GetBrainBrainIdResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    brain?: components.Brain | undefined;
    headers: { [k: string]: Array<string> };
};

/** @internal */
export namespace GetBrainBrainIdRequest$ {
    export const inboundSchema: z.ZodType<GetBrainBrainIdRequest, z.ZodTypeDef, unknown> = z
        .object({
            brain_id: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                brain_id: "brainId",
            });
        });

    export type Outbound = {
        brain_id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBrainBrainIdRequest> = z
        .object({
            brainId: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                brainId: "brain_id",
            });
        });
}

/** @internal */
export namespace GetBrainBrainIdResponse$ {
    export const inboundSchema: z.ZodType<GetBrainBrainIdResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Brain: components.Brain$.inboundSchema.optional(),
            Headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                Brain: "brain",
                Headers: "headers",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Brain?: components.Brain$.Outbound | undefined;
        Headers: { [k: string]: Array<string> };
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBrainBrainIdResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            brain: components.Brain$.outboundSchema.optional(),
            headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                brain: "Brain",
                headers: "Headers",
            });
        });
}
