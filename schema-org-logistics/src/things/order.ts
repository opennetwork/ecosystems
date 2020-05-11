// https://schema.org/Order
import { Thing } from "./thing"

export interface OrderThing extends Thing<"Order"> {

}

export interface Order extends OrderThing {
    acceptedOffer?: SchemaOrgEnvironmentThings["Offer"] | SchemaOrgEnvironmentThings["AggregateOffer"]
    broker?: SchemaOrgEnvironmentThings["Party"]
    confirmationNumber?: string
    customer?: SchemaOrgEnvironmentThings["Party"]
    discount?: string
    discountCode?: string
    isGift?: boolean
    orderDate: Date
    orderDelivery?: SchemaOrgEnvironmentThings["ParcelDelivery"]
    orderNumber: string
    orderStatus: SchemaOrgEnvironmentThings["OrderStatus"]
    orderedItem: SchemaOrgEnvironmentThings["OrderItem"][]
    billingAddress?: SchemaOrgEnvironmentThings["PostalAddress"]
    partOfInvoice?: SchemaOrgEnvironmentThings["Invoice"]
}

declare global {

    interface SchemaOrgEnvironmentThings {
        Order: OrderThing | Order
    }

}
