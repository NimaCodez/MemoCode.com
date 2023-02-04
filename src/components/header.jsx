import React from "react";
import '../styles/header.css';
import { Link } from 'react-router-dom';

const Header = ({ GetKeywords }) => {
    return (
        <header>
            <h1>DevMemos.co</h1>
            <input type={"text"} placeholder="Search memos..." onChange={ GetKeywords } ></input>
            <Link to={'/login'}> Login | Register </Link>
        </header>
    )
}

export default Header;
