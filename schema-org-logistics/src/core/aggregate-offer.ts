// https://schema.org/AggregateOffer
import { Thing } from "./thing"

export interface AggregateOfferThing extends Thing<"AggregateOffer"> {

}

export interface AggregateOffer extends AggregateOfferThing {
    offers?: EnvironmentThings["Offer"][]
}

declare global {

    interface EnvironmentThings {
        AggregateOffer: AggregateOfferThing | AggregateOffer
    }

}
