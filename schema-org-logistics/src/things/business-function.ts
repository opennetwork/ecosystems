// https://schema.org/BusinessFunction
import { Thing } from "./thing"

export interface BusinessFunctionThing extends Thing<"BusinessFunction"> {

}

export interface BusinessFunction extends BusinessFunctionThing {

}

declare global {

    interface SchemaOrgEnvironmentThings {
        BusinessFunction: string | BusinessFunctionThing | BusinessFunction
    }

}
