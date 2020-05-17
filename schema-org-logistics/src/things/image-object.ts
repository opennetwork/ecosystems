// https://schema.org/ImageObject
import { Thing } from "./thing"
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

declare global {

    interface SchemaOrgEnvironmentThings {
        ImageObject: ImageObjectThing | ImageObject
        Image: ImageObjectReference
    }

}
