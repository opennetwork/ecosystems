// https://schema.org/Product
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface ProductThing extends Thing<"Product"> {

}

export interface ProductProperties {
    aggregateRating?: SchemaOrgEnvironmentThings["Thing"]
    audience?: SchemaOrgEnvironmentThings["Audience"]
    awards?: string[]
    brand?: SchemaOrgEnvironmentThings["Brand"] | SchemaOrgEnvironmentThings["Organization"]
    category?: (URL | string | SchemaOrgEnvironmentThings["Thing"])[]
    color?: string
    depth?: SchemaOrgEnvironmentThings["Distance"] | SchemaOrgEnvironmentThings["QuantitativeValue"]
    gtin?: string
    gtin8?: string
    gtin12?: string
    gtin13?: string
    gtin14?: string
    // TODO
    hasMerchantReturnPolicy?: SchemaOrgEnvironmentThings["Thing"]
    height?: SchemaOrgEnvironmentThings["Distance"] | SchemaOrgEnvironmentThings["QuantitativeValue"]
    isAccessoryOrSparePartFor?: SchemaOrgEnvironmentThings["Product"][]
    isConsumableFor?: SchemaOrgEnvironmentThings["Product"][]
    isRelatedTo?: (SchemaOrgEnvironmentThings["Product"] | SchemaOrgEnvironmentThings["Service"])[]
    isSimilarTo?: (SchemaOrgEnvironmentThings["Product"] | SchemaOrgEnvironmentThings["Service"])[]
    logo?: SchemaOrgEnvironmentThings["Image"]
    manufacturer?: SchemaOrgEnvironmentThings["Party"]
    material?: (SchemaOrgEnvironmentThings["Product"] | string | URL)[]
    model?: SchemaOrgEnvironmentThings["ProductModel"]
    mpn?: string
    nsn?: string
    offers?: (SchemaOrgEnvironmentThings["Demand"] | SchemaOrgEnvironmentThings["Offer"])[]
    productID?: string
    productionDate?: Date
    purchaseDate?: Date
    releaseDate?: Date
    review?: SchemaOrgEnvironmentThings["Review"]
    sku?: string
    slogan?: string
    weight?: SchemaOrgEnvironmentThings["QuantitativeValue"]
    width?: SchemaOrgEnvironmentThings["Distance"] | SchemaOrgEnvironmentThings["QuantitativeValue"]
}

export interface Product extends ProductThing, ProductProperties {
}

declare global {

    interface SchemaOrgEnvironmentThings {
        Product: ProductThing | Product
    }

}
