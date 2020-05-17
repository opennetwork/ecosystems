// https://schema.org/OfferShippingDetails
import { Thing } from "./thing"
import { URL } from "whatwg-url"
import { ShippingDeliveryTimeReference } from "./shipping-delivery-time"
import { DefinedRegionReference } from "./defined-region"
import { MonetaryAmountReference } from "./monetary-amount"

export interface OfferShippingDetailsThing extends Thing<"OfferShippingDetails"> {

}

export interface OfferShippingDetailsProperties {
    deliveryTime?: ShippingDeliveryTimeReference
    doesNotShip?: boolean
    shippingDestination?: DefinedRegionReference
    shippingLabel?: string
    shippingRate?: MonetaryAmountReference
    shippingSettingsLink?: URL
    transitTimeLabel?: string
}

export interface OfferShippingDetails extends OfferShippingDetailsThing, OfferShippingDetailsProperties {

}

export type OfferShippingDetailsReference = OfferShippingDetailsThing | OfferShippingDetails

declare global {

    interface SchemaOrgEnvironmentThings {
        OfferShippingDetails: OfferShippingDetailsReference
    }

}
