import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing } from "./thing"
import { QuantitativeValueReference } from "./quantitative-value"
import { OpeningHoursSpecificationReference } from "./opening-hours-specification"

export interface ShippingDeliveryTimeThing extends Thing<"ShippingDeliveryTime"> {

}

export interface ShippingDeliveryTime extends ShippingDeliveryTimeThing {
    businessDays?: OpeningHoursSpecificationReference[]
    cutoffTime?: string
    handlingTime?: QuantitativeValueReference
    transitTime?: QuantitativeValueReference
}

export type ShippingDeliveryTimeReference = ShippingDeliveryTimeThing | ShippingDeliveryTime

export const ShippingDeliveryTimeThingSymbol = Symbol("ShippingDeliveryTimeThing");
export type ShippingDeliveryTimeThingToken = TokenVNodeBase<typeof ShippingDeliveryTimeThingSymbol, ShippingDeliveryTimeThing>;
export type ShippingDeliveryTimeThingTokenFn = TokenVNodeFn<typeof ShippingDeliveryTimeThingSymbol, ShippingDeliveryTimeThing>;
export const ShippingDeliveryTimeThing: ShippingDeliveryTimeThingTokenFn = createToken(ShippingDeliveryTimeThingSymbol);export const ShippingDeliveryTimeSymbol = Symbol("ShippingDeliveryTime");
export type ShippingDeliveryTimeToken = TokenVNodeBase<typeof ShippingDeliveryTimeSymbol, ShippingDeliveryTime>;
export type ShippingDeliveryTimeTokenFn = TokenVNodeFn<typeof ShippingDeliveryTimeSymbol, ShippingDeliveryTime>;
export const ShippingDeliveryTime: ShippingDeliveryTimeTokenFn = createToken(ShippingDeliveryTimeSymbol);