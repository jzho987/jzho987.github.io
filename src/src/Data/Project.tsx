import {createContext} from "react";
import {Project} from "./Model/Project";
import { v4 as uuidv4 } from 'uuid';
import virtualPetGameImage from "../Images/virtualPetGameImage.png";
import digitalTwinImage from "../Images/digitalTwinImage.png";

export const Projects: Project[] = [
    {
        projectId: "0725b0b0-95dd-4fdb-942f-0576dd8565ff",
        title: "Milo!",
        shortDescription: "A virtual pet game",
        fullDescription:
            "Milo was developed by a team of 7 students in an effort to create a 3D Virtual Pet game " +
            "to investigate how people's perception of Virtual Pets affects their ability to form meaningful " +
            "attachment and is motivated to interact with them. The application uses Unity Engine and purchased " +
            "an asset for the dog, who is promptly named Milo. The team created the ability to interact with the pet " +
            "as well as switch between a low-fi version of the model. The release v1.0.0 has windows and macOS " +
            "binary files for anyone interested to give it a try!",
        associatedLink: "",
        imageSrc: virtualPetGameImage,
    },
    {
        projectId: "2c92e82e-b497-4a35-a04e-1fc84bec7a71",
        title: "UOA Digital Twin",
        shortDescription: "digital twin interface for the University of Auckland",
        fullDescription:
            "For the 4th year universtiy research project, I developed an interface for visualising" +
            "the Digital Twin of the UOA science building. Using React Typescript, and the back " +
            "end from Nextspace, I was able to create a website fit for use on mobile. " +
            "This project is an attempt to improve student's experience on campus to allow for easy access " +
            "to more comfortable rooms and spaces, as well as locating important facilities. The usability " +
            "was assessed using a SUS survey and had a high mean score of around 74, indicating good usability.",
        associatedLink: "",
        imageSrc: digitalTwinImage,
    }
]
