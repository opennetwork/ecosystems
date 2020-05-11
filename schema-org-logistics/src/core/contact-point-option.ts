// https://schema.org/ContactPointOption
import { Thing } from "./thing"

export interface ContactPointOptionThing extends Thing<"ContactPointOption"> {

}

export interface ContactPointOption extends ContactPointOptionThing {

}

declare global {

    interface EnvironmentThings {
        ContactPointOption: ContactPointOptionThing | ContactPointOption
    }

}
