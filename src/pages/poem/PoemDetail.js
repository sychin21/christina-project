import React, {useState, useEffect} from 'react';
import {Card, Container} from "react-bootstrap";
import {useParams} from "react-router-dom";

const PoemDetail = ({data}) => {

    const {id} = useParams();
    const poemData = data.find(e => e.poemId == id);

    return (
        <div>
            <Container style={{paddingTop: "40px"}}>

                <Card>
                    <Card.Img variant="top" src={poemData?.poemImageSrc} style={{maxHeight: "1000px"}}/>
                    <Card.Body>
                        <Card.Text style={{textAlign: "center"}}>
                            <h3>{poemData?.poemTitle}</h3>
                            {
                                poemData?.poemContent.split("\n").map(line => {
                                    return <span>{line} <br/> </span>
                                })
                            }
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Container>

        </div>
    )
}

export default PoemDetail;