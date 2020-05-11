// https://schema.org/ParcelDelivery
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface ParcelDeliveryThing extends Thing<"ParcelDelivery"> {

}

export interface ParcelDelivery extends ParcelDeliveryThing {
    deliveryAddress?: SchemaOrgEnvironmentThings["PostalAddress"]
    deliveryStatus?: SchemaOrgEnvironmentThings["DeliveryEvent"]
    expectedArrivalFrom?: Date
    expectedArrivalUntil?: Date
    hasDeliveryMethod?: SchemaOrgEnvironmentThings["DeliveryMethod"]
    itemShipped?: SchemaOrgEnvironmentThings["Product"]
    partOfOrder?: SchemaOrgEnvironmentThings["Order"]
    provider?: SchemaOrgEnvironmentThings["Party"]
    trackingNumber?: string
    trackingUrl?: URL
}

declare global {

    interface SchemaOrgEnvironmentThings {
        ParcelDelivery: ParcelDeliveryThing | ParcelDelivery
    }

}

