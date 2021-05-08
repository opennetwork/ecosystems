import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";
import { Thing } from "./thing"
import { URL } from "whatwg-url"
import { PostalAddressReference } from "./postal-address"
import { DeliveryEventReference } from "./delivery-event"
import { DeliveryMethodReference } from "./delivery-method"
import { ProductReference } from "./product"
import { OrderReference } from "./order"
import { PartyReference } from "./party"

export interface ParcelDeliveryThing extends Thing<"ParcelDelivery"> {

}

export interface ParcelDelivery extends ParcelDeliveryThing {
    deliveryAddress?: PostalAddressReference
    deliveryStatus?: DeliveryEventReference
    expectedArrivalFrom?: Date
    expectedArrivalUntil?: Date
    hasDeliveryMethod?: DeliveryMethodReference
    itemShipped?: ProductReference
    partOfOrder?: OrderReference
    provider?: PartyReference
    trackingNumber?: string
    trackingUrl?: URL
}

export type ParcelDeliveryReference = ParcelDelivery


export const ParcelDeliveryThingSymbol = Symbol("ParcelDeliveryThing");
export type ParcelDeliveryThingToken = TokenVNodeBase<typeof ParcelDeliveryThingSymbol, ParcelDeliveryThing>;
export type ParcelDeliveryThingTokenFn = TokenVNodeFn<typeof ParcelDeliveryThingSymbol, ParcelDeliveryThing>;
export const ParcelDeliveryThing: ParcelDeliveryThingTokenFn = createToken(ParcelDeliveryThingSymbol);
export const ParcelDeliverySymbol = Symbol("ParcelDelivery");
export type ParcelDeliveryToken = TokenVNodeBase<typeof ParcelDeliverySymbol, ParcelDelivery>;
export type ParcelDeliveryTokenFn = TokenVNodeFn<typeof ParcelDeliverySymbol, ParcelDelivery>;
export const ParcelDelivery: ParcelDeliveryTokenFn = createToken(ParcelDeliverySymbol);
