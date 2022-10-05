import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

interface Prop {

}

const Header: React.FC<Prop> = () => {

    return(
        <>
            <Navbar collapseOnSelect expand="lg">
                <Container style={{height: "1rem"}}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" style={{color: "#004296", fontFamily: "Montserrat-Light", fontSize: "13px", margin: "0"}}>
                            <Nav.Item> <FontAwesomeIcon icon={faLocationDot}/> Ndogbong Bassa, Prêt de IUT de Ndongbong, Département Wouri. Arrondissement Douala II</Nav.Item>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" style={{color: "#004296", fontFamily: "Montserrat-Light", fontSize: "13px", margin: "0"}}>admin@ltdb.com</Nav.Link>
                            <Nav.Link style={{color: "#004296", fontFamily: "Montserrat-Light", fontSize: "13px", margin: "0"}}>(+237) 679 734 580</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;