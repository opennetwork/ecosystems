import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing } from "./thing"
import { QuantitativeValueReference } from "./quantitative-value"
import { WarrantyScopeReference } from "./warranty-scope"

export interface WarrantyPromiseThing extends Thing<"WarrantyPromise"> {

}

export interface WarrantyPromiseProperties {
    durationOfWarranty?: QuantitativeValueReference
    warrantyScope?: WarrantyScopeReference
}

export interface WarrantyPromise extends WarrantyPromiseThing, WarrantyPromiseProperties {

}

export type WarrantyPromiseReference = WarrantyPromiseThing | WarrantyPromise
export const WarrantyPromiseThingSymbol = Symbol("WarrantyPromiseThing");
export type WarrantyPromiseThingToken = TokenVNodeBase<typeof WarrantyPromiseThingSymbol, WarrantyPromiseThing>;
export type WarrantyPromiseThingTokenFn = TokenVNodeFn<typeof WarrantyPromiseThingSymbol, WarrantyPromiseThing>;
export const WarrantyPromiseThing: WarrantyPromiseThingTokenFn = createToken(WarrantyPromiseThingSymbol);export const WarrantyPromisePropertiesSymbol = Symbol("WarrantyPromiseProperties");
export type WarrantyPromisePropertiesToken = TokenVNodeBase<typeof WarrantyPromisePropertiesSymbol, WarrantyPromiseProperties>;
export type WarrantyPromisePropertiesTokenFn = TokenVNodeFn<typeof WarrantyPromisePropertiesSymbol, WarrantyPromiseProperties>;
export const WarrantyPromiseProperties: WarrantyPromisePropertiesTokenFn = createToken(WarrantyPromisePropertiesSymbol);export const WarrantyPromiseSymbol = Symbol("WarrantyPromise");
export type WarrantyPromiseToken = TokenVNodeBase<typeof WarrantyPromiseSymbol, WarrantyPromise>;
export type WarrantyPromiseTokenFn = TokenVNodeFn<typeof WarrantyPromiseSymbol, WarrantyPromise>;
export const WarrantyPromise: WarrantyPromiseTokenFn = createToken(WarrantyPromiseSymbol);