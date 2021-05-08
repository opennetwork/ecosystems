import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";
import { Thing } from "./thing"

export interface InvoiceThing extends Thing<"Invoice"> {

}

export interface Invoice extends InvoiceThing {

}

export type InvoiceReference = InvoiceThing | Invoice

export const InvoiceThingSymbol = Symbol("InvoiceThing");
export type InvoiceThingToken = TokenVNodeBase<typeof InvoiceThingSymbol, InvoiceThing>;
export type InvoiceThingTokenFn = TokenVNodeFn<typeof InvoiceThingSymbol, InvoiceThing>;
export const InvoiceThing: InvoiceThingTokenFn = createToken(InvoiceThingSymbol);
export const InvoiceSymbol = Symbol("Invoice");
export type InvoiceToken = TokenVNodeBase<typeof InvoiceSymbol, Invoice>;
export type InvoiceTokenFn = TokenVNodeFn<typeof InvoiceSymbol, Invoice>;
export const Invoice: InvoiceTokenFn = createToken(InvoiceSymbol);
