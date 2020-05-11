// https://schema.org/OfferItemCondition
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface OfferItemConditionThing extends Thing<"OfferItemCondition"> {

}

export interface OfferItemCondition extends OfferItemConditionThing {

}

declare global {

    interface EnvironmentThings {
        OfferItemCondition: URL | OfferItemConditionThing | OfferItemCondition
    }

}
