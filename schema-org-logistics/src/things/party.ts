import { OrganizationThing, Organization } from "./organization"
import { PersonThing, Person } from "./person"

export type PartyThing = PersonThing | OrganizationThing
export type Party = Person | Organization

declare global {

    interface SchemaOrgEnvironmentThings {
        Party: PartyThing | Party
    }

}
