import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface DeliveryMethodThing extends Thing<"DeliveryMethod"> {

}

export interface DeliveryMethod extends DeliveryMethodThing {

}

export type DeliveryMethodReference = URL | DeliveryMethodThing | DeliveryMethod
export const DeliveryMethodThingSymbol = Symbol("DeliveryMethodThing");
export type DeliveryMethodThingToken = TokenVNodeBase<typeof DeliveryMethodThingSymbol, DeliveryMethodThing>;
export type DeliveryMethodThingTokenFn = TokenVNodeFn<typeof DeliveryMethodThingSymbol, DeliveryMethodThing>;
export const DeliveryMethodThing: DeliveryMethodThingTokenFn = createToken(DeliveryMethodThingSymbol);export const DeliveryMethodSymbol = Symbol("DeliveryMethod");
export type DeliveryMethodToken = TokenVNodeBase<typeof DeliveryMethodSymbol, DeliveryMethod>;
export type DeliveryMethodTokenFn = TokenVNodeFn<typeof DeliveryMethodSymbol, DeliveryMethod>;
export const DeliveryMethod: DeliveryMethodTokenFn = createToken(DeliveryMethodSymbol);