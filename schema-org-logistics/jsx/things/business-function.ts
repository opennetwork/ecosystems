import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";
import { Thing } from "./thing"

export interface BusinessFunctionThing extends Thing<"BusinessFunction"> {

}

export interface BusinessFunction extends BusinessFunctionThing {

}

export type BusinessFunctionReference = string | BusinessFunctionThing | BusinessFunction

export const BusinessFunctionThingSymbol = Symbol("BusinessFunctionThing");
export type BusinessFunctionThingToken = TokenVNodeBase<typeof BusinessFunctionThingSymbol, BusinessFunctionThing>;
export type BusinessFunctionThingTokenFn = TokenVNodeFn<typeof BusinessFunctionThingSymbol, BusinessFunctionThing>;
export const BusinessFunctionThing: BusinessFunctionThingTokenFn = createToken(BusinessFunctionThingSymbol);
export const BusinessFunctionSymbol = Symbol("BusinessFunction");
export type BusinessFunctionToken = TokenVNodeBase<typeof BusinessFunctionSymbol, BusinessFunction>;
export type BusinessFunctionTokenFn = TokenVNodeFn<typeof BusinessFunctionSymbol, BusinessFunction>;
export const BusinessFunction: BusinessFunctionTokenFn = createToken(BusinessFunctionSymbol);
