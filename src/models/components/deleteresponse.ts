/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteResponse = {
    /**
     * A message indicating the result of the delete operation
     */
    message?: string | undefined;
};

/** @internal */
export namespace DeleteResponse$ {
    export const inboundSchema: z.ZodType<DeleteResponse, z.ZodTypeDef, unknown> = z
        .object({
            message: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.message === undefined ? null : { message: v.message }),
            };
        });

    export type Outbound = {
        message?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteResponse> = z
        .object({
            message: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.message === undefined ? null : { message: v.message }),
            };
        });
}
