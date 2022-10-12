import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import '../../../Assets/css/Nav.css';

import { Link } from "react-router-dom";

import { render } from 'react-dom';

interface Prop {
    
}

const Navigation: React.FC<Prop> = () => {
    //const params = window.location.pathname.substring(1);

    const navigationRoute = () => {
        console.log("Master");
    };

    return(
        <Container>
            <Row style={{marginLeft: "-15px", marginRight: "-15px", textAlign: "center"}}>
                <Nav style={{borderRadius: "1px solid transparent", position: "relative", minHeight: "50px"}} className="navbar navbar-light bg-light navbar-expand-md">
                    <Container>
                        <Row style={{margin: "0 auto"}}>
                            <ul className="navbar-nav" style={{textAlign: "center", width: "100%", float: "none"}}>
                                <li className="nav-item active"><Link className="nav-link" to="/home">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/aboutus" onClick={navigationRoute}>About</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/academics">Academics</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/news">News</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/schedules">Schedule</Link></li>
                                <li className="nav-item"><a className="nav-link" href="#offers">Contact</a></li>
                                <li className="nav-item"><a className="nav-link" href="#offers">Resource</a></li>
                            </ul>

                            {/* <Route exact path="/aboutus" component={ AboutUs } /> */}
                        </Row>
                    </Container>
                </Nav>
            </Row>
        </Container>
    );
}

export default Navigation;