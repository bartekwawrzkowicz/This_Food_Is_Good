import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/ContactPage.scss';
import image1 from '../images/contact_image.jpeg';
import contactData from '../articles/text.json';

import instagramLogo from '../icons/logo-instagram.svg';
import facebookLogo from '../icons/logo-facebook.svg';
import linkedInLogo from '../icons/logo-linkedin.svg';
import githubLogo from '../icons/logo-github.svg';
import codeodriveLogo from '../images/logo/codeodrive-logo-black.png';
import youTubeLogo from '../icons/logo-youtube.svg';
import mailLogo from '../icons/mail-open-sharp.svg';


const ContactPage = () => {

    const data = contactData.text;

    return (
        <>
            <div className="contact-main row">
                <div className="contact-main__info">
                    <div className="contact-text">{data.contactText}</div>
                    <div className="contact-image">
                        <img src={image1} alt="about" />
                    </div>
                </div>

                <div className="contact-info">
                    <div className="contact-info__column first-column">
                        <div className="contact-info__name">Magda</div>
                        <div className="contact-info__social-link">
                            <Link to={{ pathname: "https://www.instagram.com/siema_tu_xiadza" }} target="_blank" >
                                <img src={instagramLogo} alt="instagram" />
                            </Link>

                            <Link to={{ pathname: "https://www.facebook.com/magdalena.ksiadzyna" }} target="_blank" >
                                <img src={facebookLogo} alt="facebook" />
                            </Link>

                            <Link to={{ pathname: "https://www.youtube.com/channel/UCmsiQSXUQcVbylog7cUz-qA" }} target="_blank" >
                                <img src={youTubeLogo} alt="youtube" />
                            </Link>

                            <Link to={{ pathname: "mailto: magdalena.ksiadzyna@gmail.com" }} target="_blank" >
                                <img src={mailLogo} alt="mail" title="napisz em@il" />
                            </Link>
                        </div>
                    </div>

                    <div className="contact-info__column second-column">

                        <div className="contact-info__name">Bartek</div>

                        <div className="contact-info__social-link">
                            <Link to={{ pathname: "https://www.instagram.com/bartekwawrzkowicz" }} target="_blank" >
                                <img src={instagramLogo} alt="instagram" />
                            </Link>

                            <Link to={{ pathname: "https://www.facebook.com/bartektymbark" }} target="_blank" >
                                <img src={facebookLogo} alt="facebook" />
                            </Link>

                            <Link to={{ pathname: "http://www.codeodrive.com" }} target="_blank" >
                                <img className="codeodrive-logo" src={codeodriveLogo} alt="logo" title="codeodrive" />
                            </Link>

                            <Link to={{ pathname: "https://github.com/bartekwawrzkowicz" }} target="_blank" >
                                <img src={githubLogo} alt="github" />
                            </Link>

                            <Link to={{ pathname: "https://www.linkedin.com/in/bartosz-wawrzkowicz-67a1bb1a6" }} target="_blank" >
                                <img src={linkedInLogo} alt="linkedIn" />
                            </Link>

                            <Link to={{ pathname: "mailto: codeodrive.com@gmail.com" }} target="_blank" >
                                <img src={mailLogo} alt="mail" title="napisz em@il" />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;