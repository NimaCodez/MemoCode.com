import React from "react";
import '../styles/header.css';

const Header = ({ GetKeywords }) => {
    return (
        <header>
            <h1>DevMemos.co</h1>
            <input type={"text"} placeholder="Search memos..." onChange={ GetKeywords } ></input>
            <a href="/"> Login | Register </a>
        </header>
    )
}

export default Header;
