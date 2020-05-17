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
    identifier?: string | ThingReference
    sameAs?: URL
    subjectOf?: ThingReference
    mainEntityOfPage?: ThingReference
    image?: ThingReference
    description?: string
    disambiguatingDescription?: string
}

export type ThingReference = Thing | ThingLike | URL

