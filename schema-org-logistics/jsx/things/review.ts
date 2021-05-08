import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing } from "./thing"

export interface ReviewThing extends Thing<"Review"> {

}

export interface ReviewProperties {

}

export interface Review extends ReviewThing, ReviewProperties {

}

export type ReviewReference = ReviewThing | Review

export const ReviewThingSymbol = Symbol("ReviewThing");
export type ReviewThingToken = TokenVNodeBase<typeof ReviewThingSymbol, ReviewThing>;
export type ReviewThingTokenFn = TokenVNodeFn<typeof ReviewThingSymbol, ReviewThing>;
export const ReviewThing: ReviewThingTokenFn = createToken(ReviewThingSymbol);export const ReviewPropertiesSymbol = Symbol("ReviewProperties");
export type ReviewPropertiesToken = TokenVNodeBase<typeof ReviewPropertiesSymbol, ReviewProperties>;
export type ReviewPropertiesTokenFn = TokenVNodeFn<typeof ReviewPropertiesSymbol, ReviewProperties>;
export const ReviewProperties: ReviewPropertiesTokenFn = createToken(ReviewPropertiesSymbol);export const ReviewSymbol = Symbol("Review");
export type ReviewToken = TokenVNodeBase<typeof ReviewSymbol, Review>;
export type ReviewTokenFn = TokenVNodeFn<typeof ReviewSymbol, Review>;
export const Review: ReviewTokenFn = createToken(ReviewSymbol);