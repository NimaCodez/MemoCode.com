import React, { useEffect, useState } from "react";
import './styles/index.css';
import Header from "./components/header";
import FetchData from "./hooks/getMemos.hook";
import Login from "./components/login";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MemoWrapper from "./components/memoWrapper";

const App = () => {

    async function GetData() {
        const data = await FetchData('https://devmemos.iran.liara.run/memos');
        const { response } = data;
        setMemos(response);
        setFiltred(response);
    }

    const [memos, setMemos] = useState([]);

    useEffect(() => {
        GetData()
    }, [])

    const [filtered, setFiltred] = useState([]);

    const GetKeywords = (event) => {
        let keywords = event.target.value;

        if (keywords == "") {
            return setFiltred(memos);
        }

        const filtered = memos.filter((item) => {
            return item.title.toLowerCase().includes(keywords.toLowerCase()) || item.content.toLowerCase().includes(keywords.toLowerCase())
        })

        setFiltred(filtered);
    }

    return (
        <Router>
            <Header GetKeywords={GetKeywords} />
            <Routes>
                <Route path="/" element={ <MemoWrapper filtered={filtered} /> } />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);