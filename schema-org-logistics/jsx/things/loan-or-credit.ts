import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing, ThingReference } from "./thing"
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

export const LoanOrCreditThingSymbol = Symbol("LoanOrCreditThing");
export type LoanOrCreditThingToken = TokenVNodeBase<typeof LoanOrCreditThingSymbol, LoanOrCreditThing>;
export type LoanOrCreditThingTokenFn = TokenVNodeFn<typeof LoanOrCreditThingSymbol, LoanOrCreditThing>;
export const LoanOrCreditThing: LoanOrCreditThingTokenFn = createToken(LoanOrCreditThingSymbol);export const LoanOrCreditPropertiesSymbol = Symbol("LoanOrCreditProperties");
export type LoanOrCreditPropertiesToken = TokenVNodeBase<typeof LoanOrCreditPropertiesSymbol, LoanOrCreditProperties>;
export type LoanOrCreditPropertiesTokenFn = TokenVNodeFn<typeof LoanOrCreditPropertiesSymbol, LoanOrCreditProperties>;
export const LoanOrCreditProperties: LoanOrCreditPropertiesTokenFn = createToken(LoanOrCreditPropertiesSymbol);export const LoanOrCreditSymbol = Symbol("LoanOrCredit");
export type LoanOrCreditToken = TokenVNodeBase<typeof LoanOrCreditSymbol, LoanOrCredit>;
export type LoanOrCreditTokenFn = TokenVNodeFn<typeof LoanOrCreditSymbol, LoanOrCredit>;
export const LoanOrCredit: LoanOrCreditTokenFn = createToken(LoanOrCreditSymbol);