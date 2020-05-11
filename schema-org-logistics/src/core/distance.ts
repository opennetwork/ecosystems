// https://schema.org/Distance
import { Thing } from "./thing"

export interface DistanceThing extends Thing<"Distance"> {

}

export interface Distance extends DistanceThing {

}

declare global {

    interface EnvironmentThings {
        Distance: string | DistanceThing | Distance
    }

}
