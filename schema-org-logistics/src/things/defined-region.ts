// https://schema.org/DefinedRegion
import { Thing } from "./thing"

export interface DefinedRegionThing extends Thing<"DefinedRegion"> {

}

export interface DefinedRegionProperties {

}

export interface DefinedRegion extends DefinedRegionThing, DefinedRegionProperties {

}

declare global {

    interface SchemaOrgEnvironmentThings {
        DefinedRegion: DefinedRegionThing | DefinedRegion
    }

}
