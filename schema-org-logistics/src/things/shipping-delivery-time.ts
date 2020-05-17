// https://schema.org/ShippingDeliveryTime
import { Thing } from "./thing"
import { QuantitativeValueReference } from "./quantitative-value"
import { OpeningHoursSpecificationReference } from "./opening-hours-specification"

export interface ShippingDeliveryTimeThing extends Thing<"ShippingDeliveryTime"> {

}

export interface ShippingDeliveryTime extends ShippingDeliveryTimeThing {
    businessDays?: OpeningHoursSpecificationReference[]
    cutoffTime?: string
    handlingTime?: QuantitativeValueReference
    transitTime?: QuantitativeValueReference
}

export type ShippingDeliveryTimeReference = ShippingDeliveryTimeThing | ShippingDeliveryTime

