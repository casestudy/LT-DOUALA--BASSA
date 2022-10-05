import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../Image/Image'
import ActionImage from '../../../Assets/call-to-action-img.png';
import '../../../Assets/css/Action.css';

interface Prop {

}

const Action: React.FC<Prop> = ({}) => {

    return(
        <>
            <Container className='call-to-action'>  
                <Row className='call-to-action-content clearfix'>
                    <Col md={9}>
                        <img src={ActionImage} alt='ActionImage'/>
                        <p><strong>Our students are talented,</strong><br/>passionate, hard-working and full of good ideas.</p>
                    </Col>
                    <Col md={3}><a href="learn" className='hvr-push'>Learn More</a></Col>    
                </Row> 
            </Container>
        </>
    );
}

export default Action;