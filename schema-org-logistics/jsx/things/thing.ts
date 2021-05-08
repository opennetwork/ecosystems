import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { URL } from "whatwg-url"

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

export const ThingLikeSymbol = Symbol("ThingLike");
export type ThingLikeToken = TokenVNodeBase<typeof ThingLikeSymbol, ThingLike>;
export type ThingLikeTokenFn = TokenVNodeFn<typeof ThingLikeSymbol, ThingLike>;
export const ThingLike: ThingLikeTokenFn = createToken(ThingLikeSymbol);export const ThingSymbol = Symbol("Thing");
export type ThingToken = TokenVNodeBase<typeof ThingSymbol, Thing>;
export type ThingTokenFn = TokenVNodeFn<typeof ThingSymbol, Thing>;
export const Thing: ThingTokenFn = createToken(ThingSymbol);