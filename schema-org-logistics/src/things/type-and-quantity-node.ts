// https://schema.org/TypeAndQuantityNode
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface TypeAndQuantityNodeThing extends Thing<"TypeAndQuantityNode"> {

}

export interface TypeAndQuantityNode extends TypeAndQuantityNodeThing {
    amountOfThisGood?: number
    businessFunction?: SchemaOrgEnvironmentThings["BusinessFunction"]
    typeOfGood?: SchemaOrgEnvironmentThings["Service"] | SchemaOrgEnvironmentThings["Product"]
    unitCode?: string | URL
    unitText?: string
}

declare global {

    interface SchemaOrgEnvironmentThings {
        TypeAndQuantityNode: TypeAndQuantityNodeThing | TypeAndQuantityNode
    }

}
