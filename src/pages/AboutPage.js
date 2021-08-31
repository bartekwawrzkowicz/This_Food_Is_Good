import React from 'react';
import aboutImage from '../images/about-image.jpg';
import '../styles/AboutPage.scss';

const text = "Cześć Wam. Jesteśmy parą muzyków zakręconych na punkcie podróży, również pod względem kulinarnym. Gdziekolwiek wyjedziemy, staramy się próbować jak najwięcej lokalnych przysmaków i napitków. Na tej stronie postaramy się Wam zrecenzować nasze ulubione miejsca, restauracje, potrawy i napoje. Mamy nadzieję, że ten blog przypadnie Wam do gustu i będziecie tu co jakiś czas zaglądać co zmotywuje nas do aktualizowania treści. Tymczasem..."

const AboutPage = () => {
    return (
        <>
            <div className="homepage-column row">
                <div className="homepage-text">{text}</div>
                <div className="homepage-image">
                    <img src={aboutImage} alt="about" />
                </div>
            </div>
        </>
    );
}

export default AboutPage;