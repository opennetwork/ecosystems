import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing } from "./thing"
import { OfferReference } from "./offer"
import { AggregateOfferReference } from "./aggregate-offer"
import { PartyReference } from "./party"
import { ParcelDeliveryReference } from "./parcel-delivery"
import { OrderStatusReference } from "./order-status"
import { OrderItemReference } from "./order-item"
import { PostalAddressReference } from "./postal-address"
import { InvoiceReference } from "./invoice"

export interface OrderThing extends Thing<"Order"> {

}

export interface Order extends OrderThing {
    acceptedOffer?: OfferReference | AggregateOfferReference
    broker?: PartyReference
    confirmationNumber?: string
    customer?: PartyReference
    discount?: string
    discountCode?: string
    isGift?: boolean
    orderDate: Date
    orderDelivery?: ParcelDeliveryReference
    orderNumber: string
    orderStatus: OrderStatusReference
    orderedItem: OrderItemReference[]
    billingAddress?: PostalAddressReference
    partOfInvoice?: InvoiceReference
}

export type OrderReference = OrderThing | Order
export const OrderThingSymbol = Symbol("OrderThing");
export type OrderThingToken = TokenVNodeBase<typeof OrderThingSymbol, OrderThing>;
export type OrderThingTokenFn = TokenVNodeFn<typeof OrderThingSymbol, OrderThing>;
export const OrderThing: OrderThingTokenFn = createToken(OrderThingSymbol);export const OrderSymbol = Symbol("Order");
export type OrderToken = TokenVNodeBase<typeof OrderSymbol, Order>;
export type OrderTokenFn = TokenVNodeFn<typeof OrderSymbol, Order>;
export const Order: OrderTokenFn = createToken(OrderSymbol);