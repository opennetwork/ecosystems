import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";
import { Thing } from "./thing"
import { ServiceProperties } from "./service"

export interface FinancialProductThing extends Thing<"FinancialProduct"> {

}

export interface FinancialProductProperties extends ServiceProperties {

}

export interface FinancialProduct extends FinancialProductThing, FinancialProductProperties {

}

export type FinancialProductReference = FinancialProductThing | FinancialProduct

export const FinancialProductThingSymbol = Symbol("FinancialProductThing");
export type FinancialProductThingToken = TokenVNodeBase<typeof FinancialProductThingSymbol, FinancialProductThing>;
export type FinancialProductThingTokenFn = TokenVNodeFn<typeof FinancialProductThingSymbol, FinancialProductThing>;
export const FinancialProductThing: FinancialProductThingTokenFn = createToken(FinancialProductThingSymbol);
export const FinancialProductPropertiesSymbol = Symbol("FinancialProductProperties");
export type FinancialProductPropertiesToken = TokenVNodeBase<typeof FinancialProductPropertiesSymbol, FinancialProductProperties>;
export type FinancialProductPropertiesTokenFn = TokenVNodeFn<typeof FinancialProductPropertiesSymbol, FinancialProductProperties>;
export const FinancialProductProperties: FinancialProductPropertiesTokenFn = createToken(FinancialProductPropertiesSymbol);
export const FinancialProductSymbol = Symbol("FinancialProduct");
export type FinancialProductToken = TokenVNodeBase<typeof FinancialProductSymbol, FinancialProduct>;
export type FinancialProductTokenFn = TokenVNodeFn<typeof FinancialProductSymbol, FinancialProduct>;
export const FinancialProduct: FinancialProductTokenFn = createToken(FinancialProductSymbol);
