import React from "react";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/css/main.css";
import "../assets/img/favicon.png"; // For favicon
import "swiper/swiper-bundle.css";
import '../App.css';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const home = () => {
        window.location.href = '/home';
    }

    const about = () => {
        window.location.href = '/#about';
    }

    const features = () => {
        window.location.href = '/#features';
    }



    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
                    <h1 className="sitename">Arecanut disease detection</h1>
                </a>
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="/" id="home" onClick={home}>Home</a></li>
                        <li><a href="/#about" onClick={about}>About</a></li>
                        <li><a href="#features" onClick={features}>Symptoms</a></li>
                        <li><Link to='/report'>Report</Link></li>
                        <li className="dropdown"><a href="/"><span>Status</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                            <ul>
                                <li><Link to='/paper-status'>Paper status </Link></li>
                            </ul>
                        </li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list" />
                </nav>
            </div>
        </header>

    )
}

export default Navbar
