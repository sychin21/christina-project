import React from 'react';
import {Container} from "react-bootstrap";

import StoryAccordion from "./StoryAccordion";

const Story = ({data}) => {

    const storyList = [...data];

    return (
        <div>
            <Container style={{paddingTop: "35px", paddingBottom: "40px"}}>
                <StoryAccordion storyList={storyList} />
            </Container>
        </div>
    )
}

export default Story;