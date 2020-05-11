// https://schema.org/DeliveryEvent
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface DeliveryEventThing extends Thing<"DeliveryEvent"> {

}

export interface DeliveryEvent extends DeliveryEventThing {

}

declare global {

    interface EnvironmentThings {
        DeliveryEvent: URL | DeliveryEventThing | DeliveryEvent
    }

}
