// https://schema.org/Audience
import { Thing } from "./thing"

export interface AudienceThing extends Thing<"Audience"> {

}

export interface AudienceProperties {

}

export interface Audience extends AudienceThing, AudienceProperties {

}

declare global {

    interface SchemaOrgEnvironmentThings {
        Audience: AudienceThing | Audience
    }

}
