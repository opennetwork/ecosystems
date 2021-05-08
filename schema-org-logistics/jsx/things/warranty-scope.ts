import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface WarrantyScopeThing extends Thing<"WarrantyScope"> {

}

export interface WarrantyScopeProperties {

}

export interface WarrantyScope extends WarrantyScopeThing, WarrantyScopeProperties {

}

export type WarrantyScopeReference = URL | WarrantyScopeThing | WarrantyScope
export const WarrantyScopeThingSymbol = Symbol("WarrantyScopeThing");
export type WarrantyScopeThingToken = TokenVNodeBase<typeof WarrantyScopeThingSymbol, WarrantyScopeThing>;
export type WarrantyScopeThingTokenFn = TokenVNodeFn<typeof WarrantyScopeThingSymbol, WarrantyScopeThing>;
export const WarrantyScopeThing: WarrantyScopeThingTokenFn = createToken(WarrantyScopeThingSymbol);export const WarrantyScopePropertiesSymbol = Symbol("WarrantyScopeProperties");
export type WarrantyScopePropertiesToken = TokenVNodeBase<typeof WarrantyScopePropertiesSymbol, WarrantyScopeProperties>;
export type WarrantyScopePropertiesTokenFn = TokenVNodeFn<typeof WarrantyScopePropertiesSymbol, WarrantyScopeProperties>;
export const WarrantyScopeProperties: WarrantyScopePropertiesTokenFn = createToken(WarrantyScopePropertiesSymbol);export const WarrantyScopeSymbol = Symbol("WarrantyScope");
export type WarrantyScopeToken = TokenVNodeBase<typeof WarrantyScopeSymbol, WarrantyScope>;
export type WarrantyScopeTokenFn = TokenVNodeFn<typeof WarrantyScopeSymbol, WarrantyScope>;
export const WarrantyScope: WarrantyScopeTokenFn = createToken(WarrantyScopeSymbol);