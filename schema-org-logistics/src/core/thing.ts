// https://schema.org/Thing
import { URL } from "whatwg-url"

export interface ThingLike {
    "@context"?: string
    "@type": string
}

export interface Thing<Type extends (keyof EnvironmentThings & string) = (keyof EnvironmentThings & string), Context extends string = string> extends ThingLike {
    "@context"?: Context
    "@type": Type,
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

    interface EnvironmentThings {
        Thing: Thing | ThingLike | URL
    }

}
