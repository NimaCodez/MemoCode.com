import React, { Component } from "react";
import '../styles/button.css';

class ContinueButton extends Component {
    render() {
        return (
            <a href={this.props.link} className="memo-btn">
                Continue Reading <i className="fa-solid fa-arrow-right"></i>
            </a>
        )
    }
}

export default ContinueButton;
