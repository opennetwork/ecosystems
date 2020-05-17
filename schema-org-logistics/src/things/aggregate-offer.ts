// https://schema.org/AggregateOffer
import { Thing } from "./thing"
import { OfferReference } from "./offer"

export interface AggregateOfferThing extends Thing<"AggregateOffer"> {

}

export interface AggregateOffer extends AggregateOfferThing {
    offers?: OfferReference[]
}

export type AggregateOfferReference = AggregateOfferThing | AggregateOffer
