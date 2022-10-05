import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import '../../../Assets/css/Calendar.css';

interface Prop {

}

const Calendar: React.FC<Prop> = ({}) => {

    return(
        <>
            <div className='academic-calendar'>
                <Container>
                    <Row>
                        <div className='academic-calendar-header'>
                            <h2>Academic Calendar</h2>
                            <p>Our students are talented, hard-working and full of good ideas. 
                                We encourage and empower them to bring their ideas to life. 
                                Hands-on opportunities are what we're all about. <a href='#'>View Full Calendar</a></p>
                        </div>
                    </Row>
                    <Row>
                        <ul className='nav nav-year'>
                            <li className='active'>
                                <a href='#yr2017'>2017</a>
                            </li>
                            <li>
                                <a href='#yr2018'>2018</a>
                            </li>
                        </ul>
                        <div className='tab-content'>
                            <Row style={{marginRight: '-15px', marginLeft: '-15px'}}>
                                <Col md={2}>
                                    <div className='tab-pane clearfix' id='yr2017'>
                                        <div className="calendar-nav">
                                            <h3 className="year-title"> 
                                                <a href="#" className="yr-prev">
                                                    <FontAwesomeIcon icon={faAngleLeft}/>
                                                </a> 
                                                2017 
                                                <a href="#" className="yr-next">
                                                    <FontAwesomeIcon icon={faAngleRight}/>
                                                </a>
                                            </h3>
                                            <ul className='nav-ul'>
                                                <li className='active'><a href="#jan2017" data-toggle="tab" aria-expanded="true">January</a></li>
                                                <li><a href="#feb2017" data-toggle="tab" aria-expanded="true">February</a></li>
                                                <li><a href="#mar2017" data-toggle="tab" aria-expanded="true">March</a></li>
                                                <li><a href="#apr2017" data-toggle="tab" aria-expanded="true">April</a></li>
                                                <li><a href="#may2017" data-toggle="tab" aria-expanded="true">May</a></li>
                                                <li><a href="#jun2017" data-toggle="tab" aria-expanded="true">June</a></li>
                                                <li><a href="#jul2017" data-toggle="tab" aria-expanded="true">July</a></li>
                                                <li><a href="#aug2017" data-toggle="tab" aria-expanded="true">August</a></li>
                                                <li><a href="#sep2017" data-toggle="tab" aria-expanded="true">September</a></li>
                                                <li><a href="#oct2017" data-toggle="tab" aria-expanded="true">October</a></li>
                                                <li><a href="#nov2017" data-toggle="tab" aria-expanded="true">November</a></li>
                                                <li><a href="#dec2017" data-toggle="tab" aria-expanded="true">December</a></li>
                                            </ul>
                                        </div>
                                    </div>  
                                </Col>
                                <Col md={10}>
                                    <div>
                                        <div className='tab-pane'>
                                            <div className='calendar-info'>
                                                <Col md={5} className='calendar'>
                                                    <div className="calendar-header">
                                                        <ul>
                                                            <li>M</li>
                                                            <li>T</li>
                                                            <li>W</li>
                                                            <li>T</li>
                                                            <li>F</li>
                                                            <li>S</li>
                                                            <li>S</li>
                                                        </ul>
                                                    </div>
                                                    <div className="calendar-body">
                                                        <ul>
                                                            <li className="inactive">26</li>
                                                            <li className="inactive">27</li>
                                                            <li className="inactive">28</li>
                                                            <li className="inactive">29</li>
                                                            <li className="inactive">30</li>
                                                            <li className="inactive">31</li>
                                                            <li className="event-1-start">1</li>
                                                            <li className="event-1">2</li>
                                                            <li className="event-1">3</li>
                                                            <li className="event-1-end">4</li>
                                                            <li>5</li>
                                                            <li>6</li>
                                                            <li className="event-2-start">7</li>
                                                            <li className="event-2">8</li>
                                                            <li className="event-2">9</li>
                                                            <li className="event-2">10</li>
                                                            <li className="event-2">11</li>
                                                            <li className="event-2-end">12</li>
                                                            <li>13</li>
                                                            <li>14</li>
                                                            <li className="event-5-day">15</li>
                                                            <li className="">16</li>
                                                            <li>17</li>
                                                            <li className="event-3-start">18</li>
                                                            <li className="event-3">19</li>
                                                            <li className="event-3-end">20</li>
                                                            <li className="event-4-start">21</li>
                                                            <li className="event-4">22</li>
                                                            <li className="event-4">23</li>
                                                            <li className="event-4">24</li>
                                                            <li className="event-4">25</li>
                                                            <li className="event-4">26</li>
                                                            <li className="event-4">27</li>
                                                            <li className="event-4">28</li>
                                                            <li className="event-4">29</li>
                                                            <li className="event-4">30</li>
                                                            <li className="event-4-end">31</li>
                                                            <li className="inactive">1</li>
                                                            <li className="inactive">2</li>
                                                            <li className="inactive">3</li>
                                                            <li className="inactive">4</li>
                                                            <li className="inactive">5</li>
                                                        </ul>
                                                    </div>
                                                    <div className="calendar-footer">
                                                        <ul>
                                                            <li className="event-1"><span></span> Exam</li>
                                                            <li className="event-2"><span></span> Tour</li>
                                                            <li className="event-3"><span></span> OSIS</li>
                                                            <li className="event-4"><span></span> Report</li>
                                                        </ul>
											        </div>
                                                </Col>
                                                <Col md={7} className='calendar-note'>
                                                    <h3>Explanation</h3>
                                                    <ul>
                                                        <li><span>1 - 4 January</span> 1st Sekolah Examination</li>
                                                        <li><span>7 - 12 January</span> Study tour to Taman Sari, Yogyakarta, Indonesia</li>
                                                        <li><span>15 - 16 January</span> National Education Day</li>
                                                        <li><span>18 - 20 January</span> OSIS Activity</li>
                                                        <li><span>21 - 31 January</span> Semester Break</li>
                                                    </ul>
                                                </Col>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Calendar;

{/* <div className='calendar-nav'>
                                        <h3 className='year-title'>
                                            <a href="#" className='yr-prev'>
                                                <i className='fa fa-angle-left'></i>
                                            </a>
                                            2017
                                            <a href="#" className='yr-next'>
                                                <i className='fa fa-angle-right'></i>
                                            </a>
                                        </h3>
                                        <ul className='nav-month'>
                                            <li className='activee'><a>January</a></li>
                                            <li><a>February</a></li>
                                            <li><a>March</a></li>
                                            <li><a>April</a></li>
                                            <li><a>May</a></li>
                                            <li><a>June</a></li>
                                            <li><a>July</a></li>
                                            <li><a>August</a></li>
                                            <li><a>September</a></li>
                                            <li><a>October</a></li>
                                            <li><a>November</a></li>
                                            <li><a>December</a></li>
                                        </ul>
                                    </div> */}