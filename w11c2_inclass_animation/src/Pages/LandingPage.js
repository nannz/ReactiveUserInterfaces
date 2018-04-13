import React, {Component} from 'react';
import './LandingPage.css';
import {Link} from 'react-router-dom'
import {CSSTransition} from "react-transition-group";

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nextPageAnimating:false
        }
    }

    toggleAnimation(){
        this.setState({
            nextPageAnimating:true
        })
    }


    render() {
        return (
            <div className='LandingPage'>
                <h1>MY.CONSTELLATION</h1>
                <Link to="/generate">
                    <button onClick={this.toggleAnimation.bind(this)}>START</button>
                </Link>
            </div>

        );
    }
}

export default LandingPage;
