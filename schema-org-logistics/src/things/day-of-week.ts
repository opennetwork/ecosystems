// https://schema.org/DayOfWeek
import { Thing } from "./thing"
import { URL } from "whatwg-url"

export interface DayOfWeekThing extends Thing<"DayOfWeek"> {

}

export interface DayOfWeek extends DayOfWeekThing {

}

declare global {

    interface SchemaOrgEnvironmentThings {
        DayOfWeek: URL | DayOfWeekThing | DayOfWeek
    }

}
