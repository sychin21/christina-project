import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';

import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import Main from "./pages/main";
import Music from "./pages/music";
import Story from "./pages/story";
import Poem from "./pages/poem";
import PoemDetail from "./pages/poem/PoemDetail";

import MUSIC_DATA from "./asset/data/music";
import STORY_DATA from "./asset/data/story";
import POEM_DATA from "./asset/data/poem";


const App = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className={"router-link"}>
                        <img src={require("./asset/mark/favicon-32x32.png").default}
                        style={{paddingRight: "10px"}}/>
                        Christina-Project</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className={"router-link"}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/music" className={"router-link"}>Music</Nav.Link>
                            <Nav.Link as={Link} to="/story" className={"router-link"}>Story</Nav.Link>
                            <Nav.Link as={Link} to="/poem" className={"router-link"}>Poem</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Main/>}/>

                <Route path="/music" element={<Music data={MUSIC_DATA}/>}/>

                <Route path="/story" element={<Story data={STORY_DATA}/>}/>

                <Route path="/poem" element={<Poem data={POEM_DATA} />}/>
                <Route path="/poem/detail/:id" element={<PoemDetail data={POEM_DATA}/>}/>
            </Routes>
        </div>
    );
}


export default App;
