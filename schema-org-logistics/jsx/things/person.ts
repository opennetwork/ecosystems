import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";
import { Thing } from "./thing"
import { DemandReference } from "./demand"

export interface PersonThing extends Thing<"Person"> {

}

export interface Person extends PersonThing {
    seeks?: DemandReference
}

export type PersonReference = PersonThing | Person

export const PersonThingSymbol = Symbol("PersonThing");
export type PersonThingToken = TokenVNodeBase<typeof PersonThingSymbol, PersonThing>;
export type PersonThingTokenFn = TokenVNodeFn<typeof PersonThingSymbol, PersonThing>;
export const PersonThing: PersonThingTokenFn = createToken(PersonThingSymbol);
export const PersonSymbol = Symbol("Person");
export type PersonToken = TokenVNodeBase<typeof PersonSymbol, Person>;
export type PersonTokenFn = TokenVNodeFn<typeof PersonSymbol, Person>;
export const Person: PersonTokenFn = createToken(PersonSymbol);
