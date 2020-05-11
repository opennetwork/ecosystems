// https://schema.org/WarrantyPromise
import { Thing } from "./thing"

export interface WarrantyPromiseThing extends Thing<"WarrantyPromise"> {

}

export interface WarrantyPromiseProperties {
    durationOfWarranty?: EnvironmentThings["QuantitativeValue"]
    warrantyScope?: EnvironmentThings["WarrantyScope"]
}

export interface WarrantyPromise extends WarrantyPromiseThing, WarrantyPromiseProperties {

}

declare global {

    interface EnvironmentThings {
        WarrantyPromise: WarrantyPromiseThing | WarrantyPromise
    }

}
