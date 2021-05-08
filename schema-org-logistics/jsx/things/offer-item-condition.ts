import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface OfferItemConditionThing extends Thing<"OfferItemCondition"> {

}

export interface OfferItemCondition extends OfferItemConditionThing {

}

export type OfferItemConditionReference = URL | OfferItemConditionThing | OfferItemCondition

export const OfferItemConditionThingSymbol = Symbol("OfferItemConditionThing");
export type OfferItemConditionThingToken = TokenVNodeBase<typeof OfferItemConditionThingSymbol, OfferItemConditionThing>;
export type OfferItemConditionThingTokenFn = TokenVNodeFn<typeof OfferItemConditionThingSymbol, OfferItemConditionThing>;
export const OfferItemConditionThing: OfferItemConditionThingTokenFn = createToken(OfferItemConditionThingSymbol);export const OfferItemConditionSymbol = Symbol("OfferItemCondition");
export type OfferItemConditionToken = TokenVNodeBase<typeof OfferItemConditionSymbol, OfferItemCondition>;
export type OfferItemConditionTokenFn = TokenVNodeFn<typeof OfferItemConditionSymbol, OfferItemCondition>;
export const OfferItemCondition: OfferItemConditionTokenFn = createToken(OfferItemConditionSymbol);