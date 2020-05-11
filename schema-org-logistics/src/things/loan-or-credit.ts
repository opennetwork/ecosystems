// https://schema.org/LoanOrCredit
import { Thing } from "./thing"
import { URL } from "whatwg-url"
import { FinancialProductProperties } from "./financial-product"

export interface LoanOrCreditThing extends Thing<"LoanOrCredit"> {

}

export interface LoanOrCreditProperties extends FinancialProductProperties {
    amount?: number | SchemaOrgEnvironmentThings["MonetaryAmount"]
    currency?: string
    gracePeriod?: SchemaOrgEnvironmentThings["Thing"]
    loanType?: string | URL
    recourseLoan?: boolean
    renegotiableLoan?: boolean
    requiredCollateral?: string | SchemaOrgEnvironmentThings["Thing"]
}

export interface LoanOrCredit extends LoanOrCreditThing, LoanOrCreditProperties {

}

declare global {

    interface SchemaOrgEnvironmentThings {
        LoanOrCredit: LoanOrCreditThing | LoanOrCredit
    }

}
