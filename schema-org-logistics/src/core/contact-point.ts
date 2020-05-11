// https://schema.org/ContactPoint
import { Thing } from "./thing"

export interface ContactPointThing extends Thing<"ContactPoint"> {

}

export interface ContactPointProperties {
    areaServed?: EnvironmentThings["Thing"]
    availableLanguage?: string | EnvironmentThings["Thing"]
    contactOption?: EnvironmentThings["ContactPointOption"]
    contactType?: string
    email?: string
    faxNumber?: string
    hoursAvailable?: EnvironmentThings["OpeningHoursSpecification"]
    productSupported?: EnvironmentThings["Product"] | string
    telephone?: string
}

export interface ContactPoint extends ContactPointThing, ContactPointProperties {
}

declare global {

    interface EnvironmentThings {
        ContactPoint: ContactPointThing | ContactPoint
    }

}
