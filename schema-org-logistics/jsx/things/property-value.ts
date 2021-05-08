import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing } from "./thing"
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

export type PropertyValueReference = PropertyValueThing | PropertyValue


export const PropertyValueThingSymbol = Symbol("PropertyValueThing");
export type PropertyValueThingToken = TokenVNodeBase<typeof PropertyValueThingSymbol, PropertyValueThing>;
export type PropertyValueThingTokenFn = TokenVNodeFn<typeof PropertyValueThingSymbol, PropertyValueThing>;
export const PropertyValueThing: PropertyValueThingTokenFn = createToken(PropertyValueThingSymbol);export const PropertyValueSymbol = Symbol("PropertyValue");
export type PropertyValueToken = TokenVNodeBase<typeof PropertyValueSymbol, PropertyValue>;
export type PropertyValueTokenFn = TokenVNodeFn<typeof PropertyValueSymbol, PropertyValue>;
export const PropertyValue: PropertyValueTokenFn = createToken(PropertyValueSymbol);