import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../Assets/css/schedules/Content.css';

interface Prop {

}

const Content: React.FC<Prop> = () => {
    return(
        <>
            <div className='schedule-content'>
                <Container>
                    <Row>
                        <div className="schedule-table-filter">
                            <div className="btn-group bootstrap-select dropdown">
                                <button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" title="Class XIII" aria-expanded="false">
                                    <span className="filter-option pull-left">Class XIII</span>&nbsp;
                                    <span className="bs-caret">
                                        <span className="caret"></span>
                                    </span>
                                </button>
                                
                                <div className="dropdown-menu open" role="combobox" style={{maxHeight: "537px", overflow: "hidden", minHeight: "0px"}}>
                                    <ul className="dropdown-menu inner" role="listbox" aria-expanded="false" style={{maxHeight: "525px", overflowY: "auto", minHeight: "0px"}}>
                                        <li data-original-index="0" className="">
                                            <a className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                                <span className="text">Class XI</span>
                                                <span className="glyphicon glyphicon-ok check-mark"></span>
                                            </a>
                                        </li>
                                        <li data-original-index="1" className="">
                                            <a className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
                                                <span className="text">Class XII</span>
                                                <span className="glyphicon glyphicon-ok check-mark"></span>
                                            </a>
                                        </li>
                                        <li data-original-index="2" className="selected">
                                            <a className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="true">
                                                <span className="text">Class XIII</span>
                                                <span className="glyphicon glyphicon-ok check-mark"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <select className="selectpicker dropdown">
                                    <option>Class XI</option>
                                    <option>Class XII</option>
                                    <option>Class XIII</option>
                                </select>
                            </div>
                            <div className="btn-group bootstrap-select dropdown"><button type="button" className="btn dropdown-toggle btn-default" data-toggle="dropdown" title="August 2017" aria-expanded="false"><span className="filter-option pull-left">August 2017</span>&nbsp;<span className="bs-caret"><span className="caret"></span></span></button><div class="dropdown-menu open" role="combobox" style="max-height: 681px; overflow: hidden; min-height: 0px;"><ul class="dropdown-menu inner" role="listbox" aria-expanded="false" style="max-height: 669px; overflow-y: auto; min-height: 0px;"><li data-original-index="0" className=""><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">July 2017</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1" className="selected"><a className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span className="text">August 2017</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">September 2017</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select className="selectpicker dropdown">
                                <option>July 2017</option>
                                <option>August 2017</option>
                                <option>September 2017</option>
                            </select></div>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Content;