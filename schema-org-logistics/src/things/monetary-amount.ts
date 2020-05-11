// https://schema.org/MonetaryAmount
import { Thing } from "./thing"

export interface MonetaryAmountThing extends Thing<"MonetaryAmount"> {

}

export interface MonetaryAmount extends MonetaryAmountThing {
    currency?: string
    maxValue?: number
    minValue?: number
    validFrom?: Date
    validThrough?: Date
    value?: boolean | number | string | SchemaOrgEnvironmentThings["Thing"]
}

declare global {

    interface SchemaOrgEnvironmentThings {
        MonetaryAmount: MonetaryAmountThing | MonetaryAmount
    }

}
