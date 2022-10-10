import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../../../Assets/css/about/Image.css';

import ContentImage from '../../../Assets/about-us-img.jpg';

interface Prop {

}

const Image: React.FC<Prop> = () => {
    return(
        <>
            <div className='about-us-content-image'>
                <img src={ContentImage} alt='ActionImage'/>
            </div>
        </>
    )
}

export default Image;