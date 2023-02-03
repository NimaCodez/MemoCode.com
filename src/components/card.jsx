import React from "react";
import ContinueButton from "./continueReading";
import '../styles/card.css';

const Card = ({ icon, title, intro, banner, handleClick, link }) => {
    return (
        <div className="card-wrapper">
            <div className="card-header">
                    <i className={icon}></i>
                    <h2 className="memo-title">{title}</h2>
            </div>
            <img src={banner} />
            <div className="card-body">
                <p>{intro}</p> <ContinueButton link={link} clickHandler={handleClick} className="read-button" />
            </div>
        </div>
    )
}

export default Card;
