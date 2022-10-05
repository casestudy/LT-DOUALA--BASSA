import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../Image/Image'
import SchoolLogo from '../../../Assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 

import '../../../Assets/css/Footer.css';

interface Prop {

}

const Footer: React.FC<Prop> = ({}) => {

    return(
        <>
            <div className='site-footer'>
                <Container>
                    <Row className='footer-info'>
                        <Col md={2} className='footer-info'>
                            <img src={SchoolLogo} alt="image" height='150px' width='150px' style={{marginTop: '40px'}}/>
                            {/* <div style={{position: "relative", background: "#004296"}}><Image source={SchoolLogo} height='150px' width='150px' mtop='15px'></Image></div> */}
                        </Col>
                        <Col md={10} className='footer-menu'>
                            <div className='footer-links'>
                                <ul>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Location</a></li>
                                </ul>
                            </div>
                            
                            <div className='footer-links'>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Students</a></li>
                                    <li><a href="#">Teachers</a></li>
                                </ul>
                            </div>

                            <div className='footer-links'>
                                <ul>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Latest News</a></li>
                                    <li><a href="#">Resources</a></li>
                                </ul>
                            </div>

                            <div className='footer-links'>
                                <ul>
                                    <li><a href="#">Academic</a></li>
                                    <li><a href="#">Calendar</a></li>
                                    <li><a href="#">Events</a></li>
                                </ul>
                            </div>

                            <div className='footer-links'>
                                <ul className='social'>
                                    <li className='facebook'>
                                        <a href="#">
                                            <FontAwesomeIcon icon={brands('facebook')} />
                                        </a>
                                    </li>
                                    
                                    <li className='google'>
                                        <a href="#">
                                            <FontAwesomeIcon icon={brands('google-plus')} />
                                        </a>
                                    </li>

                                    <li className='twitter'>
                                        <a href="#">
                                            <FontAwesomeIcon icon={brands('twitter')} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row className='footer-copyright'>
                        <p>Copyright 2022 | ALL RIGHTS RESERVED</p>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Footer;