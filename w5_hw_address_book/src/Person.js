import React, {Component} from 'react';
import './Person.css';
import PersonHiddenBar from './PersonHiddenBar'
class Person extends Component {
    constructor(props){
        super(props);
        this.buttonClicked = this.buttonClicked.bind(this);
        this.onNameClick = this.onNameClick.bind(this);

        this.state={
            showBar: false
        };
    }

    onNameClick(){
        this.props.onNameClick(this.props.name);

        this.setState({
            showBar: !this.state.showBar
        });
    }

    componentDidUpdate(prevProps, prevState){

    }

    buttonClicked(e){
        e.preventDefault;
        console.log(e.target.value + " clicked");
    }



    render() {
        if(this.state.showBar){
            if(this.props.name !== this.props.onClickName){
                this.setState({showBar: !this.state.showBar});
            }
        }
        return (
            <div className="Person">
                <div className="name-bar" onClick = {this.onNameClick}>
                    <div className="avatar"></div>
                    <h2>{this.props.name}</h2>
                </div>
                <PersonHiddenBar showBar={this.state.showBar} name={this.props.name} number = {this.props.number} email={this.props.email} address={this.props.address}/>


            </div>

        );
    }
}

export default Person;
