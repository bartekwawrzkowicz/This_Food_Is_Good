import React from 'react';
import '../styles/Button.scss';

const Button = props => (
    <button className={props.state ? "button non-active" : "button"} onClick={props.click}>zamknij</button>
)

export default Button;