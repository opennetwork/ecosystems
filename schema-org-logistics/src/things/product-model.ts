// https://schema.org/ProductModel
import { Thing } from "./thing"
import { ProductProperties } from "./product"

export interface ProductModelThing extends Thing<"ProductModel"> {

}

export interface ProductModelProperties extends ProductProperties {
    isVariantOf?: SchemaOrgEnvironmentThings["ProductModel"][]
    predecessorOf?: SchemaOrgEnvironmentThings["ProductModel"][]
    successorOf?: SchemaOrgEnvironmentThings["ProductModel"][]
}

export interface ProductModel extends ProductModelThing, ProductModelProperties {

}

declare global {

    interface SchemaOrgEnvironmentThings {
        ProductModel: ProductModelThing | ProductModel
    }

}
