import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TestimonialQuote from './Quote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import Testimonial1 from '../../../Assets/testimonial-img-1.jpg';
import Testimonial2 from '../../../Assets/testimonial-img-2.jpg';
import Testimonial3 from '../../../Assets/testimonial-img-3.jpg';
import '../../../Assets/css/about/Testimonials.css';

interface Prop {

}

const Testimonials: React.FC<Prop> = () => {
    const [testimony1, setTestimony1] = useState('');
    const [testimony2, setTestimony2] = useState('selected');
    const [testimony3, setTestimony3] = useState('');

    const [testimonyTab1, setTestimonyTab1] = useState('tab-pane');
    const [testimonyTab2, setTestimonyTab2] = useState('tab-pane active');
    const [testimonyTab3, setTestimonyTab3] = useState('tab-pane');

    const toggleTestimony1 = () => {
        setTestimony1("selected");
        setTestimony2("");
        setTestimony3("");

        setTestimonyTab1("tab-pane active");
        setTestimonyTab2("tab-pane");
        setTestimonyTab3("tab-pane");
    };

    const toggleTestimony2 = () => {
        setTestimony1("");
        setTestimony2("selected");
        setTestimony3("");

        setTestimonyTab1("tab-pane");
        setTestimonyTab2("tab-pane active");
        setTestimonyTab3("tab-pane");
    };

    const toggleTestimony3 = () => {
        setTestimony1("");
        setTestimony2("");
        setTestimony3("selected");

        setTestimonyTab1("tab-pane");
        setTestimonyTab2("tab-pane");
        setTestimonyTab3("tab-pane active");
    };

    return(
        <>
            <div className='about-us-testimonials'>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className="tab-content">
                                <div className='quote-icon'>
                                    <FontAwesomeIcon icon={faQuoteLeft}/>
                                </div>
                                <TestimonialQuote cname={testimonyTab1} id="testimonial-1" quote="Duis sed odio commodo, laoreet dolor ut, dictum massa. Praesent tristique felis vel auctor molestie. Donec cursus tellus eu metus tempor pretium. Nunc posuere eget felis sed vestibulum. Donec ac erat vel elit lobortis egestas."></TestimonialQuote>
                                <TestimonialQuote cname={testimonyTab2} id="testimonial-2" quote="Lorem ipsum dolor sit amet, consectetur adipiscing 
                                        elit. Donec vel nibh velit. Nam varius lectus et 
                                        tortor placerat ultrices. Curabitur quis ipsum 
                                        lacinia, dictum tortor ac, ornare sem. 
                                        Fusce iaculis urna sit amet quam posuere molestie. 
                                        Morbi vel feugiat orci, eu scelerisque libero. 
                                        Suspendisse vitae sem ullamcorper, elementum mi non, 
                                        mattis elit."></TestimonialQuote>
                                <TestimonialQuote cname={testimonyTab3} id="testimonial-3" quote="The teaching, in my opinion, is the best that anyone can hope for. Sekolah High School staff provide an environment in which students are able to reach their full potential. As well as this, I felt constantly challenged to push myself to exceed what is expected. I have no doubt that the person I become is due to my time spent here and that the last six years have been the best of my life."></TestimonialQuote>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <ul className="testimonial-nav">
                                <li className={testimony1} onClick={toggleTestimony1}>
                                    <a href="#testimonial-1" data-toggle="tab">
                                        <img src={Testimonial1} alt="Testimony one"/>
                                    </a>
                                </li>
                                <li className={testimony2} onClick={toggleTestimony2}>
                                    <a href="#testimonial-3" data-toggle="tab">
                                        <img src={Testimonial2} alt="Testimony two"/>
                                    </a>
                                </li>
                                <li className={testimony3} onClick={toggleTestimony3}>
                                    <a href="#testimonial-2" data-toggle="tab">
                                        <img src={Testimonial3} alt="Testimony three"/>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <div className="about-us-contact">
                            <a href="contactus" className="primary-link hvr-push">Contact Us</a>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Testimonials;