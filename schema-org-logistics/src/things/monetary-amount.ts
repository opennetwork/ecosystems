// https://schema.org/MonetaryAmount
import { Thing, ThingReference } from "./thing"

export interface MonetaryAmountThing extends Thing<"MonetaryAmount"> {

}

export interface MonetaryAmount extends MonetaryAmountThing {
    currency?: string
    maxValue?: number
    minValue?: number
    validFrom?: Date
    validThrough?: Date
    value?: boolean | number | string | ThingReference
}

export type MonetaryAmountReference = MonetaryAmountThing | MonetaryAmount

declare global {

    interface SchemaOrgEnvironmentThings {
        MonetaryAmount: MonetaryAmountReference
    }

}
