// https://schema.org/Product
import { Thing, ThingReference } from "./thing"
import { URL } from "whatwg-url"
import { AudienceReference } from "./audience"
import { BrandReference } from "./brand"
import { OrganizationReference } from "./organization"
import { ImageObjectReference } from "./image-object"
import { DemandReference } from "./demand"
import { OfferReference } from "./offer"
import { PartyReference } from "./party"
import { ReviewReference } from "./review"
import { DistanceReference } from "./distance"
import { QuantitativeValueReference } from "./quantitative-value"
import { ServiceReference } from "./service"
import { ProductModelReference } from "./product-model"

export interface ProductThing extends Thing<"Product"> {

}

export interface ProductProperties {
    aggregateRating?: ThingReference
    audience?: AudienceReference
    awards?: string[]
    brand?: BrandReference | OrganizationReference
    category?: (URL | string | ThingReference)[]
    color?: string
    depth?: DistanceReference | QuantitativeValueReference
    gtin?: string
    gtin8?: string
    gtin12?: string
    gtin13?: string
    gtin14?: string
    // TODO
    hasMerchantReturnPolicy?: ThingReference
    height?: DistanceReference | QuantitativeValueReference
    isAccessoryOrSparePartFor?: ProductReference[]
    isConsumableFor?: ProductReference[]
    isRelatedTo?: (ProductReference | ServiceReference)[]
    isSimilarTo?: (ProductReference | ServiceReference)[]
    logo?: ImageObjectReference
    manufacturer?: PartyReference
    material?: (ProductReference | string | URL)[]
    model?: ProductModelReference
    mpn?: string
    nsn?: string
    offers?: (DemandReference | OfferReference)[]
    productID?: string
    productionDate?: Date
    purchaseDate?: Date
    releaseDate?: Date
    review?: ReviewReference
    sku?: string
    slogan?: string
    weight?: QuantitativeValueReference
    width?: DistanceReference | QuantitativeValueReference
}

export interface Product extends ProductThing, ProductProperties {
}

export type ProductReference = ProductThing | Product

declare global {

    interface SchemaOrgEnvironmentThings {
        Product: ProductThing | Product
    }

}
