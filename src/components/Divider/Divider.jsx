import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Divider() {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="line"></div>
            <FontAwesomeIcon icon={faStar} className="mx-3" />
            <div className="line"></div>
        </div>
    )
}

export default Divider
