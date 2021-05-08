import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";
import { Thing } from "./thing"

export interface DefinedRegionThing extends Thing<"DefinedRegion"> {

}

export interface DefinedRegionProperties {

}

export interface DefinedRegion extends DefinedRegionThing, DefinedRegionProperties {

}

export type DefinedRegionReference = DefinedRegionThing | DefinedRegion


export const DefinedRegionThingSymbol = Symbol("DefinedRegionThing");
export type DefinedRegionThingToken = TokenVNodeBase<typeof DefinedRegionThingSymbol, DefinedRegionThing>;
export type DefinedRegionThingTokenFn = TokenVNodeFn<typeof DefinedRegionThingSymbol, DefinedRegionThing>;
export const DefinedRegionThing: DefinedRegionThingTokenFn = createToken(DefinedRegionThingSymbol);
export const DefinedRegionPropertiesSymbol = Symbol("DefinedRegionProperties");
export type DefinedRegionPropertiesToken = TokenVNodeBase<typeof DefinedRegionPropertiesSymbol, DefinedRegionProperties>;
export type DefinedRegionPropertiesTokenFn = TokenVNodeFn<typeof DefinedRegionPropertiesSymbol, DefinedRegionProperties>;
export const DefinedRegionProperties: DefinedRegionPropertiesTokenFn = createToken(DefinedRegionPropertiesSymbol);
export const DefinedRegionSymbol = Symbol("DefinedRegion");
export type DefinedRegionToken = TokenVNodeBase<typeof DefinedRegionSymbol, DefinedRegion>;
export type DefinedRegionTokenFn = TokenVNodeFn<typeof DefinedRegionSymbol, DefinedRegion>;
export const DefinedRegion: DefinedRegionTokenFn = createToken(DefinedRegionSymbol);
