// https://schema.org/Service
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface ServiceThing extends Thing<"Service"> {

}

export interface ServiceProperties {
    aggregateRating?: SchemaOrgEnvironmentThings["Thing"]
    audience?: SchemaOrgEnvironmentThings["Audience"]
    awards?: string[]
    brand?: SchemaOrgEnvironmentThings["Brand"] | SchemaOrgEnvironmentThings["Organization"]
    broker?: SchemaOrgEnvironmentThings["Party"]
    category?: (URL | string | SchemaOrgEnvironmentThings["Thing"])[]
    hasOfferCatalog?: SchemaOrgEnvironmentThings["OfferCatalog"]
    hoursAvailable?: SchemaOrgEnvironmentThings["OpeningHoursSpecification"][]
    isRelatedTo?: (SchemaOrgEnvironmentThings["Product"] | SchemaOrgEnvironmentThings["Service"])[]
    isSimilarTo?: (SchemaOrgEnvironmentThings["Product"] | SchemaOrgEnvironmentThings["Service"])[]
    logo?: SchemaOrgEnvironmentThings["Image"]
    offers?: (SchemaOrgEnvironmentThings["Demand"] | SchemaOrgEnvironmentThings["Offer"])[]
    provider?: SchemaOrgEnvironmentThings["Party"]
    providerMobility?: string
    review?: SchemaOrgEnvironmentThings["Review"]
    serviceOutput?: SchemaOrgEnvironmentThings["Thing"]
    slogan?: string
    termsOfService?: string | URL
}

export interface Service extends ServiceThing, ServiceProperties {

}

declare global {

    interface SchemaOrgEnvironmentThings {
        Service: ServiceThing | Service
    }

}
