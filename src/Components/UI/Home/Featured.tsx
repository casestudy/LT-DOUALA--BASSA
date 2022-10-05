import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../Assets/css/Featured.css';

interface Prop {

}

const Featured: React.FC<Prop> = ({}) => {

    return(
        <>
            <Container style={{position: "relative", zIndex: "2"}} className='featured-box'>
                <Row>
                    <Col sm={4} md={4}>
                        <div className='box-1'>
                            <a href="">
                                <b>Student</b><br/>
                                <span>Events</span>
                            </a>
                        </div>
                    </Col>
                    <Col sm={4} md={4}>
                        <div className='box-2'>
                            <a href="">
                                <b>Classroom</b><br/>
                                <span>Stories</span>
                            </a>
                        </div>
                    </Col>
                    <Col sm={4} md={4}>
                        <div className='box-3'>
                            <a href="">
                                <b>Teachers</b><br/>
                                <span>Profile</span>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Featured;