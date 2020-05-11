// https://schema.org/Offer
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface OfferThing extends Thing<"Offer"> {

}

type Region = SchemaOrgEnvironmentThings["GeoShape"] | SchemaOrgEnvironmentThings["Place"] | string

export interface OfferProperties {
    acceptedPaymentMethod?: (SchemaOrgEnvironmentThings["PaymentMethod"] | SchemaOrgEnvironmentThings["LoanOrCredit"])[]
    addOn?: SchemaOrgEnvironmentThings["Offer"]
    advanceBookingRequirement?: SchemaOrgEnvironmentThings["Duration"]
    aggregateRating?: SchemaOrgEnvironmentThings["Thing"]
    areaServed?: SchemaOrgEnvironmentThings["Thing"]
    availability?: SchemaOrgEnvironmentThings["ItemAvailability"]
    availabilityEnds?: Date
    availabilityStarts?: Date
    availableAtOrFrom?: SchemaOrgEnvironmentThings["Place"]
    availableDeliveryMethod?: SchemaOrgEnvironmentThings["DeliveryMethod"]
    businessFunction?: SchemaOrgEnvironmentThings["BusinessFunction"]
    category?: string | URL | SchemaOrgEnvironmentThings["Thing"]
    deliveryLeadTime?: SchemaOrgEnvironmentThings["Thing"]
    eligibleCustomerType?: SchemaOrgEnvironmentThings["Thing"]
    eligibleDuration?: SchemaOrgEnvironmentThings["Thing"]
    eligibleQuantity?: SchemaOrgEnvironmentThings["Thing"]
    eligibleRegion?: Region
    eligibleTransactionVolume?: SchemaOrgEnvironmentThings["Thing"]
    gtin?: string
    gtin8?: string
    gtin12?: string
    gtin14?: string
    includesObject?: SchemaOrgEnvironmentThings["TypeAndQuantityNode"]
    ineligibleRegion?: Region
    inventoryLevel?: SchemaOrgEnvironmentThings["QuantitativeValue"]
    itemCondition?: SchemaOrgEnvironmentThings["OfferItemCondition"]
    itemOffered?: SchemaOrgEnvironmentThings["AggregateOffer"] | SchemaOrgEnvironmentThings["Product"] | SchemaOrgEnvironmentThings["Service"]
    leaseLength?: SchemaOrgEnvironmentThings["QuantitativeValue"] | SchemaOrgEnvironmentThings["Duration"]
    mpn?: string
    offeredBy?: SchemaOrgEnvironmentThings["Party"]
    price?: number | string
    priceCurrency?: string
    priceSpecification?: SchemaOrgEnvironmentThings["Thing"]
    priceValidUntil?: number
    reviews?: SchemaOrgEnvironmentThings["Review"][]
    seller?: SchemaOrgEnvironmentThings["Party"]
    serialNumber?: string
    shippingDetails?: SchemaOrgEnvironmentThings["OfferShippingDetails"]
    sku?: string
    validFrom?: Date
    validThrough?: Date
    warranty?: SchemaOrgEnvironmentThings["WarrantyPromise"]
}

export interface Offer extends OfferThing, OfferProperties {

}

declare global {

    interface SchemaOrgEnvironmentThings {
        Offer: OfferThing | Offer
    }

}
