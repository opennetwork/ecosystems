// https://schema.org/ProductModel
import { Thing } from "./thing"
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

declare global {

    interface SchemaOrgEnvironmentThings {
        ProductModel: ProductModelReference
    }

}
