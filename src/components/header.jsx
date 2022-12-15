import React from "react";
import '../styles/header.css';

const Header = ({ FilterTitles }) => {
    return (
        <header>
            <h1>DevMemos.co</h1>
            <input type={"text"} placeholder="Search memos..." onChange={FilterTitles} ></input>
        </header>
    )
}

export default Header;
