// https://schema.org/DeliveryEvent
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface DeliveryEventThing extends Thing<"DeliveryEvent"> {

}

export interface DeliveryEvent extends DeliveryEventThing {

}

export type DeliveryEventReference = URL | DeliveryEventThing | DeliveryEvent
