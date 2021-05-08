import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";
import { Thing, ThingReference } from "./thing"
import { ContactPointOptionReference } from "./contact-point-option"
import { OpeningHoursSpecificationReference } from "./opening-hours-specification"
import { ProductReference } from "./product"

export interface ContactPointThing extends Thing<"ContactPoint"> {

}

export interface ContactPointProperties {
    areaServed?: ThingReference
    availableLanguage?: string | ThingReference
    contactOption?: ContactPointOptionReference
    contactType?: string
    email?: string
    faxNumber?: string
    hoursAvailable?: OpeningHoursSpecificationReference
    productSupported?: ProductReference | string
    telephone?: string
}

export interface ContactPoint extends ContactPointThing, ContactPointProperties {
}

export type ContactPointReference = ContactPointThing | ContactPoint


export const ContactPointThingSymbol = Symbol("ContactPointThing");
export type ContactPointThingToken = TokenVNodeBase<typeof ContactPointThingSymbol, ContactPointThing>;
export type ContactPointThingTokenFn = TokenVNodeFn<typeof ContactPointThingSymbol, ContactPointThing>;
export const ContactPointThing: ContactPointThingTokenFn = createToken(ContactPointThingSymbol);
export const ContactPointPropertiesSymbol = Symbol("ContactPointProperties");
export type ContactPointPropertiesToken = TokenVNodeBase<typeof ContactPointPropertiesSymbol, ContactPointProperties>;
export type ContactPointPropertiesTokenFn = TokenVNodeFn<typeof ContactPointPropertiesSymbol, ContactPointProperties>;
export const ContactPointProperties: ContactPointPropertiesTokenFn = createToken(ContactPointPropertiesSymbol);
export const ContactPointSymbol = Symbol("ContactPoint");
export type ContactPointToken = TokenVNodeBase<typeof ContactPointSymbol, ContactPoint>;
export type ContactPointTokenFn = TokenVNodeFn<typeof ContactPointSymbol, ContactPoint>;
export const ContactPoint: ContactPointTokenFn = createToken(ContactPointSymbol);
