// https://schema.org/OfferItemCondition
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface OfferItemConditionThing extends Thing<"OfferItemCondition"> {

}

export interface OfferItemCondition extends OfferItemConditionThing {

}

export type OfferItemConditionReference = URL | OfferItemConditionThing | OfferItemCondition

declare global {

    interface SchemaOrgEnvironmentThings {
        OfferItemCondition: OfferItemConditionReference
    }

}
