// https://schema.org/Brand
import { Thing, ThingReference } from "./thing"
import { ImageObjectReference } from "./image-object"
import { ReviewReference } from "./review"

export interface BrandThing extends Thing<"Brand"> {

}

export interface BrandProperties {
    aggregateRating?: ThingReference
    logo?: ImageObjectReference
    review?: ReviewReference
    slogan?: string
}

export interface Brand extends BrandThing, BrandProperties {

}

export type BrandReference = BrandThing | Brand

declare global {

    interface SchemaOrgEnvironmentThings {
        Brand: BrandReference
    }

}
