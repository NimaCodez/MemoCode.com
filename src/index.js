import React, { Component } from "react";
import Header from "./components/header";
import './styles/index.css';
import Card from "./components/card";
import { createRoot } from 'react-dom/client';
import Memos from './db.json';

class App extends Component {

    state = {
        filteredMemos: Memos
    }

    GetKeywords = (event) => {
        let keywords = event.target.value;
        const filtered = Memos.filter((item) => {
            return item.title.toLowerCase().includes(keywords.toLowerCase()) || item.bodyText.toLowerCase().includes(keywords.toLowerCase())
        })

        this.setState({
            filteredMemos: filtered
        })
    }

    render() {
        return (
            <div>
                <Header FilterTitles={this.GetKeywords}/>
                <div className="wrapper">
                    {this.state.filteredMemos.map(memo => (
                        <Card icon={memo.icon} title={memo.title} bodyText={memo.bodyText} key={memo.Id} />
                    ))}
                </div>
            </div>
        )
    }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);