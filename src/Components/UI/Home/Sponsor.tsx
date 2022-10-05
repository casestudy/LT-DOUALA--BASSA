import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../Assets/css/Sponsor.css';
import SponsorImage1 from '../../../Assets/sponsor-logo-1.png';
import SponsorImage2 from '../../../Assets/sponsor-logo-2.png';
import SponsorImage3 from '../../../Assets/sponsor-logo-3.png';
import SponsorImage4 from '../../../Assets/sponsor-logo-4.png';

interface Prop {

}

const Sponsor: React.FC<Prop> = ({}) => {

    return(
        <>
            <Container className='sponsor'>  
                <Row className='sponsor-logo'>
                    <Col md={3}><img src={SponsorImage1} alt='Image'/></Col>
                    <Col md={3}><img src={SponsorImage2} alt='Image'/></Col> 
                    <Col md={3}><img src={SponsorImage3} alt='Image'/></Col> 
                    <Col md={3}><img src={SponsorImage4} alt='Image'/></Col>    
                </Row> 
            </Container>
        </>
    );
}

export default Sponsor;