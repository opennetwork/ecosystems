// https://schema.org/Invoice
import { Thing } from "./thing"

export interface InvoiceThing extends Thing<"Invoice"> {

}

export interface Invoice extends InvoiceThing {

}

declare global {

    interface EnvironmentThings {
        Invoice: InvoiceThing | Invoice
    }

}
