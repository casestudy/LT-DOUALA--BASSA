import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../Image/Image'
import EmpowerImage from '../../../Assets/we-have-faith-img-1.png';
import EngageImage from '../../../Assets/we-have-faith-img-2.png';
import GraduationImage from '../../../Assets/we-have-faith-img-3.png';
import AwardingImage from '../../../Assets/we-have-faith-img-4.png';
import '../../../Assets/css/Future.css';

interface Prop {

}

const Future: React.FC<Prop> = ({}) => {

    return(
        <>
            <Container className='we-have-faith'>
                <Row>
                    <div className='section-header'>
                        <h3>WE HAVE FAITH IN OUR STUDENT FUTURE</h3>
                        <p>Our students are talented, hard-working and full of good ideas. 
                            We encourage and empower them to bring their ideas to life. 
                            Hands-on opportunities are what we're all about.</p>
                    </div>
                    <div>
                        <Row className='section-content'>
                            <Col sm={6} md={3}>
                                <Image source={EmpowerImage} height="auto" width="auto"></Image>
                                <h4>Empower</h4>
                                <p>Duis autem vel eum iriure dolor in hendrerit 
                                    in vulputate velit esse molestie consequat</p>
                            </Col>
                            <Col sm={6} md={3}>
                                <Image source={EngageImage} height="auto" width="auto"></Image>
                                <h4>Engage</h4>
                                <p>Duis autem vel eum iriure dolor in hendrerit 
                                    in vulputate velit esse molestie consequat</p>
                            </Col>
                            <Col sm={6} md={3}>
                                <Image source={GraduationImage} height="auto" width="auto"></Image>
                                <h4>Graduation</h4>
                                <p>Duis autem vel eum iriure dolor in hendrerit 
                                    in vulputate velit esse molestie consequat</p>
                            </Col>
                            <Col sm={6} md={3}>
                                <Image source={AwardingImage} height="auto" width="auto"></Image>
                                <h4>Awarding</h4>
                                <p>Duis autem vel eum iriure dolor in hendrerit 
                                    in vulputate velit esse molestie consequat</p>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default Future;