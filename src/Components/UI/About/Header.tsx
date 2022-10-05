import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Image from '../../../Components/UI/Image/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../Assets/css/about/Header.css';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import SchoolLogo from '../../../Assets/logo.jpg';

interface Prop {

}

const Header: React.FC<Prop> = () => {

    return(
        <>
            <Container id='masthead' className='site-header'>
                <Row className='site-header'>
                    <Col sm={3} md={3} className="site-branding">
                        <div style={{position: "relative", background: "#004296"}}><Image source={SchoolLogo} height='58px' width='150px' mtop='15px'></Image></div>
                    </Col>
                    <Col sm={9} md={9}>
                        <Nav style={{borderRadius: "1px solid transparent", position: "relative", minHeight: "50px"}} className="navbar navbar-light bg-light navbar-expand-md">
                            <div className='navbar-offcanvas navbar-offcanvas-touch navbar-offcanvas-right offcanvas-transform js-offcanvas-done'>
                                <Row style={{margin: "0 auto"}}>
                                    <ul className="navbar-nav" style={{textAlign: "center", width: "100%", float: "none"}}>
                                        <li className="nav-item active"><a href="about.html">About</a></li>
                                        <li className="nav-item"><a href="academics.html">Academics</a></li>
                                        <li className="nav-item"><a href="events.html">Events</a></li>
                                        <li className="nav-item"><a href="news.html">News</a></li>
                                        <li className="nav-item"><a href="schedule.html">Schedule</a></li>
                                        <li className="nav-item"><a href="contact.html">Contact</a></li>
                                        <li className="nav-item"><a href="gallery.html">Resources</a></li>
                                    </ul>
                                </Row>
                            </div>
                        </Nav>
                        
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Header;