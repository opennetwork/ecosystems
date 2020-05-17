// https://schema.org/Audience
import { Thing } from "./thing"

export interface AudienceThing extends Thing<"Audience"> {

}

export interface AudienceProperties {

}

export interface Audience extends AudienceThing, AudienceProperties {

}

export type AudienceReference = AudienceThing | Audience

declare global {

    interface SchemaOrgEnvironmentThings {
        Audience: AudienceReference
    }

}
