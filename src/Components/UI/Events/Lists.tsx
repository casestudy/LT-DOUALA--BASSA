import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../Assets/css/events/List.css';
import item1 from '../../../Assets/events-item-img-1.jpg';
import item2 from '../../../Assets/events-item-img-2.jpg';
import item3 from '../../../Assets/events-item-img-3.jpg';
import item4 from '../../../Assets/events-item-img-4.jpg';
import Item from './ListItem';

interface Prop {

}

const List: React.FC<Prop> = () => {
    return(
        <>
            <div className='events-list'>
                <Container>
                    <Row>
                        <Col xs={6} lg={3} style={{display: "block"}}>
                            <Item srcimg={item1} 
                            title='Sekolah Library Research with Sarah Moya' 
                            date='August 16, 2016' 
                            location='Sekolah Building 3rd Floor'
                            message='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy'></Item>
                        </Col>
                        <Col xs={6} lg={3} style={{display: "block"}}>
                            <Item srcimg={item2} 
                            title='Workshop Viola with Mrs. Angelina' 
                            date='August 15, 2016' 
                            location='Sekolah Building 3rd Floor'
                            message='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy'></Item>
                        </Col>
                        <Col xs={6} lg={3} style={{display: "block"}}>
                            <Item srcimg={item3} 
                            title='Yoga Training with Mrs. Emily Foster' 
                            date='August 20, 2016' 
                            location='Sekolah Building 3rd Floor'
                            message='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy'></Item>
                        </Col>
                        <Col xs={6} lg={3} style={{display: "block"}}>
                            <Item srcimg={item4} 
                            title='Cheerleaders Auditions Sekolah with NFL' 
                            date='August 12, 2016' 
                            location='Sekolah Building 3rd Floor'
                            message='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy'></Item>
                        </Col>
                        <Col xs={6} lg={3} style={{display: "block"}}>
                            <Item srcimg={item4} 
                            title='Cheerleaders Auditions Sekolah with NFL' 
                            date='August 12, 2016' 
                            location='Sekolah Building 3rd Floor'
                            message='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy'></Item>
                        </Col>
                        <Col xs={6} lg={3} style={{display: "block"}}>
                            <Item srcimg={item4} 
                            title='Cheerleaders Auditions Sekolah with NFL' 
                            date='August 12, 2016' 
                            location='Sekolah Building 3rd Floor'
                            message='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy'></Item>
                        </Col>
                        <Col xs={6} lg={3} style={{display: "block"}}>
                            <Item srcimg={item4} 
                            title='Cheerleaders Auditions Sekolah with NFL' 
                            date='August 12, 2016' 
                            location='Sekolah Building 3rd Floor'
                            message='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy'></Item>
                        </Col>
                        <Col xs={6} lg={3} style={{display: "block"}}>
                            <Item srcimg={item4} 
                            title='Cheerleaders Auditions Sekolah with NFL' 
                            date='August 12, 2016' 
                            location='Sekolah Building 3rd Floor'
                            message='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy'></Item>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default List;