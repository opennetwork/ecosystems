// https://schema.org/Offer
import { Thing, ThingReference } from "./thing"
import { GeoShapeReference } from "./geo-shape"
import { PlaceReference } from "./place"
import { PaymentMethodReference } from "./payment-method"
import { LoanOrCreditReference } from "./loan-or-credit"
import { Duration } from "./duration"
import { BusinessFunctionReference } from "./business-function"
import { ItemAvailabilityReference } from "./item-availability"
import { DeliveryMethodReference } from "./delivery-method"
import { TypeAndQuantityNodeReference } from "./type-and-quantity-node"
import { QuantitativeValueReference } from "./quantitative-value"
import { OfferItemConditionReference } from "./offer-item-condition"
import { AggregateOfferReference } from "./aggregate-offer"
import { ProductReference } from "./product"
import { ServiceReference } from "./service"
import { PartyReference } from "./party"
import { WarrantyPromiseReference } from "./warranty-promise"
import { OfferShippingDetailsReference } from "./offer-shipping-details"
import { ReviewReference } from "./review"

export interface OfferThing extends Thing<"Offer"> {

}

type Region = GeoShapeReference | PlaceReference | string

export interface OfferProperties {
    acceptedPaymentMethod?: (PaymentMethodReference | LoanOrCreditReference)[]
    addOn?: OfferReference
    advanceBookingRequirement?: Duration
    aggregateRating?: ThingReference
    areaServed?: ThingReference
    availability?: ItemAvailabilityReference
    availabilityEnds?: Date
    availabilityStarts?: Date
    availableAtOrFrom?: PlaceReference
    availableDeliveryMethod?: DeliveryMethodReference
    businessFunction?: BusinessFunctionReference
    category?: string | ThingReference
    deliveryLeadTime?: ThingReference
    eligibleCustomerType?: ThingReference
    eligibleDuration?: ThingReference
    eligibleQuantity?: ThingReference
    eligibleRegion?: Region
    eligibleTransactionVolume?: ThingReference
    gtin?: string
    gtin8?: string
    gtin12?: string
    gtin14?: string
    includesObject?: TypeAndQuantityNodeReference
    ineligibleRegion?: Region
    inventoryLevel?: QuantitativeValueReference
    itemCondition?: OfferItemConditionReference
    itemOffered?: AggregateOfferReference | ProductReference | ServiceReference
    leaseLength?: QuantitativeValueReference | Duration
    mpn?: string
    offeredBy?: PartyReference
    price?: number | string
    priceCurrency?: string
    priceSpecification?: ThingReference
    priceValidUntil?: number
    reviews?: ReviewReference[]
    seller?: PartyReference
    serialNumber?: string
    shippingDetails?: OfferShippingDetailsReference
    sku?: string
    validFrom?: Date
    validThrough?: Date
    warranty?: WarrantyPromiseReference
}

export interface Offer extends OfferThing, OfferProperties {

}

export type OfferReference = OfferThing | Offer
