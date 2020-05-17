// https://schema.org/Service
import { Thing, ThingReference } from "./thing"
import { URL } from "whatwg-url"
import { AudienceReference } from "./audience"
import { BrandReference } from "./brand"
import { OrganizationReference } from "./organization"
import { ProductReference } from "./product"
import { ImageObjectReference } from "./image-object"
import { DemandReference } from "./demand"
import { OfferReference } from "./offer"
import { PartyReference } from "./party"
import { ReviewReference } from "./review"
import { OpeningHoursSpecificationReference } from "./opening-hours-specification"
import { OfferCatalogReference } from "./offer-catalog"

export interface ServiceThing extends Thing<"Service"> {

}

export interface ServiceProperties {
    aggregateRating?: ThingReference
    audience?: AudienceReference
    awards?: string[]
    brand?: BrandReference | OrganizationReference
    broker?: PartyReference
    category?: (URL | string | ThingReference)[]
    hasOfferCatalog?: OfferCatalogReference
    hoursAvailable?: OpeningHoursSpecificationReference[]
    isRelatedTo?: (ProductReference | ServiceReference)[]
    isSimilarTo?: (ProductReference | ServiceReference)[]
    logo?: ImageObjectReference
    offers?: (DemandReference | OfferReference)[]
    provider?: PartyReference
    providerMobility?: string
    review?: ReviewReference
    serviceOutput?: ThingReference
    slogan?: string
    termsOfService?: string | URL
}

export interface Service extends ServiceThing, ServiceProperties {

}

export type ServiceReference = ServiceThing | Service

