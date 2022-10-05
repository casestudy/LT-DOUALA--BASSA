import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Prop {
    headimg: string,
    poster: string,
    date: string,
    image: string,
    title: string,
    post: string,
    more: string,
}

const NewsItem: React.FC<Prop> = ({headimg, poster, date, image, title, post, more}) => {

    return(
        <>
            <div className="news-item">
                <div >
                    <Row className="item-meta-data">
                        <Col md={8}>
                            <a href="#"><img src={headimg} alt="image"/></a>
                            <a href="#"><span>{poster}</span></a>
                        </Col>
                        <Col md={4}>
                            <span>{date}</span>
                        </Col>
                    </Row>
                </div>
                <div className="item-image">
                    <a href="#">
                        <img src={image} alt="image"/>
                    </a>
                </div>
                <div className="item-info">
                    <h3><a href="#">{title}</a></h3>
                    <p>{post}</p>
                    <a href={more}>Read More</a>
                </div>
            </div>
        </>
    );
}

export default NewsItem;