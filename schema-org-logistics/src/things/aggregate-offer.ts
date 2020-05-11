// https://schema.org/AggregateOffer
import { Thing } from "./thing"

export interface AggregateOfferThing extends Thing<"AggregateOffer"> {

}

export interface AggregateOffer extends AggregateOfferThing {
    offers?: SchemaOrgEnvironmentThings["Offer"][]
}

declare global {

    interface SchemaOrgEnvironmentThings {
        AggregateOffer: AggregateOfferThing | AggregateOffer
    }

}
