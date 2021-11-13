import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap'

import MusicModal from "./MusicModal";
import MusicCard from "./MusicCard";

const Music = ({data}) => {

    const [musicData, setMusicData] = useState({
        categoryTitle: "",
        youtubeList: []
    });
    const [modal, setModal] = useState(false);

    const musicList = [...data];

    return (
        <div>
            {
                modal && <MusicModal data={musicData} setModal={setModal}/>
            }
            <Container style={{paddingTop:"30px"}}>
                <Row className="g-4">
                    {
                        musicList?.map((element, key) => {
                            return (
                                <Col lg={3} md={4} sm={6}>
                                    <MusicCard key={key} data={element} setMusicData={setMusicData} setModal={setModal}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Music;