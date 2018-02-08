import React, {Component} from 'react';
import './App.css';
import Button from './Button'
import DisplayBox from './DisplayBox'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedLabel: "First", count: 1};

        this.buttonHasClicked = this.buttonHasClicked.bind(this); //I cannot do this.buttonHasClicked() in both places, it will call the function
    }


    buttonHasClicked(currentLabel) {
        this.setState({
            selectedLabel: currentLabel
        });
    }

    render() {
        if (this.state.selectedLabel === "First") {
            return (
                <div className="App">
                    <div className="BtnGroup">
                        <Button label="First" onClick={this.buttonHasClicked} isSelected={true}/>
                        <Button label="Second" onClick={this.buttonHasClicked} isSelected={false}/>
                        <Button label="Third" onClick={this.buttonHasClicked} isSelected={false}/>
                    </div>
                    <DisplayBox currentBtn={this.state.selectedLabel}/>
                </div>
            );
        } else if (this.state.selectedLabel === "Second") {
            return (
                <div className="App">
                    <div className="BtnGroup">
                        <Button label="First" onClick={this.buttonHasClicked} isSelected={false}/>
                        <Button label="Second" onClick={this.buttonHasClicked} isSelected={true}/>
                        <Button label="Third" onClick={this.buttonHasClicked} isSelected={false}/>
                    </div>
                    <DisplayBox currentBtn={this.state.selectedLabel}/>
                </div>
            );
        } else if (this.state.selectedLabel === "Third") {
            return (
                <div className="App">
                    <div className="BtnGroup">
                        <Button label="First" onClick={this.buttonHasClicked} isSelected={false}/>
                        <Button label="Second" onClick={this.buttonHasClicked} isSelected={false}/>
                        <Button label="Third" onClick={this.buttonHasClicked} isSelected={true}/>
                    </div>
                    <DisplayBox currentBtn={this.state.selectedLabel}/>
                </div>
            );
        }

    }
}

export default App;
