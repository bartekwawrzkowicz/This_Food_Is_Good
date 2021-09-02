import React from 'react';

import '../styles/Construction.scss';

import UnderConstruction from '../images/under.gif';

const ContactPage = () => {
    return (
        <>
            <div className="construction-column">
                <div className="recommendations-under-construction">
                    <img src={UnderConstruction} alt="under" />
                </div>
                <div className="recommendations-text">Tutaj powstaje podstrona, dzięki której będziecie się mogli z nami skontaktować</div>
            </div>
        </>
    );
}

export default ContactPage;