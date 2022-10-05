import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsItem from '../News/NewsItem';
import '../../../Assets/css/Gallery.css';
import Gallery1 from '../../../Assets/gallery-img-1.jpg';
import Gallery2 from '../../../Assets/gallery-img-2.jpg';
import Gallery3 from '../../../Assets/gallery-img-3.jpg';
import Gallery4 from '../../../Assets/gallery-img-4.jpg';
import Gallery5 from '../../../Assets/gallery-img-5.jpg';


interface Prop {

}

const Gallery: React.FC<Prop> = ({}) => {

    return(
        <>
            <div className='featured-gallery'>
                <Row>
                    <Col sm={6}>
                        <a href="#" data-featherlight="#content-1">
						    <img src={Gallery1} alt="image"/>
					    </a>
                        <div id="content-1" className="gallery-lightbox">
                            <img src={Gallery1} alt="image"/>
                            <div className="gallery-lightbox-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3}>
                        <a href="#" data-featherlight="#content-2">
                            <img src={Gallery2} alt="image"/>
                        </a>
                        <div id="content-2" className="gallery-lightbox">
                            <img src={Gallery2} alt="image"/>
                            <div className="gallery-lightbox-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            </div>
                        </div>
                        <a href="#" data-featherlight="#content-3">
                            <img src={Gallery3} alt="image"/>
                        </a>
                        <div id="content-3" className="gallery-lightbox">
                            <img src={Gallery3} alt="image"/>
                            <div className="gallery-lightbox-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={3}>
                    <a href="#" data-featherlight="#content-2">
                            <img src={Gallery4} alt="image"/>
                        </a>
                        <div id="content-4" className="gallery-lightbox">
                            <img src={Gallery4} alt="image"/>
                            <div className="gallery-lightbox-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            </div>
                        </div>
                        <a href="#" data-featherlight="#content-3">
                            <img src={Gallery5} alt="image"/>
                        </a>
                        <div id="content-5" className="gallery-lightbox">
                            <img src={Gallery5} alt="image"/>
                            <div className="gallery-lightbox-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Gallery;