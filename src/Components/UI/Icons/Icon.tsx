import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface Prop {
    style: String,
    value: IconProp,
}

const iconMap = {
    'location_dot': faLocationDot
}

const Icon: React.FC<Prop> = ({style, value}) => {
    let i = null;
    
    i = <FontAwesomeIcon icon={value} />

    return(
        <>
            {i}  
        </>
    );
}

export default Icon;