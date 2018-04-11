import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="navigation">
                    <div className="logo">LOGO</div>
                    <button className="menuBtn"/>
                    <ul>
                        <li>Nav 1</li>
                        <li>Nav 2</li>
                        <li>Nav 3</li>
                    </ul>
                </header>
                <div className="wrapper-main">
                    <h1>The Title</h1>
                    <div className="wrapper-content">
                        <aside className="sideBar">SideBar</aside>
                        <main className="main">Main</main>
                    </div>
                    <div className="wrapper-other">
                        <ul>
                            <li>Project 1</li>
                            <li>Project 2</li>
                            <li>Project 3</li>
                            <li>Project 4</li>
                        </ul>
                    </div>
                </div>
                <footer>This is the footer</footer>
            </div>
        );
    }
}

export default App;
