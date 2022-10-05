import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../Assets/css/Nav.css';
import Image from '../Image/Image'
import SignatureImage from '../../../Assets/signature.png';
import StudentImage from '../../../Assets/student.jpg';

interface Prop {

}

const Welcome: React.FC<Prop> = ({}) => {

    return(
        <>
            <Container style={{marginTop: "30px", padding: "70px 0"}}>
                <Row>
                    <Col sm={6} md={6}>
                        <h2 style={{fontFamily: "Montserrat-Regular", color: "#818181", textTransform: "capitalize", display: "block"}}>Word from the principal</h2>
                        <h2>EDUCATION IS THE MOST POWERFUL WEAPON</h2>
                        <p style={{lineHeight: "25px", fontFamily: "Montserrat-Light", fontSize: "16px", margin: "0 0 30px", color: "#818181"}}>Our students are talented, hard-working and full of good ideas. 
                            We encourage and empower them to bring their ideas to life. 
                            Hands-on opportunities are what we're all about. Our students 
                            are busy doing things that matter. Take a look at the opportunities 
                            you'll have at the University. The task of the modern educator is not 
                            to cut down jungles, but to irrigate deserts.</p>

                        <img src={SignatureImage} alt='Image'/>
                        <br /><br />
                        <h4>Katherine Gonzalez</h4>
                        <span style={{color: "#818181"}}>The principal</span>
                    </Col>
                    <Col sm={1} md={1}>
                        
                    </Col>
                    <Col sm={5} md={5}>
                        <Image source={StudentImage} height="auto" width="auto"></Image>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Welcome;