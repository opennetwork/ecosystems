import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";
import { Thing } from "./thing"

export interface QuantitativeValueThing extends Thing<"QuantitativeValue"> {

}

export interface QuantitativeValueProperties {

}

export interface QuantitativeValue extends QuantitativeValueThing, QuantitativeValueProperties {

}

export type QuantitativeValueReference = QuantitativeValueThing | QuantitativeValue


export const QuantitativeValueThingSymbol = Symbol("QuantitativeValueThing");
export type QuantitativeValueThingToken = TokenVNodeBase<typeof QuantitativeValueThingSymbol, QuantitativeValueThing>;
export type QuantitativeValueThingTokenFn = TokenVNodeFn<typeof QuantitativeValueThingSymbol, QuantitativeValueThing>;
export const QuantitativeValueThing: QuantitativeValueThingTokenFn = createToken(QuantitativeValueThingSymbol);
export const QuantitativeValuePropertiesSymbol = Symbol("QuantitativeValueProperties");
export type QuantitativeValuePropertiesToken = TokenVNodeBase<typeof QuantitativeValuePropertiesSymbol, QuantitativeValueProperties>;
export type QuantitativeValuePropertiesTokenFn = TokenVNodeFn<typeof QuantitativeValuePropertiesSymbol, QuantitativeValueProperties>;
export const QuantitativeValueProperties: QuantitativeValuePropertiesTokenFn = createToken(QuantitativeValuePropertiesSymbol);
export const QuantitativeValueSymbol = Symbol("QuantitativeValue");
export type QuantitativeValueToken = TokenVNodeBase<typeof QuantitativeValueSymbol, QuantitativeValue>;
export type QuantitativeValueTokenFn = TokenVNodeFn<typeof QuantitativeValueSymbol, QuantitativeValue>;
export const QuantitativeValue: QuantitativeValueTokenFn = createToken(QuantitativeValueSymbol);
