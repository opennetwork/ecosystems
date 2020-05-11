// https://schema.org/OpeningHoursSpecification
import { Thing } from "./thing"

export interface OpeningHoursSpecificationThing extends Thing<"OpeningHoursSpecification"> {

}

export interface OpeningHoursSpecification extends OpeningHoursSpecificationThing {
    closes?: SchemaOrgEnvironmentThings["Time"]
    dayOfWeek?: SchemaOrgEnvironmentThings["DayOfWeek"]
    opens?: SchemaOrgEnvironmentThings["Time"]
    validFrom?: Date
    validThrough?: Date
}

declare global {

    interface SchemaOrgEnvironmentThings {
        OpeningHoursSpecification: OpeningHoursSpecificationThing | OpeningHoursSpecification
    }

}
