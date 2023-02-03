import React, { memo, useEffect, useState } from "react";
import Header from "./components/header";
import './styles/index.css';
import Card from "./components/card";
import { createRoot } from 'react-dom/client';
// import Memos from './db.json';
import { FetchData } from "./hooks/getMemos.hook";

const App = () => {

    async function GetData() {
        const data = await FetchData('https://devmemos.iran.liara.run/memos');
        const { response } = data;
        setMemos(response);
    }
    
    const [memos, setMemos] = useState([]);

    useEffect(() => {
        GetData()
    }, [])


    const GetKeywords = (event) => {
        let keywords = event.target.value;
        
        if (keywords == "")  {
            console.log('in if');
            return setMemos(memos);
        }

        const filtered = memos.filter((item) => {
            return item.title.toLowerCase().includes(keywords.toLowerCase()) || item.content.toLowerCase().includes(keywords.toLowerCase())
        })

        console.log('memos: ', memos)
        console.log('fil: ', filtered)
        setMemos(filtered)
        console.log('memos: ', memos)
    }

    return (
        <>
            <Header GetKeywords={GetKeywords} />
            <div className="wrapper">
                {
                    memos.map((memo, index) => (
                        <Card key={index} intro={memo.intro} title={memo.title} banner={memo.banner} link={memo.memId}/>
                    ))
                }
            </div>
        </>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);