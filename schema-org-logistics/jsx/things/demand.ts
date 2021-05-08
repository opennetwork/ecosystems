import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing } from "./thing"
import { OfferProperties } from "./offer"

export interface DemandThing extends Thing<"Demand"> {

}

export interface DemandProperties extends OfferProperties {

}

export interface Demand extends DemandThing, DemandProperties {

}

export type DemandReference = DemandThing | Demand
export const DemandThingSymbol = Symbol("DemandThing");
export type DemandThingToken = TokenVNodeBase<typeof DemandThingSymbol, DemandThing>;
export type DemandThingTokenFn = TokenVNodeFn<typeof DemandThingSymbol, DemandThing>;
export const DemandThing: DemandThingTokenFn = createToken(DemandThingSymbol);export const DemandPropertiesSymbol = Symbol("DemandProperties");
export type DemandPropertiesToken = TokenVNodeBase<typeof DemandPropertiesSymbol, DemandProperties>;
export type DemandPropertiesTokenFn = TokenVNodeFn<typeof DemandPropertiesSymbol, DemandProperties>;
export const DemandProperties: DemandPropertiesTokenFn = createToken(DemandPropertiesSymbol);export const DemandSymbol = Symbol("Demand");
export type DemandToken = TokenVNodeBase<typeof DemandSymbol, Demand>;
export type DemandTokenFn = TokenVNodeFn<typeof DemandSymbol, Demand>;
export const Demand: DemandTokenFn = createToken(DemandSymbol);