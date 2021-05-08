import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing } from "./thing"

export interface OrderStatusThing extends Thing<"OrderStatus"> {

}

export interface OrderStatus extends OrderStatusThing {

}

export type OrderStatusReference = OrderStatusThing | OrderStatus

export const OrderStatusThingSymbol = Symbol("OrderStatusThing");
export type OrderStatusThingToken = TokenVNodeBase<typeof OrderStatusThingSymbol, OrderStatusThing>;
export type OrderStatusThingTokenFn = TokenVNodeFn<typeof OrderStatusThingSymbol, OrderStatusThing>;
export const OrderStatusThing: OrderStatusThingTokenFn = createToken(OrderStatusThingSymbol);export const OrderStatusSymbol = Symbol("OrderStatus");
export type OrderStatusToken = TokenVNodeBase<typeof OrderStatusSymbol, OrderStatus>;
export type OrderStatusTokenFn = TokenVNodeFn<typeof OrderStatusSymbol, OrderStatus>;
export const OrderStatus: OrderStatusTokenFn = createToken(OrderStatusSymbol);