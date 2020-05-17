// https://schema.org/BusinessFunction
import { Thing } from "./thing"

export interface BusinessFunctionThing extends Thing<"BusinessFunction"> {

}

export interface BusinessFunction extends BusinessFunctionThing {

}

export type BusinessFunctionReference = string | BusinessFunctionThing | BusinessFunction
