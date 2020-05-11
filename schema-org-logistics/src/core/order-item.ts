// https://schema.org/OrderItem
import { Thing } from "./thing"

export interface OrderItemThing extends Thing<"OrderItem"> {

}

export interface OrderItem extends OrderItemThing {
    orderDelivery?: EnvironmentThings["ParcelDelivery"]
    orderItemNumber?: string
    orderItemStatus?: EnvironmentThings["OrderStatus"]
    orderQuantity?: number
    orderedItem?: EnvironmentThings["OrderItem"] | EnvironmentThings["Product"] | EnvironmentThings["Service"]
}

declare global {

    interface EnvironmentThings {
        OrderItem: OrderItemThing | OrderItem
    }

}
