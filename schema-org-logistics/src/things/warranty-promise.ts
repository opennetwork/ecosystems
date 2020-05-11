// https://schema.org/WarrantyPromise
import { Thing } from "./thing"

export interface WarrantyPromiseThing extends Thing<"WarrantyPromise"> {

}

export interface WarrantyPromiseProperties {
    durationOfWarranty?: SchemaOrgEnvironmentThings["QuantitativeValue"]
    warrantyScope?: SchemaOrgEnvironmentThings["WarrantyScope"]
}

export interface WarrantyPromise extends WarrantyPromiseThing, WarrantyPromiseProperties {

}

declare global {

    interface SchemaOrgEnvironmentThings {
        WarrantyPromise: WarrantyPromiseThing | WarrantyPromise
    }

}
