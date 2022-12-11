import React, { Component } from "react";
import '../styles/header.css';

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>Memorios.co</h1>
                <input type={"text"} placeholder="Search memos..."></input>
            </header>
        )
    }
}