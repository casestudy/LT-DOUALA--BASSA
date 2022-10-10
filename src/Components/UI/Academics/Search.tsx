import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../../../Assets/css/academics/Search.css';

interface Prop {

}

const Search: React.FC<Prop> = () => {
    return(
        <>
            <div className='search-bar'>
                <Container>
                    <Row>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1" style={{border: "0px solid", backgroundColor: "white"}}><FontAwesomeIcon icon={faMagnifyingGlass} /></InputGroup.Text>
                            <Form.Control
                                placeholder="Type any keyword and enter to search"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                style={{border: "0px solid"}}
                            />
                        </InputGroup>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Search;