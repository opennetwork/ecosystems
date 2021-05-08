import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";
import { Thing } from "./thing"
import { OfferReference } from "./offer"

export interface OfferCatalogThing extends Thing<"OfferCatalog"> {

}

export interface OfferCatalogProperties {
    itemListElement?: (OfferReference | OfferCatalogReference)[]
    numberOfItems?: number
}

export interface OfferCatalog extends OfferCatalogThing, OfferCatalogProperties {

}

export type OfferCatalogReference = OfferCatalogThing | OfferCatalog

export const OfferCatalogThingSymbol = Symbol("OfferCatalogThing");
export type OfferCatalogThingToken = TokenVNodeBase<typeof OfferCatalogThingSymbol, OfferCatalogThing>;
export type OfferCatalogThingTokenFn = TokenVNodeFn<typeof OfferCatalogThingSymbol, OfferCatalogThing>;
export const OfferCatalogThing: OfferCatalogThingTokenFn = createToken(OfferCatalogThingSymbol);
export const OfferCatalogPropertiesSymbol = Symbol("OfferCatalogProperties");
export type OfferCatalogPropertiesToken = TokenVNodeBase<typeof OfferCatalogPropertiesSymbol, OfferCatalogProperties>;
export type OfferCatalogPropertiesTokenFn = TokenVNodeFn<typeof OfferCatalogPropertiesSymbol, OfferCatalogProperties>;
export const OfferCatalogProperties: OfferCatalogPropertiesTokenFn = createToken(OfferCatalogPropertiesSymbol);
export const OfferCatalogSymbol = Symbol("OfferCatalog");
export type OfferCatalogToken = TokenVNodeBase<typeof OfferCatalogSymbol, OfferCatalog>;
export type OfferCatalogTokenFn = TokenVNodeFn<typeof OfferCatalogSymbol, OfferCatalog>;
export const OfferCatalog: OfferCatalogTokenFn = createToken(OfferCatalogSymbol);
