import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TestimonialQuote from '../Testimonial/TestimonialQuote';
import '../../../Assets/css/Testimonials.css';
import Testimonial1 from '../../../Assets/testimonial-img-1.jpg';
import Testimonial2 from '../../../Assets/testimonial-img-2.jpg';
import Testimonial3 from '../../../Assets/testimonial-img-3.jpg';
import Testimonial4 from '../../../Assets/testimonial-img-4.jpg';
import Testimonial5 from '../../../Assets/testimonial-img-5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

interface Prop {
    
}

const Testimonials: React.FC<Prop> = ({}) => {
    const [contentClass, setContentClass] = useState('tab-pane');

    const [testimony1, setTestimony1] = useState('');
    const [testimony2, setTestimony2] = useState('');
    const [testimony3, setTestimony3] = useState('selected');
    const [testimony4, setTestimony4] = useState('');
    const [testimony5, setTestimony5] = useState('');

    const [testimonyTab1, setTestimonyTab1] = useState('tab-pane');
    const [testimonyTab2, setTestimonyTab2] = useState('tab-pane');
    const [testimonyTab3, setTestimonyTab3] = useState('tab-pane active');
    const [testimonyTab4, setTestimonyTab4] = useState('tab-pane');
    const [testimonyTab5, setTestimonyTab5] = useState('tab-pane');

    const toggleTestimony1 = () => {
        setTestimony5("");
        setTestimony1("selected");
        setTestimony2("");
        setTestimony3("");
        setTestimony4("");

        setTestimonyTab1("tab-pane active");
        setTestimonyTab2("tab-pane");
        setTestimonyTab3("tab-pane");
        setTestimonyTab4("tab-pane");
        setTestimonyTab5("tab-pane");
    };

    const toggleTestimony2 = () => {
        setTestimony5("");
        setTestimony1("");
        setTestimony2("selected");
        setTestimony3("");
        setTestimony4("");

        setTestimonyTab1("tab-pane");
        setTestimonyTab2("tab-pane active");
        setTestimonyTab3("tab-pane");
        setTestimonyTab4("tab-pane");
        setTestimonyTab5("tab-pane");
    };

    const toggleTestimony3 = () => {
        setTestimony5("");
        setTestimony1("");
        setTestimony2("");
        setTestimony3("selected");
        setTestimony4("");

        setTestimonyTab1("tab-pane");
        setTestimonyTab2("tab-pane");
        setTestimonyTab3("tab-pane active");
        setTestimonyTab4("tab-pane");
        setTestimonyTab5("tab-pane");
    };

    const toggleTestimony4 = () => {
        setTestimony5("");
        setTestimony1("");
        setTestimony2("");
        setTestimony3("");
        setTestimony4("selected");

        setTestimonyTab1("tab-pane");
        setTestimonyTab2("tab-pane");
        setTestimonyTab3("tab-pane");
        setTestimonyTab4("tab-pane active");
        setTestimonyTab5("tab-pane");
    };
    
    const toggleTestimony5 = () => {
        setTestimony5("selected");
        setTestimony1("");
        setTestimony2("");
        setTestimony3("");
        setTestimony4("");

        setTestimonyTab1("tab-pane");
        setTestimonyTab2("tab-pane");
        setTestimonyTab3("tab-pane");
        setTestimonyTab4("tab-pane");
        setTestimonyTab5("tab-pane active");
    };

    return(
        <>
            <Container className='testimonials'>
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
                           <TestimonialQuote cname={testimonyTab4} id="testimonial-4" quote="Vivamus quam ipsum, ullamcorper et eros quis, convallis aliquam elit. Ut viverra purus vel tellus eleifend rhoncus. Ut ut nisi sed dolor porttitor hendrerit. Proin eleifend mauris at augue auctor, quis gravida turpis pulvinar."></TestimonialQuote>
                           <TestimonialQuote cname={testimonyTab5} id="testimonial-5" quote="Nam interdum consectetur libero, non imperdiet mi semper vitae. Donec sapien libero, elementum et accumsan gravida, condimentum in arcu. Donec lobortis est nibh, vel hendrerit augue varius ut."></TestimonialQuote>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="col-sm-12">
						<ul className="tes">  {/*nav=tes active=selected */}
							<li className={testimony1} onClick={toggleTestimony1}>
                                <div>
                                    <a href="#testimonial-1">
                                        <img src={Testimonial1} alt="image"/>
                                        <strong>Douglas Ortega</strong>
                                        <span>Student of Sociology</span>
                                    </a>
                                </div>
							</li>
							<li className={testimony2} onClick={toggleTestimony2}>
                                <div>
                                    <a href="#testimonial-2">
                                        <img src={Testimonial2} alt="image"/>
                                        <strong>Marie Nichols</strong>
                                        <span>Student of Sociology</span>
                                    </a>
                                </div>
							</li>
							<li className={testimony3} onClick={toggleTestimony3}>
								<div>
                                    <a href="#testimonial-3">
                                        <img src={Testimonial3} alt="image"/>
                                        <strong>Cynthia Nelson</strong>
                                        <span>Student of Science</span>
                                    </a>
                                </div>
							</li>
							<li className={testimony4} onClick={toggleTestimony4}>
								<div>
                                    <a href="#testimonial-4">
                                        <img src={Testimonial4} alt="image"/>
                                        <strong>Michelle Jensen</strong> 
                                        <span>Student of Sociology</span>
                                    </a>
                                </div>
							</li>
							<li className={testimony5} onClick={toggleTestimony5}>
								<div>
                                    <a href="#testimonial-5">
                                        <img src={Testimonial5} alt="image"/>
                                        <strong>Benjamin Fox</strong> 
                                        <span>Former Student</span>
                                    </a>
                                </div>
							</li>
						</ul>
					</div>
                </Row>
            </Container>
        </>
    );
}

export default Testimonials;