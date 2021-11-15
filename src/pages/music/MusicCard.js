import React from 'react';
import {Card, Button} from 'react-bootstrap';

const MusicCard = ({data, setModal, setMusicData}) => {

    return (
        <div>
            <Card style={{ width: '18.5rem', marginLeft: "auto", marginRight: "auto" }}>
                <Card.Img variant="top" src={data.categoryImageSrc} />
                <Card.Body style={{marginLeft: "auto", marginRight: "auto", textAlign:"center"}}>
                    <Card.Title>{data.categoryName}</Card.Title>
                    <Button size="sm" variant="outline-success"
                        onClick={() => {
                            setMusicData({
                                categoryTitle: data.categoryTitle,
                                youtubeList: [...data.youtubeList]
                            })
                            setModal(true);
                        }}
                    >Click!</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MusicCard;