// https://schema.org/OfferCatalog
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
