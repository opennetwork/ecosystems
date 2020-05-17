// https://schema.org/PaymentMethod
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface PaymentMethodThing extends Thing<"PaymentMethod"> {

}

export interface PaymentMethod extends PaymentMethodThing {

}

export type PaymentMethodReference = URL | PaymentMethodThing | PaymentMethod

declare global {

    interface SchemaOrgEnvironmentThings {
        PaymentMethod: PaymentMethodReference
    }

}
