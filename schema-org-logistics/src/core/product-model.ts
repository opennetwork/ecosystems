// https://schema.org/ProductModel
import { Thing } from "./thing"
import { ProductProperties } from "./product"

export interface ProductModelThing extends Thing<"ProductModel"> {

}

export interface ProductModelProperties extends ProductProperties {
    isVariantOf?: EnvironmentThings["ProductModel"][]
    predecessorOf?: EnvironmentThings["ProductModel"][]
    successorOf?: EnvironmentThings["ProductModel"][]
}

export interface ProductModel extends ProductModelThing, ProductModelProperties {

}

declare global {

    interface EnvironmentThings {
        ProductModel: ProductModelThing | ProductModel
    }

}
