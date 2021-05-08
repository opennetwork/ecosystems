import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing } from "./thing"
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

export const OrderItemThingSymbol = Symbol("OrderItemThing");
export type OrderItemThingToken = TokenVNodeBase<typeof OrderItemThingSymbol, OrderItemThing>;
export type OrderItemThingTokenFn = TokenVNodeFn<typeof OrderItemThingSymbol, OrderItemThing>;
export const OrderItemThing: OrderItemThingTokenFn = createToken(OrderItemThingSymbol);export const OrderItemSymbol = Symbol("OrderItem");
export type OrderItemToken = TokenVNodeBase<typeof OrderItemSymbol, OrderItem>;
export type OrderItemTokenFn = TokenVNodeFn<typeof OrderItemSymbol, OrderItem>;
export const OrderItem: OrderItemTokenFn = createToken(OrderItemSymbol);