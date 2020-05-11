// https://schema.org/Duration
export type Duration = string

declare global {

    interface EnvironmentThings {
        Duration: Duration
    }

}
