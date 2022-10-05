import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../Assets/css/Achievement.css';

interface Prop {

}

const Achievement: React.FC<Prop> = ({}) => {

    return(
        <>
            <div className='achievements'>
                <Container>  
                    <Row>
                        <div className='section-header'>
                            <h2>OUR TEACHERS AND STUDENTS ACHIEVEMENTS</h2>
                        </div>
                    </Row> 
                    <Row>
                        <div className='section-content'>
                            <Row>
                                <Col sm={3}>
                                    <h3 className="home-count">1954</h3>
                                    <p>Year Founded</p>
                                </Col>
                                <Col sm={3}>
                                    <h3 className="home-count">934</h3>
                                    <p>Certified Teachers</p>
                                </Col>
                                <Col sm={3}>
                                    <h3 className="home-count">65409</h3>
                                    <p>Graduated Students</p>
                                </Col>
                                <Col sm={3}>
                                    <h3 className="home-count">289</h3>
                                    <p>Awards Winner</p>
                                </Col>
                            </Row>
                            
                        </div>
                    </Row>
                </Container>
            </div>
            
        </>
    );
}

export default Achievement;