import React from "react";
// import {  } from "react-dom";
import ReactDOM from "react-dom";
import Header from "./components/header";
import './styles/index.css';
import Card from "./components/card";

const App = () => {
    let icon = 'fa-solid fa-book';
    const bodyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book";

    let Data = [
        {
            Id: 1,
            title: 'MemoBook With React!',
            icon,
            bodyText
        },
        {
            Id: 2,
            title: 'MemoBook With Vue!',
            icon,
            bodyText
        },
        {
            Id: 3,
            title: 'Back-end Development With Express',
            icon,
            bodyText
        },
        {
            Id: 4,
            title: 'Nodejs Runtime!',
            icon,
            bodyText
        }
    ]
    
    return (
        <div>
            <Header/>
            <div className="wrapper">
                {Data.map(memo => (
                    <Card icon={memo.icon} title={memo.title} bodyText={memo.bodyText} key={memo.Id}/>
                ))}
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))