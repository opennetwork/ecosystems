// https://schema.org/ImageObject
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface ImageObjectThing extends Thing<"ImageObject"> {

}

export interface ImageObjectProperties {
    caption?: string
    exifData?: string | SchemaOrgEnvironmentThings["PropertyValue"][]
    representativeOfPage?: boolean
    thumbnail?: SchemaOrgEnvironmentThings["Image"]
}

export interface ImageObject extends ImageObjectThing, ImageObjectProperties {

}

declare global {

    interface SchemaOrgEnvironmentThings {
        ImageObject: ImageObjectThing | ImageObject
        Image: URL | ImageObjectThing | ImageObject
    }

}
