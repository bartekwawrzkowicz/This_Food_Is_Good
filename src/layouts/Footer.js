import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.scss';

import logo from '../images/logo/codeodrive - logo.png';


const Footer = () => {
    return (
        <div className="footer block">

            <div className="footer-logo block block-of-3">
                <Link to={{ pathname: "http://www.codeodrive.com" }} target="_blank" >
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <div className="footer-info block block-of-3">
                <p class="footer-info__paragraph">&copy; 2021 <strong>codeodrive</strong>. All rights reserved. </p>
            </div>

            <div className="footer-info__second-paragraph block block-of-3">
                <p>designed by BW &amp; MK.</p>
            </div>

        </div>
    );
}

export default Footer;