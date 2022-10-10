import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../Assets/css/academics/Download.css';

interface Prop {

}

const Download: React.FC<Prop> = () => {
    return(
        <>
            <div className='academics-pdf-download'>
                <a href="Download" className="join hvr-push">Download as PDF</a>
            </div>
        </>
    )
}

export default Download;