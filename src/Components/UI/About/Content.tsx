import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../Assets/css/about/Content.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { solid, regular, brands, icon, thin } from '@fortawesome/fontawesome-svg-core/import.macro'

interface Prop {

}

const Content: React.FC<Prop> = () => {
    return(
        <>
            <div className='about-us-content'>
                <Container>
                    <Row>
                        <div className='section-content'>
                            <h2>We have faith in our student future</h2>
                            <p>Our students are talented, hard-working and 
                                full of good ideas. We encourage and empower 
                                them to bring their ideas to life. Hands-on 
                                opportunities are what were all about. 
                                Lorem ipsum dolor sit amet, consectetuer 
                                adipiscing elit, sed diam nonummy nibh euismod 
                                tincidunt ut laoreet dolore magna aliquam erat 
                                volutpat. Ut wisi enim ad minim veniam, 
                                quis nostrud exerci tation ullamcorper suscipit 
                                lobortis nisl ut aliquip ex ea commodo consequat. 
                                Duis autem vel eum iriure dolor in hendrerit in 
                                vulputate velit esse molestie consequat.</p>
                        </div>
                        <div className='section-content-icons'>
                            <Row>
                                <Col sm={6}>
                                    <Row>
                                        <Col sm={2}><FontAwesomeIcon className='fa-4x' style={{verticalAlign: "middle", color: "#f5ab35"}} icon={brands("react")} /></Col>
                                        <Col sm={10}>
                                            <h3>Empower</h3>
                                            <p>Duis autem vel eum iriure dolor in 
                                                hendrerit in vulputate velit esse 
                                                molestie consequat. Lorem ipsum 
                                                dolor sit amet, consectetuer 
                                                adipiscing elit,</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={6}>
                                    <Row>
                                        <Col sm={2}><FontAwesomeIcon className='fa-4x' style={{verticalAlign: "middle", color: "#f5ab35"}} icon={faEarthAfrica} /></Col>
                                        <Col sm={10}>
                                            <h3>Engage</h3>
                                            <p>Duis autem vel eum iriure dolor in 
                                                hendrerit in vulputate velit esse 
                                                molestie consequat. Lorem ipsum 
                                                dolor sit amet, consectetuer 
                                                adipiscing elit,</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <Row>
                                        <Col sm={2}><FontAwesomeIcon className='fa-4x' style={{verticalAlign: "middle", color: "#f5ab35"}} icon={faGraduationCap} /></Col>
                                        <Col sm={10}>
                                            <h3>Graduation</h3>
                                            <p>Duis autem vel eum iriure dolor in 
                                                hendrerit in vulputate velit esse 
                                                molestie consequat. Lorem ipsum 
                                                dolor sit amet, consectetuer 
                                                adipiscing elit,</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={6}>
                                    <Row>
                                        <Col sm={2}><FontAwesomeIcon className='fa-4x' style={{verticalAlign: "middle", color: "#f5ab35"}} icon={faTrophy} /></Col>
                                        <Col sm={10}>
                                            <h3>Engage</h3>
                                            <p>Duis autem vel eum iriure dolor in 
                                                hendrerit in vulputate velit esse 
                                                molestie consequat. Lorem ipsum 
                                                dolor sit amet, consectetuer 
                                                adipiscing elit,</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Content;