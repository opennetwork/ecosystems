// https://schema.org/DeliveryMethod
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface DeliveryMethodThing extends Thing<"DeliveryMethod"> {

}

export interface DeliveryMethod extends DeliveryMethodThing {

}

export type DeliveryMethodReference = URL | DeliveryMethodThing | DeliveryMethod

declare global {

    interface SchemaOrgEnvironmentThings {
        DeliveryMethod: DeliveryMethodReference
    }

}
