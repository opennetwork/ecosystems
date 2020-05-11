// https://schema.org/WarrantyScope
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface WarrantyScopeThing extends Thing<"WarrantyScope"> {

}

export interface WarrantyScopeProperties {

}

export interface WarrantyScope extends WarrantyScopeThing, WarrantyScopeProperties {

}

declare global {

    interface EnvironmentThings {
        WarrantyScope: URL | WarrantyScopeThing | WarrantyScope
    }

}
