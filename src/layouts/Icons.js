import React from 'react';

import '../styles/Icons.scss';

import foodIcon from '../icons/food.png';
import dogIcon from '../icons/dog.png';
import instrumentIcon from '../icons/instrument.png';
import travelIcon from '../icons/travel.png';

const foodIconText = "Jesteśmy wielkimi miłośnikami dobrego jedzenia. Gdziekolwiek się wybieramy staramy się poznać lokalne przysmaki i smak regionalnego piwa";
const dogIconText = "Jesteśmy wielkimi miłośnikami psów. Posiadamy szczeniaka jamnika, który jest hybrydą krótkowłosego z szorstkowłosym i ma na imię Ryszard";
const instrumentIconText = "Jesteśmy muzykami i pałamy wielką pasją do grania na różnych instrumentach oraz w różnych zespołach";
const travelIconText = "Jesteśmy ogromnymi wielbicielami podróży. Staramy się wyjeżdżać / wylatywać kiedy to tylko możliwe i możliwie jak najdalej";


const Icons = () => {

    return (
        <>
            <div className="icon-column">
                <div className="icon-icons">
                    <img src={foodIcon} alt="food-icon" />
                </div>
                <div className="icon-text">
                    {foodIconText}
                </div>
            </div>

            <div className="icon-column">
                <div className="icon-icons">
                    <img src={dogIcon} alt="dog-icon" />
                </div>
                <div className="icon-text">
                    {dogIconText}
                </div>
            </div>

            <div className="icon-column">
                <div className="icon-icons">
                    <img src={instrumentIcon} alt="instrument-icon" />
                </div>
                <div className="icon-text">
                    {instrumentIconText}
                </div>
            </div>

            <div className="icon-column">
                <div className="icon-icons">
                    <img src={travelIcon} alt="travel-icon" />
                </div>
                <div className="icon-text">
                    {travelIconText}
                </div>
            </div>
        </>
    );
}

export default Icons;