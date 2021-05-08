import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";
import { Thing } from "./thing"

export interface DistanceThing extends Thing<"Distance"> {

}

export interface Distance extends DistanceThing {

}

export type DistanceReference = string | DistanceThing | Distance

export const DistanceThingSymbol = Symbol("DistanceThing");
export type DistanceThingToken = TokenVNodeBase<typeof DistanceThingSymbol, DistanceThing>;
export type DistanceThingTokenFn = TokenVNodeFn<typeof DistanceThingSymbol, DistanceThing>;
export const DistanceThing: DistanceThingTokenFn = createToken(DistanceThingSymbol);
export const DistanceSymbol = Symbol("Distance");
export type DistanceToken = TokenVNodeBase<typeof DistanceSymbol, Distance>;
export type DistanceTokenFn = TokenVNodeFn<typeof DistanceSymbol, Distance>;
export const Distance: DistanceTokenFn = createToken(DistanceSymbol);
