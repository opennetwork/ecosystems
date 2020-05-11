// https://schema.org/ContactPoint
import { Thing } from "./thing"

export interface ContactPointThing extends Thing<"ContactPoint"> {

}

export interface ContactPointProperties {
    areaServed?: SchemaOrgEnvironmentThings["Thing"]
    availableLanguage?: string | SchemaOrgEnvironmentThings["Thing"]
    contactOption?: SchemaOrgEnvironmentThings["ContactPointOption"]
    contactType?: string
    email?: string
    faxNumber?: string
    hoursAvailable?: SchemaOrgEnvironmentThings["OpeningHoursSpecification"]
    productSupported?: SchemaOrgEnvironmentThings["Product"] | string
    telephone?: string
}

export interface ContactPoint extends ContactPointThing, ContactPointProperties {
}

declare global {

    interface SchemaOrgEnvironmentThings {
        ContactPoint: ContactPointThing | ContactPoint
    }

}
