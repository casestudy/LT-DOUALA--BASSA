import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Prop {
    cname: string,
    id: string,
    quote: string
}

const Quote: React.FC<Prop> = ({cname, id, quote}) => {

    return(
        <>
            <div className={cname} id={id}>
                <p style={{fontWeight: "bold", textAlign: "center"}}> "{quote}" </p>

                <hr />
                <strong>Marie Nichols</strong>
                <span>Student of Sociology</span>
            </div>
        </>
    );
}

export default Quote;