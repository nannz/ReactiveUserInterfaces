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
        const buttons = [
            {label: "First", onClick: this.buttonHasClicked, isSelected: this.state.selectedLabel === "First"},
            {label: "Second", onClick: this.buttonHasClicked, isSelected: this.state.selectedLabel === "Second"},
            {label: "Third", onClick: this.buttonHasClicked, isSelected: this.state.selectedLabel === "Third"}
        ];

        const buttonComponents = buttons.map((button, id) => {
            return (
                <Button label={button.label} onClick={button.onClick}
                        isSelected={button.isSelected}/>
            );
        });
        return (
            <div className="App">


                <div className="BtnGroup">
                    {buttonComponents}
                    {/*<Button label="First" onClick={this.buttonHasClicked}*/}
                            {/*isSelected={this.state.selectedLabel === "First"}/>*/}
                    {/*<Button label="Second" onClick={this.buttonHasClicked}*/}
                            {/*isSelected={this.state.selectedLabel === "Second"}/>*/}
                    {/*<Button label="Third" onClick={this.buttonHasClicked}*/}
                            {/*isSelected={this.state.selectedLabel === "Third"}/>*/}
                </div>

                <DisplayBox currentBtn={this.state.selectedLabel}/>
            </div>
        );


    }
}

export default App;
