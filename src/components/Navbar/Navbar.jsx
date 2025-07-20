import { Link, NavLink } from "react-router";
import { useEffect, useState } from "react";


export default function Navbar() {

    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShrink(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-dark ${shrink ? 'sticky-top' : ''}`}>
                <div className={`container ${shrink ? 'shrink' : ''}`}>
                    <Link className="navbar-brand text-white text-uppercase fw-bold fs-2" to="">Start Framework</Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-lg-grow-0" id="navbar">
                        <ul className="nav nav-pills">
                            <li className="nav-item me-3">
                                <NavLink className={({isActive}) => `nav-link text-white text-uppercase fw-bold px-2 ${ isActive ? 'active' : ''}`} to="about" aria-current="page"
                                >About</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className={({isActive}) => `nav-link text-white text-uppercase fw-bold px-2 ${ isActive ? 'active' : ''}`} to="portfolio">Portfolio</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className={({isActive}) => `nav-link text-white text-uppercase fw-bold px-2 ${ isActive ? 'active' : ''}`} to="contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
