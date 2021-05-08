import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing } from "./thing"

export interface AudienceThing extends Thing<"Audience"> {

}

export interface AudienceProperties {

}

export interface Audience extends AudienceThing, AudienceProperties {

}

export type AudienceReference = AudienceThing | Audience
export const AudienceThingSymbol = Symbol("AudienceThing");
export type AudienceThingToken = TokenVNodeBase<typeof AudienceThingSymbol, AudienceThing>;
export type AudienceThingTokenFn = TokenVNodeFn<typeof AudienceThingSymbol, AudienceThing>;
export const AudienceThing: AudienceThingTokenFn = createToken(AudienceThingSymbol);export const AudiencePropertiesSymbol = Symbol("AudienceProperties");
export type AudiencePropertiesToken = TokenVNodeBase<typeof AudiencePropertiesSymbol, AudienceProperties>;
export type AudiencePropertiesTokenFn = TokenVNodeFn<typeof AudiencePropertiesSymbol, AudienceProperties>;
export const AudienceProperties: AudiencePropertiesTokenFn = createToken(AudiencePropertiesSymbol);export const AudienceSymbol = Symbol("Audience");
export type AudienceToken = TokenVNodeBase<typeof AudienceSymbol, Audience>;
export type AudienceTokenFn = TokenVNodeFn<typeof AudienceSymbol, Audience>;
export const Audience: AudienceTokenFn = createToken(AudienceSymbol);