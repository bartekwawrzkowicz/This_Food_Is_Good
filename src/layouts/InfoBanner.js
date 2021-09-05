import React, { useEffect, useState } from 'react';
import '../styles/InfoBanner.scss';


const InfoBanner = () => {

    const [show, setShow] = useState(true);

    useEffect(() => {
        let banner = setTimeout(() => setShow(false), 5000);
        return () => {
            clearTimeout(banner);
        }
    })

    return (
        show ? <div className="info-banner row">Kliknij w nazwę restauracji</div> : null
    )

}


export default InfoBanner;