// https://schema.org/PostalAddress
import { Thing } from "./thing"
import { ContactPointProperties } from "./contact-point"
import { CountryReference } from "./country"

export interface PostalAddressThing extends Thing<"PostalAddress"> {

}

export interface PostalAddress extends PostalAddressThing, ContactPointProperties {
    addressCountry?: string | CountryReference
    addressLocality?: string
    addressRegion?: string
    postOfficeBoxNumber?: string
    postalCode?: string
    streetAddress?: string
}

export type PostalAddressReference = PostalAddressThing | PostalAddress
