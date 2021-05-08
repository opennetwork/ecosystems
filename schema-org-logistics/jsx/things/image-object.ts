import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing } from "./thing"
import { URL } from "whatwg-url"
import { PropertyValueReference } from "./property-value"

export interface ImageObjectThing extends Thing<"ImageObject"> {

}

export interface ImageObjectProperties {
    caption?: string
    exifData?: (string | PropertyValueReference)[]
    representativeOfPage?: boolean
    thumbnail?: ImageObjectReference
}

export interface ImageObject extends ImageObjectThing, ImageObjectProperties {

}

export type ImageObjectReference = URL | ImageObjectThing | ImageObject

export const ImageObjectThingSymbol = Symbol("ImageObjectThing");
export type ImageObjectThingToken = TokenVNodeBase<typeof ImageObjectThingSymbol, ImageObjectThing>;
export type ImageObjectThingTokenFn = TokenVNodeFn<typeof ImageObjectThingSymbol, ImageObjectThing>;
export const ImageObjectThing: ImageObjectThingTokenFn = createToken(ImageObjectThingSymbol);export const ImageObjectPropertiesSymbol = Symbol("ImageObjectProperties");
export type ImageObjectPropertiesToken = TokenVNodeBase<typeof ImageObjectPropertiesSymbol, ImageObjectProperties>;
export type ImageObjectPropertiesTokenFn = TokenVNodeFn<typeof ImageObjectPropertiesSymbol, ImageObjectProperties>;
export const ImageObjectProperties: ImageObjectPropertiesTokenFn = createToken(ImageObjectPropertiesSymbol);export const ImageObjectSymbol = Symbol("ImageObject");
export type ImageObjectToken = TokenVNodeBase<typeof ImageObjectSymbol, ImageObject>;
export type ImageObjectTokenFn = TokenVNodeFn<typeof ImageObjectSymbol, ImageObject>;
export const ImageObject: ImageObjectTokenFn = createToken(ImageObjectSymbol);