// https://schema.org/ParcelDelivery
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface ParcelDeliveryThing extends Thing<"ParcelDelivery"> {

}

export interface ParcelDelivery extends ParcelDeliveryThing {
    deliveryAddress?: EnvironmentThings["PostalAddress"]
    deliveryStatus?: EnvironmentThings["DeliveryEvent"]
    expectedArrivalFrom?: Date
    expectedArrivalUntil?: Date
    hasDeliveryMethod?: EnvironmentThings["DeliveryMethod"]
    itemShipped?: EnvironmentThings["Product"]
    partOfOrder?: EnvironmentThings["Order"]
    provider?: EnvironmentThings["Party"]
    trackingNumber?: string
    trackingUrl?: URL
}

declare global {

    interface EnvironmentThings {
        ParcelDelivery: ParcelDeliveryThing | ParcelDelivery
    }

}

