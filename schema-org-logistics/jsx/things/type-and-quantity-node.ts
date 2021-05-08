import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";
import { Thing } from "./thing"
import { URL } from "whatwg-url"
import { ServiceReference } from "./service"
import { ProductReference } from "./product"
import { BusinessFunctionReference } from "./business-function"

export interface TypeAndQuantityNodeThing extends Thing<"TypeAndQuantityNode"> {

}

export interface TypeAndQuantityNode extends TypeAndQuantityNodeThing {
    amountOfThisGood?: number
    businessFunction?: BusinessFunctionReference
    typeOfGood?: ServiceReference | ProductReference
    unitCode?: string | URL
    unitText?: string
}

export type TypeAndQuantityNodeReference = TypeAndQuantityNodeThing | TypeAndQuantityNode


export const TypeAndQuantityNodeThingSymbol = Symbol("TypeAndQuantityNodeThing");
export type TypeAndQuantityNodeThingToken = TokenVNodeBase<typeof TypeAndQuantityNodeThingSymbol, TypeAndQuantityNodeThing>;
export type TypeAndQuantityNodeThingTokenFn = TokenVNodeFn<typeof TypeAndQuantityNodeThingSymbol, TypeAndQuantityNodeThing>;
export const TypeAndQuantityNodeThing: TypeAndQuantityNodeThingTokenFn = createToken(TypeAndQuantityNodeThingSymbol);
export const TypeAndQuantityNodeSymbol = Symbol("TypeAndQuantityNode");
export type TypeAndQuantityNodeToken = TokenVNodeBase<typeof TypeAndQuantityNodeSymbol, TypeAndQuantityNode>;
export type TypeAndQuantityNodeTokenFn = TokenVNodeFn<typeof TypeAndQuantityNodeSymbol, TypeAndQuantityNode>;
export const TypeAndQuantityNode: TypeAndQuantityNodeTokenFn = createToken(TypeAndQuantityNodeSymbol);
