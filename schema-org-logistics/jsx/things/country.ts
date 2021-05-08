import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing } from "./thing"
import { PlaceProperties } from "./place"

export interface CountryThing extends Thing<"Country"> {

}

export interface Country extends CountryThing, PlaceProperties {

}

export type CountryReference = CountryThing | Country

export const CountryThingSymbol = Symbol("CountryThing");
export type CountryThingToken = TokenVNodeBase<typeof CountryThingSymbol, CountryThing>;
export type CountryThingTokenFn = TokenVNodeFn<typeof CountryThingSymbol, CountryThing>;
export const CountryThing: CountryThingTokenFn = createToken(CountryThingSymbol);export const CountrySymbol = Symbol("Country");
export type CountryToken = TokenVNodeBase<typeof CountrySymbol, Country>;
export type CountryTokenFn = TokenVNodeFn<typeof CountrySymbol, Country>;
export const Country: CountryTokenFn = createToken(CountrySymbol);