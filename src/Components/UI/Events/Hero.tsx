import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../Assets/css/events/Hero.css';

interface Prop {

}

const Hero: React.FC<Prop> = () => {
    return(
        <>
            <div className='events-hero'>
                <Container>
                    <div className='hero-content'>
                        <div className='hero-caption'>
                            <h2>Upcoming Events</h2>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Hero;