import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface ItemAvailabilityThing extends Thing<"ItemAvailability"> {

}

export interface ItemAvailabilityProperties {

}

export interface ItemAvailability extends ItemAvailabilityThing, ItemAvailabilityProperties {

}

export type ItemAvailabilityReference = URL | ItemAvailabilityThing | ItemAvailability


export const ItemAvailabilityThingSymbol = Symbol("ItemAvailabilityThing");
export type ItemAvailabilityThingToken = TokenVNodeBase<typeof ItemAvailabilityThingSymbol, ItemAvailabilityThing>;
export type ItemAvailabilityThingTokenFn = TokenVNodeFn<typeof ItemAvailabilityThingSymbol, ItemAvailabilityThing>;
export const ItemAvailabilityThing: ItemAvailabilityThingTokenFn = createToken(ItemAvailabilityThingSymbol);
export const ItemAvailabilityPropertiesSymbol = Symbol("ItemAvailabilityProperties");
export type ItemAvailabilityPropertiesToken = TokenVNodeBase<typeof ItemAvailabilityPropertiesSymbol, ItemAvailabilityProperties>;
export type ItemAvailabilityPropertiesTokenFn = TokenVNodeFn<typeof ItemAvailabilityPropertiesSymbol, ItemAvailabilityProperties>;
export const ItemAvailabilityProperties: ItemAvailabilityPropertiesTokenFn = createToken(ItemAvailabilityPropertiesSymbol);
export const ItemAvailabilitySymbol = Symbol("ItemAvailability");
export type ItemAvailabilityToken = TokenVNodeBase<typeof ItemAvailabilitySymbol, ItemAvailability>;
export type ItemAvailabilityTokenFn = TokenVNodeFn<typeof ItemAvailabilitySymbol, ItemAvailability>;
export const ItemAvailability: ItemAvailabilityTokenFn = createToken(ItemAvailabilitySymbol);
