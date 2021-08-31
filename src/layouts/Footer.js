import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.scss';
import logo from '../images/logo/codeodrive - logo.png';

import instagramLogo from '../icons/instagram.png';
import facebookLogo from '../icons/facebook.png';

const Footer = () => {
    return (
        <div className="footer block">

            <div className="footer-logo block block-of-3">
                <Link to={{ pathname: "http://www.codeodrive.com" }} target="_blank" >
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className="footer-info block block-of-3">
                <p class="footer-info__paragraph">&copy; 2021 <strong>codeodrive</strong>. All rights reserved.<br></br>Graphic &amp; web desing by BW &amp; MK.</p>
            </div>

            <div className="footer-icons block block-of-3">
                <Link to={{ pathname: "https://www.instagram.com/siema_tu_xiadza" }} target="_blank" >
                    <img src={instagramLogo} alt="instagram" />
                </Link>

                <Link to={{ pathname: "https://www.facebook.com/magdalena.ksiadzyna" }} target="_blank" >
                    <img src={facebookLogo} alt="facebook" />
                </Link>
            </div>

        </div>
    );
}

export default Footer;