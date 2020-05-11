// https://schema.org/Order
import { Thing } from "./thing"

export interface OrderThing extends Thing<"Order"> {

}

export interface Order extends OrderThing {
    acceptedOffer?: EnvironmentThings["Offer"] | EnvironmentThings["AggregateOffer"]
    broker?: EnvironmentThings["Party"]
    confirmationNumber?: string
    customer?: EnvironmentThings["Party"]
    discount?: string
    discountCode?: string
    isGift?: boolean
    orderDate: Date
    orderDelivery?: EnvironmentThings["ParcelDelivery"]
    orderNumber: string
    orderStatus: EnvironmentThings["OrderStatus"]
    orderedItem: EnvironmentThings["OrderItem"][]
    billingAddress?: EnvironmentThings["PostalAddress"]
    partOfInvoice?: EnvironmentThings["Invoice"]
}

declare global {

    interface EnvironmentThings {
        Order: OrderThing | Order
    }

}
