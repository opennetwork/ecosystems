// https://schema.org/OpeningHoursSpecification
import { Thing } from "./thing"

export interface OpeningHoursSpecificationThing extends Thing<"OpeningHoursSpecification"> {

}

export interface OpeningHoursSpecification extends OpeningHoursSpecificationThing {
    closes?: EnvironmentThings["Time"]
    dayOfWeek?: EnvironmentThings["DayOfWeek"]
    opens?: EnvironmentThings["Time"]
    validFrom?: Date
    validThrough?: Date
}

declare global {

    interface EnvironmentThings {
        OpeningHoursSpecification: OpeningHoursSpecificationThing | OpeningHoursSpecification
    }

}
