import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface PaymentMethodThing extends Thing<"PaymentMethod"> {

}

export interface PaymentMethod extends PaymentMethodThing {

}

export type PaymentMethodReference = URL | PaymentMethodThing | PaymentMethod

export const PaymentMethodThingSymbol = Symbol("PaymentMethodThing");
export type PaymentMethodThingToken = TokenVNodeBase<typeof PaymentMethodThingSymbol, PaymentMethodThing>;
export type PaymentMethodThingTokenFn = TokenVNodeFn<typeof PaymentMethodThingSymbol, PaymentMethodThing>;
export const PaymentMethodThing: PaymentMethodThingTokenFn = createToken(PaymentMethodThingSymbol);export const PaymentMethodSymbol = Symbol("PaymentMethod");
export type PaymentMethodToken = TokenVNodeBase<typeof PaymentMethodSymbol, PaymentMethod>;
export type PaymentMethodTokenFn = TokenVNodeFn<typeof PaymentMethodSymbol, PaymentMethod>;
export const PaymentMethod: PaymentMethodTokenFn = createToken(PaymentMethodSymbol);