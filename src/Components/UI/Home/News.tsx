import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsItem from '../News/NewsItem';
import '../../../Assets/css/News.css';
import NewsHead1 from '../../../Assets/latest-news-author-img.jpg';
import NewsImage1 from '../../../Assets/latest-news-img-1.jpg';
import NewsImage2 from '../../../Assets/latest-news-img-2.jpg';
import NewsImage3 from '../../../Assets/latest-news-img-3.jpg';
import NewsImage4 from '../../../Assets/latest-news-img-4.jpg';

interface Prop {

}

const News: React.FC<Prop> = ({}) => {

    return(
        <>
            <Container className='featured-news'>
                <Row>
                    <div className='section-header'>
                        <h2>Our Latest News</h2>
                    </div>
                </Row>
                <Row>
                    <div className='section-content'>
                        <Row>
                            <Col xs={6} md={3}>
                                <NewsItem headimg={NewsHead1} poster="Admin Sekolah" date="Aug 15" image={NewsImage1} title="Students were on a trip Istanbul, Turkey" post="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod." more="#"></NewsItem>
                            </Col>
                            <Col xs={6} md={3}>
                                <NewsItem headimg={NewsHead1} poster="Admin Sekolah" date="Aug 15" image={NewsImage2} title="Fall Sports Practices, Meeting in August" post="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod." more="#"></NewsItem>
                            </Col>
                            <Col xs={6} md={3}>
                                <NewsItem headimg={NewsHead1} poster="Admin Sekolah" date="Aug 15" image={NewsImage3} title="Apply for Community Scholarships" post="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod." more="#"></NewsItem>
                            </Col>
                            <Col xs={6} md={3}>
                                <NewsItem headimg={NewsHead1} poster="Admin Sekolah" date="Aug 15" image={NewsImage4} title="Jobs, Career Presentation to Coincide with Conferences" post="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod." more="#"></NewsItem>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default News;