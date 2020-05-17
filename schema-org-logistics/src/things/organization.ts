// https://schema.org/Organization
import { Thing } from "./thing"

export interface OrganizationThing extends Thing<"Organization"> {

}

export interface Organization extends OrganizationThing {

}

export type OrganizationReference = OrganizationThing | Organization

declare global {

    interface SchemaOrgEnvironmentThings {
        Organization: OrganizationReference
    }

}
