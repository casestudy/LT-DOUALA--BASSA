import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

interface Prop {
    srcimg: string,
    title: string,
    date: string,
    location: string,
    message: string

}

const Item: React.FC<Prop> = ({srcimg, title, date, location, message}) => {

    return(
        <>
            <div className='events-item'>
                <div className="events-item-img">
                    <a href="events-single.html">
                        <img src={srcimg} alt="Event 1"/>
                    </a>
                </div>
                <div className="events-item-info">
                    <h3><a href="events-single.html">{title}</a></h3>
                    <ul className="event-meta">
                        <li>
                            <FontAwesomeIcon icon={faCalendar}/>
                            {date}
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLocationDot}/>
                            {location}
                        </li>
                    </ul>
                    <p>{message}</p>
                </div>
                <div className="events-item-link">
                    <a href="events-single.html" className="hvr-push">Learn More</a>
                </div>
            </div>
        </>
    );
}

export default Item;