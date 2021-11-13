import React, {useState, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";

import PoemCard from "./PoemCard";

const Poem = ({data}) => {

    const [poemList, setPoemList] = useState([]);

    useEffect(() => {
        setPoemList([...data]);
    }, []);

    return (
        <div>
            <Container style={{paddingTop:"30px"}}>
                <Row className="g-4">
                    {
                        poemList?.map((element, key) => {
                            return (
                                <Col lg={3} md={4} sm={6}>
                                    <PoemCard key={key} data={element}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Poem;