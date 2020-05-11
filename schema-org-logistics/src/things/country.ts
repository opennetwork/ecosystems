// https://schema.org/Country
import { Thing } from "./thing"
import { PlaceProperties } from "./place"

export interface CountryThing extends Thing<"Country"> {

}

export interface Country extends CountryThing, PlaceProperties {

}

declare global {

    interface SchemaOrgEnvironmentThings {
        Country: CountryThing | Country
    }

}
