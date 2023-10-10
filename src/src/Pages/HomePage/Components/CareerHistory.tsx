import {Box, Typography} from "@mui/material";
import InAnimation from "../../../Components/Animation/InAnimation";
import CareerBlocks from "../../../Components/Blocks/CareerBlocks";

export default function CareerHistory() {
    return(
        <Box marginTop={5}>
            <InAnimation orderIndex={1}>
                <Typography variant={"h4"} align={"left"} >
                    Career History
                </Typography>
            </InAnimation>
            <Box display={"flex"} marginTop={2} gap={3}>
                <CareerBlocks StartingYear={2022} EndingYear={2023}
                              JobTitle={"Product Engineering Intern"} Company={"Tidy International"}
                              AnimationOrder={2}
                />
                <CareerBlocks StartingYear={2021} EndingYear={2022}
                              JobTitle={"Computer Technician"} Company={"QMB Computers"}
                              AnimationOrder={3}
                />

            </Box>
        </Box>
    )
}
