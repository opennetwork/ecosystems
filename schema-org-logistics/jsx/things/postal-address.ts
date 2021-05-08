import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";
import { Thing } from "./thing"
import { ContactPointProperties } from "./contact-point"
import { CountryReference } from "./country"

export interface PostalAddressThing extends Thing<"PostalAddress"> {

}

export interface PostalAddress extends PostalAddressThing, ContactPointProperties {
    addressCountry?: string | CountryReference
    addressLocality?: string
    addressRegion?: string
    postOfficeBoxNumber?: string
    postalCode?: string
    streetAddress?: string
}

export type PostalAddressReference = PostalAddressThing | PostalAddress

export const PostalAddressThingSymbol = Symbol("PostalAddressThing");
export type PostalAddressThingToken = TokenVNodeBase<typeof PostalAddressThingSymbol, PostalAddressThing>;
export type PostalAddressThingTokenFn = TokenVNodeFn<typeof PostalAddressThingSymbol, PostalAddressThing>;
export const PostalAddressThing: PostalAddressThingTokenFn = createToken(PostalAddressThingSymbol);
export const PostalAddressSymbol = Symbol("PostalAddress");
export type PostalAddressToken = TokenVNodeBase<typeof PostalAddressSymbol, PostalAddress>;
export type PostalAddressTokenFn = TokenVNodeFn<typeof PostalAddressSymbol, PostalAddress>;
export const PostalAddress: PostalAddressTokenFn = createToken(PostalAddressSymbol);
