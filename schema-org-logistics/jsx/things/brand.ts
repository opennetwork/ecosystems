import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing, ThingReference } from "./thing"
import { ImageObjectReference } from "./image-object"
import { ReviewReference } from "./review"

export interface BrandThing extends Thing<"Brand"> {

}

export interface BrandProperties {
    aggregateRating?: ThingReference
    logo?: ImageObjectReference
    review?: ReviewReference
    slogan?: string
}

export interface Brand extends BrandThing, BrandProperties {

}

export type BrandReference = BrandThing | Brand
export const BrandThingSymbol = Symbol("BrandThing");
export type BrandThingToken = TokenVNodeBase<typeof BrandThingSymbol, BrandThing>;
export type BrandThingTokenFn = TokenVNodeFn<typeof BrandThingSymbol, BrandThing>;
export const BrandThing: BrandThingTokenFn = createToken(BrandThingSymbol);export const BrandPropertiesSymbol = Symbol("BrandProperties");
export type BrandPropertiesToken = TokenVNodeBase<typeof BrandPropertiesSymbol, BrandProperties>;
export type BrandPropertiesTokenFn = TokenVNodeFn<typeof BrandPropertiesSymbol, BrandProperties>;
export const BrandProperties: BrandPropertiesTokenFn = createToken(BrandPropertiesSymbol);export const BrandSymbol = Symbol("Brand");
export type BrandToken = TokenVNodeBase<typeof BrandSymbol, Brand>;
export type BrandTokenFn = TokenVNodeFn<typeof BrandSymbol, Brand>;
export const Brand: BrandTokenFn = createToken(BrandSymbol);