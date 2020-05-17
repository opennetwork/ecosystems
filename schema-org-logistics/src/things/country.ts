// https://schema.org/Country
import { Thing } from "./thing"
import { PlaceProperties } from "./place"

export interface CountryThing extends Thing<"Country"> {

}

export interface Country extends CountryThing, PlaceProperties {

}

export type CountryReference = CountryThing | Country

