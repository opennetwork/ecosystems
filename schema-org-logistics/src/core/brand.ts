// https://schema.org/Brand
import { Thing } from "./thing"

export interface BrandThing extends Thing<"Brand"> {

}

export interface BrandProperties {
    aggregateRating?: EnvironmentThings["Thing"]
    logo?: EnvironmentThings["Image"]
    review?: EnvironmentThings["Review"]
    slogan?: string
}

export interface Brand extends BrandThing, BrandProperties {

}

declare global {

    interface EnvironmentThings {
        Brand: BrandThing | Brand
    }

}
