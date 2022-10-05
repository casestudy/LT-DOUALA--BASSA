import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../Image/Image'
import TeacherImage from '../../../Assets/teacher.png';
import Button from 'react-bootstrap/Button';

interface Prop {

}

const Content: React.FC<Prop> = ({}) => {

    return(
        <>
            <div style={{position: "relative", background: "#004296", color: '#fff'}}>
                <Container >
                        <Row className='row align-items-center'>
                            <Col sm={9} md={9}>
                                <h2 style={{fontFamily: "Montserrat-Bold", fontSize: "52px", lineHeight: "normal", margin: "0 0 30px", textTransform: "uppercase", textAlign: "center"}}>BIENVENUE AU</h2>
                                <h2 style={{fontFamily: "Montserrat-Bold", fontSize: "52px", lineHeight: "normal", margin: "0 0 30px", textTransform: "uppercase", textAlign: "center", color: "#f5ab35"}}>LYCÉE TECHNIQUE DE DOUALA BASSA</h2>
                                <br/>
                                <p style={{fontSize: "16px", lineHeight: "25px", margin: "0 2px 30px", fontFamily: "Montserrat-Light"}}>Let us think of education as the means of developing our greatest 
                                    abilities, because in each of us there is a private hope and dream which, 
                                    fulfilled, can be translated into benefit for everyone and greater 
                                    strength for our nation. (John F. Kennedy)</p>
                                <Button variant="outline-success" style={{fontSize: "18px", display: "inline-block", lineHeight: "normal", textTransform: "uppercase", border: "1px solid #fff", padding: "20px 50px", borderRadius: "5px", margin: "0 2px", textAlign: "center", color: '#fff'}}>Read More</Button>
                            </Col>
                            <Col sm={3} md={3}>
                                <Image source={TeacherImage} height="auto" width="auto"></Image>
                            </Col>
                        </Row>
                    </Container>
            </div>
        </>
    );
}

export default Content;