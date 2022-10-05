import Container from 'react-bootstrap/Container';

interface Prop {
    source: string;
    height: string;
    width: string;
    mtop?: string;
}

const Logo: React.FC<Prop> = ({source, height, mtop, width}) => {

    return(
        <>
            <div>
                <Container>
                    <img src={source} alt='Image' style={{maxHeight: height, marginLeft: "auto", marginRight: "auto", marginTop: mtop, display: "block", paddingTop: "20px", maxWidth: width}}/>
                </Container>
            </div>
        </>
    );
}

export default Logo;