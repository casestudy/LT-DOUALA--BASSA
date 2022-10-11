import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsItem from '../News/NewsItem';
import '../../../Assets/css/news/Latest.css'
import NewsHead1 from '../../../Assets/latest-news-author-img.jpg';
import NewsImage1 from '../../../Assets/latest-news-img-1.jpg';
import NewsImage0 from '../../../Assets/latest-news-img-featured.jpg';

interface Prop {

}

const Latest: React.FC<Prop> = () => {
    return(
        <>
            <div className='latest-news'>
                <Container>
                    <Row>
                        <div className='section-content'>
                            <Row>
                                <Col md={6}>
                                    <NewsItem headimg={NewsHead1} poster="Admin Sekolah" date="Aug 15" image={NewsImage0} title="Students were on a trip Istanbul, Turkey" post="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. Consectetuer adipiscing elit, sed diam nonummy nibh euismod. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. consectetuer adipiscing elit. consectetuer adipiscing elit." more="#"></NewsItem>
                                </Col>
                                <Col xs={6} md={3}>
                                    <NewsItem headimg={NewsHead1} poster="Admin Sekolah" date="Aug 15" image={NewsImage1} title="Students were on a trip Istanbul, Turkey" post="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod." more="#"></NewsItem>
                                </Col>
                                <Col xs={6} md={3}>
                                    <NewsItem headimg={NewsHead1} poster="Admin Sekolah" date="Aug 15" image={NewsImage1} title="Students were on a trip Istanbul, Turkey" post="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod." more="#"></NewsItem>
                                </Col>
                                <Col xs={6} md={3}>
                                    <NewsItem headimg={NewsHead1} poster="Admin Sekolah" date="Aug 15" image={NewsImage1} title="Students were on a trip Istanbul, Turkey" post="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod." more="#"></NewsItem>
                                </Col>
                                <Col xs={6} md={3}>
                                    <NewsItem headimg={NewsHead1} poster="Admin Sekolah" date="Aug 15" image={NewsImage1} title="Students were on a trip Istanbul, Turkey" post="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod." more="#"></NewsItem>
                                </Col>
                                <Col xs={6} md={3}>
                                    <NewsItem headimg={NewsHead1} poster="Admin Sekolah" date="Aug 15" image={NewsImage1} title="Students were on a trip Istanbul, Turkey" post="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod." more="#"></NewsItem>
                                </Col>
                                <Col xs={6} md={3}>
                                    <NewsItem headimg={NewsHead1} poster="Admin Sekolah" date="Aug 15" image={NewsImage1} title="Students were on a trip Istanbul, Turkey" post="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod." more="#"></NewsItem>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Latest;