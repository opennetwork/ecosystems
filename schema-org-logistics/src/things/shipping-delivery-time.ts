// https://schema.org/ShippingDeliveryTime
import { Thing } from "./thing"

export interface ShippingDeliveryTimeThing extends Thing<"ShippingDeliveryTime"> {

}

export interface ShippingDeliveryTime extends ShippingDeliveryTimeThing {
    businessDays?: SchemaOrgEnvironmentThings["OpeningHoursSpecification"][]
    cutoffTime?: string
    handlingTime?: SchemaOrgEnvironmentThings["QuantitativeValue"]
    transitTime?: SchemaOrgEnvironmentThings["QuantitativeValue"]
}

declare global {

    interface SchemaOrgEnvironmentThings {
        ShippingDeliveryTime: ShippingDeliveryTimeThing | ShippingDeliveryTime
    }

}
