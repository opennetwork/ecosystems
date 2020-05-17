// https://schema.org/LoanOrCredit
import { Thing, ThingReference } from "./thing"
import { URL } from "whatwg-url"
import { FinancialProductProperties } from "./financial-product"
import { MonetaryAmountReference } from "./monetary-amount"

export interface LoanOrCreditThing extends Thing<"LoanOrCredit"> {

}

export interface LoanOrCreditProperties extends FinancialProductProperties {
    amount?: number | MonetaryAmountReference
    currency?: string
    gracePeriod?: ThingReference
    loanType?: string | URL
    recourseLoan?: boolean
    renegotiableLoan?: boolean
    requiredCollateral?: string | ThingReference
}

export interface LoanOrCredit extends LoanOrCreditThing, LoanOrCreditProperties {

}

export type LoanOrCreditReference = LoanOrCreditThing | LoanOrCredit

declare global {

    interface SchemaOrgEnvironmentThings {
        LoanOrCredit: LoanOrCreditReference
    }

}
