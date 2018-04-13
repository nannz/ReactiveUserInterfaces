import React, {Component} from 'react';
import './MakingPage.css';
import ThreeScene from '../Components/ThreeScene'
import {Link} from 'react-router-dom'
import {CSSTransition} from "react-transition-group";

class MakingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            birthday:new Date()
        }
    }
    onChangeInput(e){
        this.setState({
            birthday: new Date(e.target.value)
        });
    }


    render() {
        return (
            <div className='MakingPage'>
                <aside className='sidebar'>
                    <h1>My.Constellation</h1>
                    <p>First, please tell me your birthday.</p>
                    <p>Your birthday will be interpreted with Chinese Daoism Bagua philosophy.</p>
                    <input type="date" classID="bday" name="bday" min="1917-12-31" max="2017-12-31"
                           onChange={this.onChangeInput.bind(this)} required/>
                </aside>
                <ThreeScene/>
            </div>

        );
    }
}

export default MakingPage;
