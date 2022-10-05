import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Prop {
    cname: string,
    id: string,
    quote: string
}

const TestimonialQuote: React.FC<Prop> = ({cname, id, quote}) => {

    return(
        <>
            <div className={cname} id={id}>
                <p> "{quote}" </p>
            </div>
        </>
    );
}

export default TestimonialQuote;