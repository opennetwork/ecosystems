// https://schema.org/ShippingDeliveryTime
import { Thing } from "./thing"

export interface ShippingDeliveryTimeThing extends Thing<"ShippingDeliveryTime"> {

}

export interface ShippingDeliveryTime extends ShippingDeliveryTimeThing {
    businessDays?: EnvironmentThings["OpeningHoursSpecification"][]
    cutoffTime?: string
    handlingTime?: EnvironmentThings["QuantitativeValue"]
    transitTime?: EnvironmentThings["QuantitativeValue"]
}

declare global {

    interface EnvironmentThings {
        ShippingDeliveryTime: ShippingDeliveryTimeThing | ShippingDeliveryTime
    }

}
