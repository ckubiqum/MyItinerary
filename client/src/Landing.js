import React from 'react';
import logo from './assets/MYtineraryLogo.png';
import arrow from './assets/circled-right-2.png';
import home from './assets/homeIcon.png';
import './Landing.css';
import { Link } from 'react-router-dom';


function Landing() {
    return (
        <div className="Landing">
            <img src={logo} className="Landing-logo" alt="logo" />

            <p>Find your perfect trip, designed by insiders who know and love their cities.</p>

            <h1>Start browsing</h1>
            <Link to="/cities">
                <img src={arrow} className="Landing-arrow" alt="arrow" />
            </Link>
            <p>Want to design your own MYtinerary?</p>
            <img src={home} className="home-icon" alt="home" />
            <a className="login" href="/login">Login</a>
            <a className="createAccount" href="/create">Create account</a>

        </div>
    );
}
export default Landing