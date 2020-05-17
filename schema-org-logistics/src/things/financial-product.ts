// https://schema.org/FinancialProduct
import { Thing } from "./thing"
import { ServiceProperties } from "./service"

export interface FinancialProductThing extends Thing<"FinancialProduct"> {

}

export interface FinancialProductProperties extends ServiceProperties {

}

export interface FinancialProduct extends FinancialProductThing, FinancialProductProperties {

}

export type FinancialProductReference = FinancialProductThing | FinancialProduct
