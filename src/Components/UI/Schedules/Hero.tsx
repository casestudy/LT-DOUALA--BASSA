import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import '../../../Assets/css/schedules/Hero.css';

interface Prop {

}

const Hero: React.FC<Prop> = () => {
    return(
        <>
            <div className='schedule-hero'>
                <Container>
                    <div className='hero-content'>
                        <div className='hero-caption'>
                            <h2>Lesson Schedules</h2>
                            <a href="Download" className="hvr-push">Download as PDF</a>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Hero;