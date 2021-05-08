import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing } from "./thing"

export interface ContactPointOptionThing extends Thing<"ContactPointOption"> {

}

export interface ContactPointOption extends ContactPointOptionThing {

}

export type ContactPointOptionReference = ContactPointOptionThing | ContactPointOption
export const ContactPointOptionThingSymbol = Symbol("ContactPointOptionThing");
export type ContactPointOptionThingToken = TokenVNodeBase<typeof ContactPointOptionThingSymbol, ContactPointOptionThing>;
export type ContactPointOptionThingTokenFn = TokenVNodeFn<typeof ContactPointOptionThingSymbol, ContactPointOptionThing>;
export const ContactPointOptionThing: ContactPointOptionThingTokenFn = createToken(ContactPointOptionThingSymbol);export const ContactPointOptionSymbol = Symbol("ContactPointOption");
export type ContactPointOptionToken = TokenVNodeBase<typeof ContactPointOptionSymbol, ContactPointOption>;
export type ContactPointOptionTokenFn = TokenVNodeFn<typeof ContactPointOptionSymbol, ContactPointOption>;
export const ContactPointOption: ContactPointOptionTokenFn = createToken(ContactPointOptionSymbol);