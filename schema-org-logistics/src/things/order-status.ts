// https://schema.org/OrderStatus
import { Thing } from "./thing"

export interface OrderStatusThing extends Thing<"OrderStatus"> {

}

export interface OrderStatus extends OrderStatusThing {

}

export type OrderStatusReference = OrderStatusThing | OrderStatus

declare global {

    interface SchemaOrgEnvironmentThings {
        OrderStatus: OrderStatusReference
    }

}
