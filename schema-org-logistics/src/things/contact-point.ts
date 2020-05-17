// https://schema.org/ContactPoint
import { Thing, ThingReference } from "./thing"
import { ContactPointOptionReference } from "./contact-point-option"
import { OpeningHoursSpecificationReference } from "./opening-hours-specification"
import { ProductReference } from "./product"

export interface ContactPointThing extends Thing<"ContactPoint"> {

}

export interface ContactPointProperties {
    areaServed?: ThingReference
    availableLanguage?: string | ThingReference
    contactOption?: ContactPointOptionReference
    contactType?: string
    email?: string
    faxNumber?: string
    hoursAvailable?: OpeningHoursSpecificationReference
    productSupported?: ProductReference | string
    telephone?: string
}

export interface ContactPoint extends ContactPointThing, ContactPointProperties {
}

export type ContactPointReference = ContactPointThing | ContactPoint

