import {Journey} from "./Model/Journey";

export const Journies: Journey[] = [
    {
        CountryID: "CHN",
        City: {
            Name: "Beijing",
            coordinate: [ 116.39723, 39.904202]
        },
        bodyText: "My hometown. I stayed here for my childhood, and completed primary and intermediate studies in beijing."
    },
    {
        CountryID: "NZL",
        City: {
            Name: "Auckland",
            coordinate: [ 174.76349, -36.84853]
        },
        bodyText: "Came to New Zealand when I was 15. Studied at Auckland Grammar School, and now I am finishing my " +
            "University studies at UoA for Engineering."
    }
]
