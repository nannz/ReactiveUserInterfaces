/**
 * Created by zhaonan on 2018/2/7.
 */
import React, { Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date(), counter: 0}; //The only place where you can assign this.state directly is the constructor.
    }

    // We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.
    componentDidMount(){
        this.timerID = setInterval(
            // arrow function expression here
            () => this.tick(), this.props.timeStep); // () => this.tick(), 1000)
    }

    //We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState(
            {date: new Date()}
        );

        this.setState(
            // (prevState,props)=>({counter: prevState.counter + props.increment})
            function(prevState, props) {
                return {
                    counter: prevState.counter + props.increment
                };
            }
        );
    }

    render() {
        return (
            <div className="Clock">
                <h2>Here is a {this.props.clockName} clock</h2>
                {/*State is similar to props, but it is private and fully controlled by the component.*/}
                <p>{this.state.date.toLocaleTimeString()}.</p>

                <h3>Here is a counter</h3>
                <p>{this.state.counter}</p>
            </div>
        );
    }
}

export default Clock;
