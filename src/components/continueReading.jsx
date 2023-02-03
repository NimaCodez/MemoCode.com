import React from "react";
import '../styles/button.css';

const ContinueButton = ({ link, clickHandler }) => {
    return (
        <a href={link} onClick={clickHandler} className="memo-btn">
            Continue Reading <i className="fa-solid fa-arrow-right"></i>
        </a>
    )
}

export default ContinueButton;
