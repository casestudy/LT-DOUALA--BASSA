import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../Assets/css/events/Search.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import 'react-datepicker/dist/react-datepicker.css';

interface Prop {

}

const Search: React.FC<Prop> = () => {
    return(
        <>
            <div className='events-search-filter'>
                <Container>
                    <Row>
                        <div className='section-content clearfix'>
                            <Row>
                                <Col sm={6} md={3}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Keyword</Form.Label>
                                        <Form.Control type="text" placeholder="Type event keyword here" />
                                    </Form.Group>
                                </Col>
                                <Col sm={6} md={3}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Date</Form.Label>
                                        <InputGroup className="mb-3">
                                            <Form.Control
                                                placeholder="Select date"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                style={{lineHeight: "50px", height: "50px", padding: "0 20px"}}
                                            />
                                            <InputGroup.Text id="basic-addon1" style={{backgroundColor: "white"}}><FontAwesomeIcon icon={faCalendar} /></InputGroup.Text>
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                                <Col sm={6} md={3}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Keyword</Form.Label>
                                        <Form.Select size='lg'>
                                            <option>--</option>
                                            <option>Academics</option>
                                            <option>Sports</option>
                                            <option>Music</option>
                                            <option>Research</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={6} md={3}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label style={{color: "white"}}>Submit</Form.Label>
                                        <a href="Submit" className="hvr-push">Search Event</a>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Search;