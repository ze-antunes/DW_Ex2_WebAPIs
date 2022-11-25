import React from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import logo from '../images/spotify_logo.png';

function Header() {

    const handleLogout = async () => {
        await Cookies.remove('spotifyAuthToken');
        window.location.reload();
    }

    return (
        <div>
            <ul className='header'>
                <li className='header__navigation'><Link to="/"><img className='header__logo' src={logo} alt=""/></Link></li>
                <li className='header__navigation' style={{ float: "right" }}><Link to="/" onClick={handleLogout}>Log out</Link></li>
            </ul>
        </div>
    )
}

export default Header
