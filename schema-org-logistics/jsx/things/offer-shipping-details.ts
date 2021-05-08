import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing } from "./thing"
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
export const OfferShippingDetailsThingSymbol = Symbol("OfferShippingDetailsThing");
export type OfferShippingDetailsThingToken = TokenVNodeBase<typeof OfferShippingDetailsThingSymbol, OfferShippingDetailsThing>;
export type OfferShippingDetailsThingTokenFn = TokenVNodeFn<typeof OfferShippingDetailsThingSymbol, OfferShippingDetailsThing>;
export const OfferShippingDetailsThing: OfferShippingDetailsThingTokenFn = createToken(OfferShippingDetailsThingSymbol);export const OfferShippingDetailsPropertiesSymbol = Symbol("OfferShippingDetailsProperties");
export type OfferShippingDetailsPropertiesToken = TokenVNodeBase<typeof OfferShippingDetailsPropertiesSymbol, OfferShippingDetailsProperties>;
export type OfferShippingDetailsPropertiesTokenFn = TokenVNodeFn<typeof OfferShippingDetailsPropertiesSymbol, OfferShippingDetailsProperties>;
export const OfferShippingDetailsProperties: OfferShippingDetailsPropertiesTokenFn = createToken(OfferShippingDetailsPropertiesSymbol);export const OfferShippingDetailsSymbol = Symbol("OfferShippingDetails");
export type OfferShippingDetailsToken = TokenVNodeBase<typeof OfferShippingDetailsSymbol, OfferShippingDetails>;
export type OfferShippingDetailsTokenFn = TokenVNodeFn<typeof OfferShippingDetailsSymbol, OfferShippingDetails>;
export const OfferShippingDetails: OfferShippingDetailsTokenFn = createToken(OfferShippingDetailsSymbol);