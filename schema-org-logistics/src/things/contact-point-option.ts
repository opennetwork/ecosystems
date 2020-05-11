// https://schema.org/ContactPointOption
import { Thing } from "./thing"

export interface ContactPointOptionThing extends Thing<"ContactPointOption"> {

}

export interface ContactPointOption extends ContactPointOptionThing {

}

declare global {

    interface SchemaOrgEnvironmentThings {
        ContactPointOption: ContactPointOptionThing | ContactPointOption
    }

}
