import React, { Component } from "react";
import ContinueButton from "./continueReading";
import '../styles/card.css';

class Card extends Component {
    render() {
        return (
            <div className="card-wrapper">
                <div className="card-header">
                    <i className={this.props.icon}></i>
                    <h2 className="memo-title">{this.props.title}</h2>
                </div>
                <div className="card-body">
                    <p>{this.props.bodyText}</p> <ContinueButton link={"/"} className="read-button"/>
                </div>
            </div>
        )
    }
}

export default Card;
