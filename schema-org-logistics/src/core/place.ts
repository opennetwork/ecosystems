// https://schema.org/Place
import { Thing } from "./thing"

export interface PlaceThing extends Thing<"Place"> {

}

export interface PlaceProperties {

}

export interface Place extends PlaceThing, PlaceProperties {

}

declare global {

    interface EnvironmentThings {
        Place: PlaceThing | Place
    }

}
