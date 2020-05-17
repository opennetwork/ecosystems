// https://schema.org/Person
import { Thing } from "./thing"
import { DemandReference } from "./demand"

export interface PersonThing extends Thing<"Person"> {

}

export interface Person extends PersonThing {
    seeks?: DemandReference
}

export type PersonReference = PersonThing | Person
