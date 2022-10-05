import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../Assets/css/Video.css';
import VideoImage from '../../../Assets/featured-video-img.jpg';

interface Prop {

}

const Video: React.FC<Prop> = ({}) => {

    return(
        <>
            <Container className='featured-video'>
                <Row>
                    <Col sm={6}>
                        <h2>Watch Our Video</h2>
                        <p>From the teachers, to the assistants, to the students, 
                            there is such a family atmosphere that is perfect for 
                            nurturing academic ability. Lorem ipsum dolor sit amet, 
                            consectetuer adipiscing elit, sed diam nonummy nibh 
                            euismod tincidunt ut laoreet dolore magna aliquam erat 
                            volutpat.</p>
                        <a href="#" className="primary-link hvr-push">Learn More</a>
                    </Col>
                    <Col sm={6}>
                        <div className="content-video">
							<a href="#">
								<img src={VideoImage} alt="image"/>
							</a>
						</div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Video;