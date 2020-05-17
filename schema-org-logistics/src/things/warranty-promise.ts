// https://schema.org/WarrantyPromise
import { Thing } from "./thing"
import { QuantitativeValueReference } from "./quantitative-value"
import { WarrantyScopeReference } from "./warranty-scope"

export interface WarrantyPromiseThing extends Thing<"WarrantyPromise"> {

}

export interface WarrantyPromiseProperties {
    durationOfWarranty?: QuantitativeValueReference
    warrantyScope?: WarrantyScopeReference
}

export interface WarrantyPromise extends WarrantyPromiseThing, WarrantyPromiseProperties {

}

export type WarrantyPromiseReference = WarrantyPromiseThing | WarrantyPromise
