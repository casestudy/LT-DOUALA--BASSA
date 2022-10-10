import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../Assets/css/academics/Content.css';

interface Prop {

}

const Content: React.FC<Prop> = () => {
    return(
        <>
            <div className='academics-content'>
                <Container>
                    <Row  style={{display: "block"}}>
                        <div className="academic-month">
                            <Row>
                                <h2>July <span>2017</span></h2>
                                <div className="calendar col-sm-5 col-md-4">
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
                                            <li className="inactive">6</li>
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
                                </div>
                                <div className="calendar-note col-sm-7 col-md-8">
                                    <h3>Explanation</h3>
                                    <ul>
                                        <li><span>1 - 4 July</span> 1st Sekolah Examination</li>
                                        <li><span>7 - 12 July</span> Study tour to Taman Sari, Yogyakarta, Indonesia</li>
                                        <li><span>15 - 16 July</span> National Education Day</li>
                                        <li><span>18 - 20 July</span> OSIS Activity</li>
                                        <li><span>21 - 31 July</span> Semester Break</li>
                                    </ul>
                                </div>							
                            </Row>
                        </div>
                    </Row>
                    <Row style={{display: "block"}}>
                        <div className="academic-month">
                            <Row>
                                <h2>August <span>2017</span></h2>
                                <div className="calendar col-sm-5 col-md-4">
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
                                </div>
                                <div className="calendar-note col-sm-7 col-md-8">
                                    <h3>Explanation</h3>
                                    <ul>
                                        <li><span>1 - 4 August</span> 1st Sekolah Examination</li>
                                        <li><span>7 - 12 August</span> Study tour to Taman Sari, Yogyakarta, Indonesia</li>
                                        <li><span>15 - 16 August</span> National Education Day</li>
                                        <li><span>18 - 20 August</span> OSIS Activity</li>
                                        <li><span>21 - 31 August</span> Semester Break</li>
                                    </ul>
                                </div>							
                            </Row>
                        </div>
                    </Row>
                    <Row style={{display: "block"}}>
                        <div className="academic-month">
                            <Row>
                                <h2>September <span>2017</span></h2>
                                <div className="calendar col-sm-5 col-md-4">
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
                                            <li className="event-4-end">30</li>
                                            <li className="inactive">1</li>
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
                                </div>
                                <div className="calendar-note col-sm-7 col-md-8">
                                    <h3>Explanation</h3>
                                    <ul>
                                        <li><span>1 - 4 September</span> 1st Sekolah Examination</li>
                                        <li><span>7 - 12 September</span> Study tour to Taman Sari, Yogyakarta, Indonesia</li>
                                        <li><span>15 - 16 September</span> National Education Day</li>
                                        <li><span>18 - 20 September</span> OSIS Activity</li>
                                        <li><span>21 - 31 September</span> Semester Break</li>
                                    </ul>
                                </div>							
                            </Row>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Content;