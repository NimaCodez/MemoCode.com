import React from "react";
import '../styles/header.css';
import { Link } from 'react-router-dom';

const Header = ({ GetKeywords }) => {
    return (
        <header>
            <h1><Link to="/" className="header-link">DevMemos.co</Link></h1>
            <input type={"text"} placeholder="Search memos..." onChange={ GetKeywords } ></input>
            <Link to={'/register'} className='login-btn'> Login | Register </Link>
        </header>
    )
}

export default Header;
