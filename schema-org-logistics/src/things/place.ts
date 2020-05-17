// https://schema.org/Place
import { Thing } from "./thing"

export interface PlaceThing extends Thing<"Place"> {

}

export interface PlaceProperties {

}

export interface Place extends PlaceThing, PlaceProperties {

}

export type PlaceReference = PlaceThing | Place

declare global {

    interface SchemaOrgEnvironmentThings {
        Place: PlaceReference
    }

}
