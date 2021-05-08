import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";
import { Thing } from "./thing"

export interface OrganizationThing extends Thing<"Organization"> {

}

export interface Organization extends OrganizationThing {

}

export type OrganizationReference = OrganizationThing | Organization


export const OrganizationThingSymbol = Symbol("OrganizationThing");
export type OrganizationThingToken = TokenVNodeBase<typeof OrganizationThingSymbol, OrganizationThing>;
export type OrganizationThingTokenFn = TokenVNodeFn<typeof OrganizationThingSymbol, OrganizationThing>;
export const OrganizationThing: OrganizationThingTokenFn = createToken(OrganizationThingSymbol);
export const OrganizationSymbol = Symbol("Organization");
export type OrganizationToken = TokenVNodeBase<typeof OrganizationSymbol, Organization>;
export type OrganizationTokenFn = TokenVNodeFn<typeof OrganizationSymbol, Organization>;
export const Organization: OrganizationTokenFn = createToken(OrganizationSymbol);
