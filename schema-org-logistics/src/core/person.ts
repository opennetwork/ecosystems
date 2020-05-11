// https://schema.org/Person
import { Thing } from "./thing"

export interface PersonThing extends Thing<"Person"> {

}

export interface Person extends PersonThing {

}

declare global {

    interface EnvironmentThings {
        Person: PersonThing | Person
    }

}
