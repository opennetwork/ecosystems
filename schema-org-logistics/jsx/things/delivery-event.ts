import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface DeliveryEventThing extends Thing<"DeliveryEvent"> {

}

export interface DeliveryEvent extends DeliveryEventThing {

}

export type DeliveryEventReference = URL | DeliveryEventThing | DeliveryEvent

export const DeliveryEventThingSymbol = Symbol("DeliveryEventThing");
export type DeliveryEventThingToken = TokenVNodeBase<typeof DeliveryEventThingSymbol, DeliveryEventThing>;
export type DeliveryEventThingTokenFn = TokenVNodeFn<typeof DeliveryEventThingSymbol, DeliveryEventThing>;
export const DeliveryEventThing: DeliveryEventThingTokenFn = createToken(DeliveryEventThingSymbol);
export const DeliveryEventSymbol = Symbol("DeliveryEvent");
export type DeliveryEventToken = TokenVNodeBase<typeof DeliveryEventSymbol, DeliveryEvent>;
export type DeliveryEventTokenFn = TokenVNodeFn<typeof DeliveryEventSymbol, DeliveryEvent>;
export const DeliveryEvent: DeliveryEventTokenFn = createToken(DeliveryEventSymbol);
