// https://schema.org/OfferShippingDetails
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface OfferShippingDetailsThing extends Thing<"OfferShippingDetails"> {

}

export interface OfferShippingDetailsProperties {
    deliveryTime?: SchemaOrgEnvironmentThings["ShippingDeliveryTime"]
    doesNotShip?: boolean
    shippingDestination?: SchemaOrgEnvironmentThings["DefinedRegion"]
    shippingLabel?: string
    shippingRate?: SchemaOrgEnvironmentThings["MonetaryAmount"]
    shippingSettingsLink?: URL
    transitTimeLabel?: string
}

export interface OfferShippingDetails extends OfferShippingDetailsThing, OfferShippingDetailsProperties {

}

declare global {

    interface SchemaOrgEnvironmentThings {
        OfferShippingDetails: OfferShippingDetailsThing | OfferShippingDetails
    }

}
