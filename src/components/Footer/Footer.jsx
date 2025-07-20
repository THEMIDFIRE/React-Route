import { faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <footer className=''>
            <div className="container-fluid">
                <div className="row justify-content-center text-center p-5 bg-secondary text-white">
                    <div className="col-lg-4 p-4">
                        <h3 className=" text-uppercase">location</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="col-lg-4 p-4">
                        <h3 className=" text-uppercase">around the web</h3>
                        <div className="social d-flex justify-content-center">
                            <FontAwesomeIcon icon={faFacebook} className='border rounded-circle p-2 mx-1 fs-5'></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faTwitter} className='border rounded-circle p-2 mx-1 fs-5'></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faLinkedinIn} className='border rounded-circle p-2 mx-1 fs-5'></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faGlobe} className='border rounded-circle p-2 mx-1 fs-5'></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="col-lg-4 p-4">
                        <h3 className=" text-uppercase">about freelancer</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
                <div className="row text-center bg-dark text-bg-dark py-4">
                    <div className="col-lg-12">
                        <p className='m-0'>Copyright 2020. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
