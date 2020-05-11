// https://schema.org/PropertyValue
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface PropertyValueThing extends Thing<"PropertyValue"> {

}

export interface PropertyValue extends PropertyValueThing {
    measurementTechnique?: URL | string
    minValue?: number
    maxValue?: number
    unitCode?: URL | string
    unitText?: string
    value?: boolean | number | string
    propertyID?: URL | string
    valueReference?: unknown
}

declare global {

    interface SchemaOrgEnvironmentThings {
        PropertyValue: PropertyValueThing | PropertyValue
    }

}


