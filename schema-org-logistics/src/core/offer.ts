// https://schema.org/Offer
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface OfferThing extends Thing<"Offer"> {

}

type Region = EnvironmentThings["GeoShape"] | EnvironmentThings["Place"] | string

export interface OfferProperties {
    acceptedPaymentMethod?: (EnvironmentThings["PaymentMethod"] | EnvironmentThings["LoanOrCredit"])[]
    addOn?: EnvironmentThings["Offer"]
    advanceBookingRequirement?: EnvironmentThings["Duration"]
    aggregateRating?: EnvironmentThings["Thing"]
    areaServed?: EnvironmentThings["Thing"]
    availability?: EnvironmentThings["ItemAvailability"]
    availabilityEnds?: Date
    availabilityStarts?: Date
    availableAtOrFrom?: EnvironmentThings["Place"]
    availableDeliveryMethod?: EnvironmentThings["DeliveryMethod"]
    businessFunction?: EnvironmentThings["BusinessFunction"]
    category?: string | URL | EnvironmentThings["Thing"]
    deliveryLeadTime?: EnvironmentThings["Thing"]
    eligibleCustomerType?: EnvironmentThings["Thing"]
    eligibleDuration?: EnvironmentThings["Thing"]
    eligibleQuantity?: EnvironmentThings["Thing"]
    eligibleRegion?: Region
    eligibleTransactionVolume?: EnvironmentThings["Thing"]
    gtin?: string
    gtin8?: string
    gtin12?: string
    gtin14?: string
    includesObject?: EnvironmentThings["TypeAndQuantityNode"]
    ineligibleRegion?: Region
    inventoryLevel?: EnvironmentThings["QuantitativeValue"]
    itemCondition?: EnvironmentThings["OfferItemCondition"]
    itemOffered?: EnvironmentThings["AggregateOffer"] | EnvironmentThings["Product"] | EnvironmentThings["Service"]
    leaseLength?: EnvironmentThings["QuantitativeValue"] | EnvironmentThings["Duration"]
    mpn?: string
    offeredBy?: EnvironmentThings["Party"]
    price?: number | string
    priceCurrency?: string
    priceSpecification?: EnvironmentThings["Thing"]
    priceValidUntil?: number
    reviews?: EnvironmentThings["Review"][]
    seller?: EnvironmentThings["Party"]
    serialNumber?: string
    shippingDetails?: EnvironmentThings["OfferShippingDetails"]
    sku?: string
    validFrom?: Date
    validThrough?: Date
    warranty?: EnvironmentThings["WarrantyPromise"]
}

export interface Offer extends OfferThing, OfferProperties {

}

declare global {

    interface EnvironmentThings {
        Offer: OfferThing | Offer
    }

}
