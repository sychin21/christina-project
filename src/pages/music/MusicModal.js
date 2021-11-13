import React, {useState, useEffect} from "react";
import {Modal, ListGroup} from 'react-bootstrap';

const MusicModal = ({data, setModal}) => {

    const [musicData, setMusicData] = useState({
        categoryTitle: "",
        youtubeList: []
    });

    useEffect(() => {
        setMusicData({...data});
    }, []);

    const modalClose = () => {
        setModal(false)
    }

    return (
        <Modal
            show={true}
            onHide={modalClose}
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title>{musicData?.categoryTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup variant="flush">
                {
                    musicData?.youtubeList?.map((element, key) => {
                        return (
                            <ListGroup.Item key={key} style={{fontSize: "15pt"}}
                            onClick={() => {window.open(element.link)}}>
                                    {element.title} &nbsp; >>
                            </ListGroup.Item>
                        )
                    })
                }
                </ListGroup>
            </Modal.Body>
        </Modal>
    )
}

export default MusicModal;