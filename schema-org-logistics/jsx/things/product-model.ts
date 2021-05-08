import { createToken, TokenVNodeBase, TokenVNodeFn } from "@opennetwork/vnode";import { Thing } from "./thing"
import { ProductProperties } from "./product"

export interface ProductModelThing extends Thing<"ProductModel"> {

}

export interface ProductModelProperties extends ProductProperties {
    isVariantOf?: ProductModelReference[]
    predecessorOf?: ProductModelReference[]
    successorOf?: ProductModelReference[]
}

export interface ProductModel extends ProductModelThing, ProductModelProperties {

}

export type ProductModelReference = ProductModelThing | ProductModel
export const ProductModelThingSymbol = Symbol("ProductModelThing");
export type ProductModelThingToken = TokenVNodeBase<typeof ProductModelThingSymbol, ProductModelThing>;
export type ProductModelThingTokenFn = TokenVNodeFn<typeof ProductModelThingSymbol, ProductModelThing>;
export const ProductModelThing: ProductModelThingTokenFn = createToken(ProductModelThingSymbol);export const ProductModelPropertiesSymbol = Symbol("ProductModelProperties");
export type ProductModelPropertiesToken = TokenVNodeBase<typeof ProductModelPropertiesSymbol, ProductModelProperties>;
export type ProductModelPropertiesTokenFn = TokenVNodeFn<typeof ProductModelPropertiesSymbol, ProductModelProperties>;
export const ProductModelProperties: ProductModelPropertiesTokenFn = createToken(ProductModelPropertiesSymbol);export const ProductModelSymbol = Symbol("ProductModel");
export type ProductModelToken = TokenVNodeBase<typeof ProductModelSymbol, ProductModel>;
export type ProductModelTokenFn = TokenVNodeFn<typeof ProductModelSymbol, ProductModel>;
export const ProductModel: ProductModelTokenFn = createToken(ProductModelSymbol);