// https://schema.org/Invoice
import { Thing } from "./thing"

export interface InvoiceThing extends Thing<"Invoice"> {

}

export interface Invoice extends InvoiceThing {

}

export type InvoiceReference = InvoiceThing | Invoice

declare global {

    interface SchemaOrgEnvironmentThings {
        Invoice: InvoiceReference
    }

}
