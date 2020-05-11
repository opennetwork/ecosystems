import { OrganizationThing, Organization } from "./organization"
import { PersonThing, Person } from "./person"

export type PartyThing = PersonThing | OrganizationThing
export type Party = Person | Organization

declare global {

    interface EnvironmentThings {
        Party: PartyThing | Party
    }

}
