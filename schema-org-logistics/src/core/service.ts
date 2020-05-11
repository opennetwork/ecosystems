// https://schema.org/Service
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface ServiceThing extends Thing<"Service"> {

}

export interface ServiceProperties {
    aggregateRating?: EnvironmentThings["Thing"]
    audience?: EnvironmentThings["Audience"]
    awards?: string[]
    brand?: EnvironmentThings["Brand"] | EnvironmentThings["Organization"]
    broker?: EnvironmentThings["Party"]
    category?: (URL | string | EnvironmentThings["Thing"])[]
    hasOfferCatalog?: EnvironmentThings["Thing"]
    hoursAvailable?: EnvironmentThings["OpeningHoursSpecification"][]
    isRelatedTo?: (EnvironmentThings["Product"] | EnvironmentThings["Service"])[]
    isSimilarTo?: (EnvironmentThings["Product"] | EnvironmentThings["Service"])[]
    logo?: EnvironmentThings["Image"]
    offers?: (EnvironmentThings["Demand"] | EnvironmentThings["Offer"])[]
    provider?: EnvironmentThings["Party"]
    providerMobility?: string
    review?: EnvironmentThings["Review"]
    serviceOutput?: EnvironmentThings["Thing"]
    slogan?: string
    termsOfService?: string | URL
}

export interface Service extends ServiceThing, ServiceProperties {

}

declare global {

    interface EnvironmentThings {
        Service: ServiceThing | Service
    }

}
