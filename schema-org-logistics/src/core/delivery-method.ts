// https://schema.org/DeliveryMethod
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface DeliveryMethodThing extends Thing<"DeliveryMethod"> {

}

export interface DeliveryMethod extends DeliveryMethodThing {

}

declare global {

    interface EnvironmentThings {
        DeliveryMethod: URL | DeliveryMethodThing | DeliveryMethod
    }

}
