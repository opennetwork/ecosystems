// https://schema.org/GeoShape
import { Thing } from "./thing"

export interface GeoShapeThing extends Thing<"GeoShape"> {

}

export interface GeoShapeProperties {

}

export interface GeoShape extends GeoShapeThing, GeoShapeProperties {

}

declare global {

    interface SchemaOrgEnvironmentThings {
        GeoShape: GeoShapeThing | GeoShape
    }

}
