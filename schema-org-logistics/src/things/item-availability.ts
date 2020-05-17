// https://schema.org/ItemAvailability
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface ItemAvailabilityThing extends Thing<"ItemAvailability"> {

}

export interface ItemAvailabilityProperties {

}

export interface ItemAvailability extends ItemAvailabilityThing, ItemAvailabilityProperties {

}

export type ItemAvailabilityReference = URL | ItemAvailabilityThing | ItemAvailability

declare global {

    interface SchemaOrgEnvironmentThings {
        ItemAvailability: ItemAvailabilityReference
    }

}
