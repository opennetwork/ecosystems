import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";
import { Thing } from "./thing"

export interface PlaceThing extends Thing<"Place"> {

}

export interface PlaceProperties {

}

export interface Place extends PlaceThing, PlaceProperties {

}

export type PlaceReference = PlaceThing | Place

export const PlaceThingSymbol = Symbol("PlaceThing");
export type PlaceThingToken = TokenVNodeBase<typeof PlaceThingSymbol, PlaceThing>;
export type PlaceThingTokenFn = TokenVNodeFn<typeof PlaceThingSymbol, PlaceThing>;
export const PlaceThing: PlaceThingTokenFn = createToken(PlaceThingSymbol);
export const PlacePropertiesSymbol = Symbol("PlaceProperties");
export type PlacePropertiesToken = TokenVNodeBase<typeof PlacePropertiesSymbol, PlaceProperties>;
export type PlacePropertiesTokenFn = TokenVNodeFn<typeof PlacePropertiesSymbol, PlaceProperties>;
export const PlaceProperties: PlacePropertiesTokenFn = createToken(PlacePropertiesSymbol);
export const PlaceSymbol = Symbol("Place");
export type PlaceToken = TokenVNodeBase<typeof PlaceSymbol, Place>;
export type PlaceTokenFn = TokenVNodeFn<typeof PlaceSymbol, Place>;
export const Place: PlaceTokenFn = createToken(PlaceSymbol);
