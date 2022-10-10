import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../Assets/css/academics/Hero.css';

interface Prop {

}

const Hero: React.FC<Prop> = () => {
    return(
        <>
            <div className='academics-hero'>
                <Container>
                    <div className='hero-content'>
                        <div className='hero-caption'>
                            <h2>Academic Calendar</h2>
                            <p>2017 - 2018</p>
                            <a href="Download" className="hvr-push">Download as PDF</a>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Hero;