import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../Assets/css/about/Achievements.css';

interface Prop {

}

const Achievements: React.FC<Prop> = () => {
    return(
        <>
            <div className='about-us-achievements'>
                <Container>
                    <Row className='section-content clearfix'>
                        <Col sm={3}>
                            <h3 className="about-count">1954</h3>
                            <p>Year Founded</p>
                        </Col>
                        <Col sm={3}>
                            <h3 className="about-count">934</h3>
                            <p>Certified Teachers</p>
                        </Col>
                        <Col sm={3}>
                            <h3 className="about-count">65409</h3>
                            <p>Graduated Students</p>
                        </Col>
                        <Col sm={3}>
                            <h3 className="about-count">289</h3>
                            <p>Awards Winner</p>
                        </Col>  
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Achievements;