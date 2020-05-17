// https://schema.org/OpeningHoursSpecification
import { Thing } from "./thing"
import { Time } from "./time"
import { DayOfWeekReference } from "./day-of-week"

export interface OpeningHoursSpecificationThing extends Thing<"OpeningHoursSpecification"> {

}

export interface OpeningHoursSpecification extends OpeningHoursSpecificationThing {
    closes?: Time
    dayOfWeek?: DayOfWeekReference
    opens?: Time
    validFrom?: Date
    validThrough?: Date
}

export type OpeningHoursSpecificationReference = OpeningHoursSpecificationThing | OpeningHoursSpecification

declare global {

    interface SchemaOrgEnvironmentThings {
        OpeningHoursSpecification: OpeningHoursSpecificationReference
    }

}
