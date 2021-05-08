import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface DayOfWeekThing extends Thing<"DayOfWeek"> {

}

export interface DayOfWeek extends DayOfWeekThing {

}

export type DayOfWeekReference = URL | DayOfWeekThing | DayOfWeek


export const DayOfWeekThingSymbol = Symbol("DayOfWeekThing");
export type DayOfWeekThingToken = TokenVNodeBase<typeof DayOfWeekThingSymbol, DayOfWeekThing>;
export type DayOfWeekThingTokenFn = TokenVNodeFn<typeof DayOfWeekThingSymbol, DayOfWeekThing>;
export const DayOfWeekThing: DayOfWeekThingTokenFn = createToken(DayOfWeekThingSymbol);
export const DayOfWeekSymbol = Symbol("DayOfWeek");
export type DayOfWeekToken = TokenVNodeBase<typeof DayOfWeekSymbol, DayOfWeek>;
export type DayOfWeekTokenFn = TokenVNodeFn<typeof DayOfWeekSymbol, DayOfWeek>;
export const DayOfWeek: DayOfWeekTokenFn = createToken(DayOfWeekSymbol);
