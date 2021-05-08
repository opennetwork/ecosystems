import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";
import { Thing } from "./thing"
import { OfferReference } from "./offer"

export interface AggregateOfferThing extends Thing<"AggregateOffer"> {

}

export interface AggregateOffer extends AggregateOfferThing {
    offers?: OfferReference[]
}

export type AggregateOfferReference = AggregateOfferThing | AggregateOffer

export const AggregateOfferThingSymbol = Symbol("AggregateOfferThing");
export type AggregateOfferThingToken = TokenVNodeBase<typeof AggregateOfferThingSymbol, AggregateOfferThing>;
export type AggregateOfferThingTokenFn = TokenVNodeFn<typeof AggregateOfferThingSymbol, AggregateOfferThing>;
export const AggregateOfferThing: AggregateOfferThingTokenFn = createToken(AggregateOfferThingSymbol);
export const AggregateOfferSymbol = Symbol("AggregateOffer");
export type AggregateOfferToken = TokenVNodeBase<typeof AggregateOfferSymbol, AggregateOffer>;
export type AggregateOfferTokenFn = TokenVNodeFn<typeof AggregateOfferSymbol, AggregateOffer>;
export const AggregateOffer: AggregateOfferTokenFn = createToken(AggregateOfferSymbol);
