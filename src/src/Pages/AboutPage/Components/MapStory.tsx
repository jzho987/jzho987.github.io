import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup
} from "react-simple-maps";

import geoData from './geoData.json'
import {Box, Typography} from "@mui/material";
import {Journies} from "../../../Data/Journies";
import JourneyCard from "./JourneyCard";
import {GlobalTheme} from "../../../Theme/GlobalTheme";

export default function MapStory() {

    return(
        <ComposableMap
            projection="geoEqualEarth"
            projectionConfig={{
                rotate: [180,0,0],
                scale: 100
            }}
        >
            <Geographies geography={geoData}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            {
                Journies.map((j, index) => {
                    return (
                        <Annotation
                            subject={j.City.coordinate}
                            dx={20}
                            dy={5}
                            connectorProps={{
                                stroke: "red",
                                strokeWidth: 1,
                                strokeLinecap: "round"
                            }}
                        >
                            <text fontFamily={GlobalTheme.typography.fontFamily}
                                  fontSize={GlobalTheme.typography.body2.fontSize}
                                  fontWeight={GlobalTheme.typography.body2.fontWeight}>
                                {j.bodyText}
                            </text>
                        </Annotation>
                    )
                })
            }
        </ComposableMap>
    )
}
