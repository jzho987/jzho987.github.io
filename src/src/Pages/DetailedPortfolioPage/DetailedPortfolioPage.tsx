import PortfolioPage from "./PortfolioPage";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {Projects} from "../../Data/Project";
import {Project} from "../../Data/Model/Project";
import CodePortfolio from "../HomePage/Components/CodePortfolio";
import {Box} from "@mui/material";

export default function DetailedPortfolioPage() {

    const [searchParams] = useSearchParams();
    const [projectId, setProjectId] = useState<string>();

    const [project, setProject] = useState<Project>();

    /**
     * getting project id from search params
     */
    useEffect(() => {
        const id = searchParams.get('projectId');
        console.log(id);
        if(id) {
            setProjectId(id);
        }
    },[])

    /**
     * get project from list
     */
    useEffect(() => {
        const nullableProject = Projects.find((p) => {
            console.log(p);
            if(p.projectId === projectId) {
                return p;
            }
        })

        console.log(nullableProject)

        if(nullableProject) {
            setProject(nullableProject)
        }

    },[projectId])

    return(
        <Box display={"block"} paddingLeft={9} paddingRight={9} paddingTop={4} paddingBottom={4}>
            <PortfolioPage Title={project?.title}
                           Description={project?.fullDescription}
                           ImageSrc={project?.imageSrc}
                           gitUrl={project?.githubUrl}
                           website={project?.associatedLink}
            />
            <CodePortfolio/>
        </Box>
    )
}
