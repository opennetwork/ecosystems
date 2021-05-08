import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing } from "./thing"
import { Time } from "./time"
import { DayOfWeekReference } from "./day-of-week"

export interface OpeningHoursSpecificationThing extends Thing<"OpeningHoursSpecification"> {

}

export interface OpeningHoursSpecification extends OpeningHoursSpecificationThing {
    closes?: Time
    dayOfWeek?: DayOfWeekReference
    opens?: Time
    validFrom?: Date
    validThrough?: Date
}

export type OpeningHoursSpecificationReference = OpeningHoursSpecificationThing | OpeningHoursSpecification

export const OpeningHoursSpecificationThingSymbol = Symbol("OpeningHoursSpecificationThing");
export type OpeningHoursSpecificationThingToken = TokenVNodeBase<typeof OpeningHoursSpecificationThingSymbol, OpeningHoursSpecificationThing>;
export type OpeningHoursSpecificationThingTokenFn = TokenVNodeFn<typeof OpeningHoursSpecificationThingSymbol, OpeningHoursSpecificationThing>;
export const OpeningHoursSpecificationThing: OpeningHoursSpecificationThingTokenFn = createToken(OpeningHoursSpecificationThingSymbol);export const OpeningHoursSpecificationSymbol = Symbol("OpeningHoursSpecification");
export type OpeningHoursSpecificationToken = TokenVNodeBase<typeof OpeningHoursSpecificationSymbol, OpeningHoursSpecification>;
export type OpeningHoursSpecificationTokenFn = TokenVNodeFn<typeof OpeningHoursSpecificationSymbol, OpeningHoursSpecification>;
export const OpeningHoursSpecification: OpeningHoursSpecificationTokenFn = createToken(OpeningHoursSpecificationSymbol);