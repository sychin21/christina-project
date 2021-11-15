import React from 'react';
import {Accordion} from "react-bootstrap";

const StoryAccordion = ({storyList}) => {

    return (

        <Accordion>
            {
                storyList?.map((element, key) => {

                    return (
                        <Accordion.Item key={key} eventKey={key}>
                            <Accordion.Header>{element.storyTitle}</Accordion.Header>
                            <Accordion.Body>
                                {element.storyContent}

                                {
                                    element.imageSrcList.length > 0 &&
                                    <div style={{marginTop: "40px", marginBottom: "40px", textAlign:"center"}}>
                                        {
                                            element.imageSrcList?.map((e, k) => {
                                                return (
                                                    <img key={k}
                                                         src={e} style={{maxWidth:"50%", maxHeight:"550px"}}
                                                         alt=""
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })
            }
        </Accordion>
    )
}

export default StoryAccordion;