// https://schema.org/Brand
import { Thing } from "./thing"

export interface BrandThing extends Thing<"Brand"> {

}

export interface BrandProperties {
    aggregateRating?: SchemaOrgEnvironmentThings["Thing"]
    logo?: SchemaOrgEnvironmentThings["Image"]
    review?: SchemaOrgEnvironmentThings["Review"]
    slogan?: string
}

export interface Brand extends BrandThing, BrandProperties {

}

declare global {

    interface SchemaOrgEnvironmentThings {
        Brand: BrandThing | Brand
    }

}
