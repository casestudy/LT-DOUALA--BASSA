import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../Assets/css/about/Hero.css';

interface Prop {

}

const Hero: React.FC<Prop> = () => {
    return(
        <>
            <div className='about-us-hero'>
                <Container>
                    <div className='hero-content'>
                        <div className='hero-caption'>
                            <h2>We are determined to achieve the highest standards</h2>
                            <p>in everything that we do.</p>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Hero;