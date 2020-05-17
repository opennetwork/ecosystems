// https://schema.org/TypeAndQuantityNode
import { Thing } from "./thing"
import { URL } from "whatwg-url"
import { ServiceReference } from "./service"
import { ProductReference } from "./product"
import { BusinessFunctionReference } from "./business-function"

export interface TypeAndQuantityNodeThing extends Thing<"TypeAndQuantityNode"> {

}

export interface TypeAndQuantityNode extends TypeAndQuantityNodeThing {
    amountOfThisGood?: number
    businessFunction?: BusinessFunctionReference
    typeOfGood?: ServiceReference | ProductReference
    unitCode?: string | URL
    unitText?: string
}

export type TypeAndQuantityNodeReference = TypeAndQuantityNodeThing | TypeAndQuantityNode

declare global {

    interface SchemaOrgEnvironmentThings {
        TypeAndQuantityNode: TypeAndQuantityNodeReference
    }

}
