// https://schema.org/Time
export type Time = string

declare global {

    interface EnvironmentThings {
        Time: Time
    }

}
