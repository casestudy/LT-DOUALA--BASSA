import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import '../../../Assets/css/NewsLetter.css';

interface Prop {

}

const NewsLetter: React.FC<Prop> = ({}) => {

    return(
        <>
            <div className='newsletter'>
                <Container>  
                    <Row>
                        <div className='newsletter-content'>
                            <Row>
                                <div className='newsletter-content-row'>
                                    <Row>
                                        <Col md={6}>
                                        <h2><span>Get The Latest News From Sekolah!</span> Join our newsletter now</h2>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Control type="email" placeholder="Enter your email address" />
                                        <a href="#" className="primary-link hvr-push">Subscribe</a>
                                    </Col>
                                    </Row>
                                </div>
                            </Row>
                        </div>    
                    </Row> 
                </Container>
            </div>
        </>
    );
}

export default NewsLetter;