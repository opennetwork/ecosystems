import { OrganizationThing, Organization } from "./organization"
import { PersonThing, Person } from "./person"

export type PartyThing = PersonThing | OrganizationThing
export type Party = Person | Organization
export type PartyReference = PartyThing | Party

declare global {

    interface SchemaOrgEnvironmentThings {
        Party: PartyThing | Party
    }

}
