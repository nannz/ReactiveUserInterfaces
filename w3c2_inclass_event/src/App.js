import React, {Component} from 'react';
import './App.css';
import Button from './Button'
import DisplayBox from './DisplayBox'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {count : 0};
        this.buttonHasClicked = this.buttonHasClicked.bind(this); //I cannot do this.buttonHasClicked() in both places, it will call the function
    }



    buttonHasClicked(){
        this.setState({
            count : this.state.count+1
        });
    }

    render() {
        return (
            <div className="App">
                <Button label="The Button" onClick={this.buttonHasClicked}/>
                <DisplayBox count ={this.state.count} />
            </div>
        );
    }
}

export default App;
