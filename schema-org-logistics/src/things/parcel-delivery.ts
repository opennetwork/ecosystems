// https://schema.org/ParcelDelivery
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

