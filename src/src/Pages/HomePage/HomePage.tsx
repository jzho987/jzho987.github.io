import {Space, Typography} from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";

export default function HomePage() {
    return(
        <div>
            <Typography>
                <Title>
                    Welcome to my space
                </Title>
                <Paragraph>
                    My name is Jay Zhou. Currently a penultimate Software Engineering student at the University of Auckland, here is my journey...
                </Paragraph>
                <Title level={2}>
                    Portfolio Highlights
                </Title>
            </Typography>

        </div>
    )
}
