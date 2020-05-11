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
    value?: boolean | number | string | EnvironmentThings["Thing"]
}

declare global {

    interface EnvironmentThings {
        MonetaryAmount: MonetaryAmountThing | MonetaryAmount
    }

}
