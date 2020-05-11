// https://schema.org/ImageObject
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface ImageObjectThing extends Thing<"ImageObject"> {

}

export interface ImageObjectProperties {
    caption?: string
    exifData?: string | EnvironmentThings["PropertyValue"][]
    representativeOfPage?: boolean
    thumbnail?: EnvironmentThings["Image"]
}

export interface ImageObject extends ImageObjectThing, ImageObjectProperties {

}

declare global {

    interface EnvironmentThings {
        ImageObject: ImageObjectThing | ImageObject
        Image: URL | ImageObjectThing | ImageObject
    }

}
