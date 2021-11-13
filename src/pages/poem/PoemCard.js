import React from "react";
import {Card} from 'react-bootstrap';
import {Link} from "react-router-dom";

const PoemCard = ({data}) => {

    return (
        <div>
            <Card style={{ width: '15rem' }} as={Link} to={`/poem/detail/${data.poemId}`} style={{textDecorationLine: "none", color: "black"}}>
                <Card.Img variant="top" src={data.poemImageSrc}/>
                <Card.Body style={{margin:"auto", textAlign:"center"}}>
                    <Card.Title>{data.poemTitle}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PoemCard;