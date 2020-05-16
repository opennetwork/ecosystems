// https://schema.org/OfferCatalog
import { Thing } from "./thing"

export interface OfferCatalogThing extends Thing<"OfferCatalog"> {

}

export interface OfferCatalogProperties {
    itemListElement?: (SchemaOrgEnvironmentThings["Offer"] | SchemaOrgEnvironmentThings["OfferCatalog"])[]
    numberOfItems?: number
}

export interface OfferCatalog extends OfferCatalogThing, OfferCatalogProperties {

}

declare global {

    interface SchemaOrgEnvironmentThings {
        OfferCatalog: OfferCatalogThing | OfferCatalog
    }

}
