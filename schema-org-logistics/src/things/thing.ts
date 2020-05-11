// https://schema.org/Thing
import { URL } from "whatwg-url"

export interface ThingLike {
    "@context"?: string
    "@type": string
}

export interface Thing<Type extends string = string, Context extends string = "http://schema.org"> extends ThingLike {
    "@context"?: Context
    "@type": Type
    url?: URL
    name?: string
    additionalType?: URL
    alternateName?: string
    identifier?: URL | string | Thing
    sameAs?: URL
    subjectOf?: Thing
    mainEntityOfPage?: URL | Thing
    image?: Thing | URL
    description?: string
    disambiguatingDescription?: string
}

declare global {

    interface SchemaOrgEnvironmentThings {
        Thing: Thing | ThingLike | URL
    }

}
