import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state={
            animating: false,
        }
    }

    onToggleAnimation(){
        //this.props.onClick(this.props.name);
        this.setState({
            animating:!this.state.animating,
        })
    }



    render() {
        return (
            <button className={this.state.animating ? 'Button animating' : 'Button'} onClick={this.onToggleAnimation.bind(this)}>
                {this.props.name}
            </button>
        );
    }
}

export default Button;
