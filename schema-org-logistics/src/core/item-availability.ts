// https://schema.org/ItemAvailability
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface ItemAvailabilityThing extends Thing<"ItemAvailability"> {

}

export interface ItemAvailabilityProperties {

}

export interface ItemAvailability extends ItemAvailabilityThing, ItemAvailabilityProperties {

}

declare global {

    interface EnvironmentThings {
        ItemAvailability: URL | ItemAvailabilityThing | ItemAvailability
    }

}
