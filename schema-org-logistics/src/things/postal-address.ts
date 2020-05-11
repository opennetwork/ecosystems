// https://schema.org/PostalAddress
import { Thing } from "./thing"
import { ContactPointProperties } from "./contact-point"

export interface PostalAddressThing extends Thing<"PostalAddress"> {

}

export interface PostalAddress extends PostalAddressThing, ContactPointProperties {
    addressCountry?: string | SchemaOrgEnvironmentThings["Country"]
    addressLocality?: string
    addressRegion?: string
    postOfficeBoxNumber?: string
    postalCode?: string
    streetAddress?: string
}

declare global {

    interface SchemaOrgEnvironmentThings {
        PostalAddress: PostalAddressThing | PostalAddress
    }

}
