// https://schema.org/TypeAndQuantityNode
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface TypeAndQuantityNodeThing extends Thing<"TypeAndQuantityNode"> {

}

export interface TypeAndQuantityNode extends TypeAndQuantityNodeThing {
    amountOfThisGood?: number
    businessFunction?: EnvironmentThings["BusinessFunction"]
    typeOfGood?: EnvironmentThings["Service"] | EnvironmentThings["Product"]
    unitCode?: string | URL
    unitText?: string
}

declare global {

    interface EnvironmentThings {
        TypeAndQuantityNode: TypeAndQuantityNodeThing | TypeAndQuantityNode
    }

}
