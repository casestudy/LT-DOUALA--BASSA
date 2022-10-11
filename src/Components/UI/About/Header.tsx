import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../Assets/css/about/Header.css';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";

import SchoolLogo from '../../../Assets/logo-1.png';

interface Prop {
    value: string
}

const Header: React.FC<Prop> = ({value}) => {

    console.log(value);

    let about = "";
    let academics = "";
    let events = "";
    let news = "";
    let schedules = "";
    let contacts = "";
    let resources = "";

    // const [about, setAbout] = useState('');
    // const [academics, setAcademics] = useState('active');
    // const [events, setEvents] = useState('');
    // const [news, setNews] = useState('');
    // const [schedules, setSchedules] = useState('');
    // const [contacts, setContacts] = useState('');
    // const [resources, setResources] = useState('');

    if(value === "about") {
        about = "about-nav-item active";
        academics = "about-nav-item";
        events = "about-nav-item";
        news = "about-nav-item";
        schedules = "about-nav-item";
        contacts = "about-nav-item";
        resources = "about-nav-item";
    } else if(value === "academics") {
        about = "about-nav-item";
        academics = "about-nav-item active";
        events = "about-nav-item";
        news = "about-nav-item";
        schedules = "about-nav-item";
        contacts = "about-nav-item";
        resources = "about-nav-item";
    } else if(value === "events") {
        about = "about-nav-item";
        academics = "about-nav-item";
        events = "about-nav-item active";
        news = "about-nav-item";
        schedules = "about-nav-item";
        contacts = "about-nav-item";
        resources = "about-nav-item";
    } else if(value === "news") {
        about = "about-nav-item";
        academics = "about-nav-item";
        events = "about-nav-item";
        news = "about-nav-item active";
        schedules = "about-nav-item";
        contacts = "about-nav-item";
        resources = "about-nav-item";
    }

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
                                        <li className={about}><Link to = "/aboutus">About</Link></li>
                                        <li className={academics}><Link to = "/academics">Academics</Link></li>
                                        <li className={events}><Link to="/events">Events</Link></li>
                                        <li className={news}><Link to="/news">News</Link></li>
                                        <li className={schedules}><a href="schedule.html">Schedule</a></li>
                                        <li className={contacts}><a href="contact.html">Contact</a></li>
                                        <li className={resources}><a href="gallery.html">Resources</a></li>
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
                                        <FontAwesomeIcon icon={faSearch} />
                                    </a>
                                </li>
                                <li>
                                    <a href="twitter">
                                        <FontAwesomeIcon icon={faUser} />
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