import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import '../../../Assets/css/news/Hero.css';

interface Prop {

}

const Hero: React.FC<Prop> = () => {
    return(
        <>
            <div className='news-hero'>
                <Container>
                    <div className='hero-content'>
                        <div className='hero-caption'>
                            <h2>Sekolah Latest News</h2>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Hero;