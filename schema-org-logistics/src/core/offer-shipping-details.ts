// https://schema.org/OfferShippingDetails
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface OfferShippingDetailsThing extends Thing<"OfferShippingDetails"> {

}

export interface OfferShippingDetailsProperties {
    deliveryTime?: EnvironmentThings["ShippingDeliveryTime"]
    doesNotShip?: boolean
    shippingDestination?: EnvironmentThings["DefinedRegion"]
    shippingLabel?: string
    shippingRate?: EnvironmentThings["MonetaryAmount"]
    shippingSettingsLink?: URL
    transitTimeLabel?: string
}

export interface OfferShippingDetails extends OfferShippingDetailsThing, OfferShippingDetailsProperties {

}

declare global {

    interface EnvironmentThings {
        OfferShippingDetails: OfferShippingDetailsThing | OfferShippingDetails
    }

}
