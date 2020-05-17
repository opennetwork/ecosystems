// https://schema.org/OrderItem
import { Thing } from "./thing"
import { ParcelDeliveryReference } from "./parcel-delivery"
import { OrderStatusReference } from "./order-status"
import { ProductReference } from "./product"
import { ServiceReference } from "./service"

export interface OrderItemThing extends Thing<"OrderItem"> {

}

export interface OrderItem extends OrderItemThing {
    orderDelivery?: ParcelDeliveryReference
    orderItemNumber?: string
    orderItemStatus?: OrderStatusReference
    orderQuantity?: number
    orderedItem?: OrderItemReference | ProductReference | ServiceReference
}

export type OrderItemReference = OrderItemThing | OrderItem

declare global {

    interface SchemaOrgEnvironmentThings {
        OrderItem: OrderItemReference
    }

}
