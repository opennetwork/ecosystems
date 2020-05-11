// https://schema.org/Person
import { Thing } from "./thing"

export interface PersonThing extends Thing<"Person"> {

}

export interface Person extends PersonThing {
    seeks?: SchemaOrgEnvironmentThings["Demand"]
}

declare global {

    interface SchemaOrgEnvironmentThings {
        Person: PersonThing | Person
    }

}
