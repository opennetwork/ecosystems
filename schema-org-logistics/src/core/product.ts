// https://schema.org/Product
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface ProductThing extends Thing<"Product"> {

}

export interface ProductProperties {
    aggregateRating?: EnvironmentThings["Thing"]
    audience?: EnvironmentThings["Audience"]
    awards?: string[]
    brand?: EnvironmentThings["Brand"] | EnvironmentThings["Organization"]
    category?: (URL | string | EnvironmentThings["Thing"])[]
    color?: string
    depth?: EnvironmentThings["Distance"] | EnvironmentThings["QuantitativeValue"]
    gtin?: string
    gtin8?: string
    gtin12?: string
    gtin13?: string
    gtin14?: string
    // TODO
    hasMerchantReturnPolicy?: EnvironmentThings["Thing"]
    height?: EnvironmentThings["Distance"] | EnvironmentThings["QuantitativeValue"]
    isAccessoryOrSparePartFor?: EnvironmentThings["Product"][]
    isConsumableFor?: EnvironmentThings["Product"][]
    isRelatedTo?: (EnvironmentThings["Product"] | EnvironmentThings["Service"])[]
    isSimilarTo?: (EnvironmentThings["Product"] | EnvironmentThings["Service"])[]
    logo?: EnvironmentThings["Image"]
    manufacturer?: EnvironmentThings["Party"]
    material?: (EnvironmentThings["Product"] | string | URL)[]
    model?: EnvironmentThings["ProductModel"]
    mpn?: string
    nsn?: string
    offers?: (EnvironmentThings["Demand"] | EnvironmentThings["Offer"])[]
    productID?: string
    productionDate?: Date
    purchaseDate?: Date
    releaseDate?: Date
    review?: EnvironmentThings["Review"]
    sku?: string
    slogan?: string
    weight?: EnvironmentThings["QuantitativeValue"]
    width?: EnvironmentThings["Distance"] | EnvironmentThings["QuantitativeValue"]
}

export interface Product extends ProductThing, ProductProperties {
}

declare global {

    interface EnvironmentThings {
        Product: ProductThing | Product
    }

}
