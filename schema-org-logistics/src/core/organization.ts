// https://schema.org/Organization
import { Thing } from "./thing"

export interface OrganizationThing extends Thing<"Organization"> {

}

export interface Organization extends OrganizationThing {

}

declare global {

    interface EnvironmentThings {
        Organization: OrganizationThing | Organization
    }

}
