// https://schema.org/OrderStatus
import { Thing } from "./thing"

export interface OrderStatusThing extends Thing<"OrderStatus"> {

}

export interface OrderStatus extends OrderStatusThing {

}

declare global {

    interface EnvironmentThings {
        OrderStatus: OrderStatusThing | OrderStatus
    }

}
