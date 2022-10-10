import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../Assets/css/about/Header.css';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 
// import Navbar from 'react-bootstrap/Navbar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import SchoolLogo from '../../../Assets/logo-1.png';

interface Prop {

}

const Header: React.FC<Prop> = () => {

    return(
        <>
            <Container id='masthead' className='site-header'>
                <Row className='site-header'>
                    <Col sm={2} md={2} className="site-branding">
                        <h1 className='site-title'>
                            <a href='test' title='LTDB'><img src={SchoolLogo} alt='School Logo'/></a>
                        </h1>
                    </Col>
                    <Col sm={8} md={8}>
                        <Nav id="site-navigation" className="navbar">
                            <div className='navbar-offcanvas navbar-offcanvas-touch navbar-offcanvas-right offcanvas-transform js-offcanvas-done' id='js-bootstrap-offcanvas'>
                                <Row style={{margin: "0 auto"}}>
                                    <ul className="about-navbar-nav navbar-left" style={{textAlign: "center", width: "100%", float: "none"}}>
                                        <li className="about-nav-item active"><a href="about.html">About</a></li>
                                        <li className="about-nav-item"><a href="academics.html">Academics</a></li>
                                        <li className="about-nav-item"><a href="events.html">Events</a></li>
                                        <li className="about-nav-item"><a href="news.html">News</a></li>
                                        <li className="about-nav-item"><a href="schedule.html">Schedule</a></li>
                                        <li className="about-nav-item"><a href="contact.html">Contact</a></li>
                                        <li className="about-nav-item"><a href="gallery.html">Resources</a></li>
                                    </ul>
                                    
                                </Row>
                            </div>
                        </Nav>
                    </Col>
                    <Col sm={2} md={2}>
                        <Row style={{margin: "0 auto"}}>
                            <ul className='about-navbar-nav navbar-right'>
                                <li>
                                    <a href="search">
                                        <FontAwesomeIcon icon={brands('twitter')} />
                                    </a>
                                </li>
                                <li>
                                    <a href="twitter">
                                        <FontAwesomeIcon icon={brands('twitter')} />
                                    </a>
                                </li>
                            </ul>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Header;