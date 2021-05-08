import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing, ThingReference } from "./thing"

export interface MonetaryAmountThing extends Thing<"MonetaryAmount"> {

}

export interface MonetaryAmount extends MonetaryAmountThing {
    currency?: string
    maxValue?: number
    minValue?: number
    validFrom?: Date
    validThrough?: Date
    value?: boolean | number | string | ThingReference
}

export type MonetaryAmountReference = MonetaryAmountThing | MonetaryAmount
export const MonetaryAmountThingSymbol = Symbol("MonetaryAmountThing");
export type MonetaryAmountThingToken = TokenVNodeBase<typeof MonetaryAmountThingSymbol, MonetaryAmountThing>;
export type MonetaryAmountThingTokenFn = TokenVNodeFn<typeof MonetaryAmountThingSymbol, MonetaryAmountThing>;
export const MonetaryAmountThing: MonetaryAmountThingTokenFn = createToken(MonetaryAmountThingSymbol);export const MonetaryAmountSymbol = Symbol("MonetaryAmount");
export type MonetaryAmountToken = TokenVNodeBase<typeof MonetaryAmountSymbol, MonetaryAmount>;
export type MonetaryAmountTokenFn = TokenVNodeFn<typeof MonetaryAmountSymbol, MonetaryAmount>;
export const MonetaryAmount: MonetaryAmountTokenFn = createToken(MonetaryAmountSymbol);