// https://schema.org/OrderItem
import { Thing } from "./thing"

export interface OrderItemThing extends Thing<"OrderItem"> {

}

export interface OrderItem extends OrderItemThing {
    orderDelivery?: SchemaOrgEnvironmentThings["ParcelDelivery"]
    orderItemNumber?: string
    orderItemStatus?: SchemaOrgEnvironmentThings["OrderStatus"]
    orderQuantity?: number
    orderedItem?: SchemaOrgEnvironmentThings["OrderItem"] | SchemaOrgEnvironmentThings["Product"] | SchemaOrgEnvironmentThings["Service"]
}

declare global {

    interface SchemaOrgEnvironmentThings {
        OrderItem: OrderItemThing | OrderItem
    }

}
