import React, {Component} from 'react';
import './Person.css';
import {Link} from 'react-router-dom';

class Person extends Component {
    constructor(props) {
        super(props);
        this.onNameClick = this.onNameClick.bind(this);
        this.actionButtonClicked = this.actionButtonClicked.bind(this);
        this.state = {
            showBar: false
        };
    }

    onNameClick() {
        this.props.onNameClick(this.props.id);
        this.setState({
            showBar: !this.state.showBar
        });
    }

    actionButtonClicked(e) {
        e.preventDefault;
        console.log(this.props.id + "/ " + e.currentTarget.value + " clicked");
    }

    render() {

        return (
            <div className="Person">
                <div className="name-bar" onClick={this.onNameClick}>
                    <div className="avatar"></div>
                    {/*<h2>{this.props.firstName + " " + this.props.lastName}</h2>*/}
                    <h2>{(() => {
                        switch (this.props.sortType) {
                            case "firstName":
                                return this.props.firstName + " " + this.props.lastName;
                            case "lastName":
                                return this.props.lastName + ", " + this.props.firstName;
                            default:
                                return this.props.firstName + " " + this.props.lastName;
                        }
                    })()}</h2>
                </div>


                {/*<PersonHiddenBar showBar={this.state.showBar} name={this.props.name} number = {this.props.number} email={this.props.email} address={this.props.address}/>*/}
                <div className="PersonHiddenBar"
                     style={{display: (this.state.showBar && this.props.onClickPersonID === this.props.id) ? 'block' : 'none'}}>
                    <div className="action">

                        <button type="button" name="action-call" value="call" onClick={this.actionButtonClicked}><i
                            className="material-icons">call</i><p>Call</p></button>
                        <button type="button" name="action-email" value="email" onClick={this.actionButtonClicked}><i
                            className="material-icons">email</i><p>Email</p></button>
                        <button type="button" name="action-more" value="more" onClick={this.actionButtonClicked}><i
                            className="material-icons">info_outline</i>
                            <div></div>
                            <Link
                                to={'/contacts/' + this.props.id}
                                style={{textDecoration: 'none', color: "black"}}>More</Link>
                        </button>
                    </div>
                    <div className="info">
                        <div className="number-line"><i className="material-icons md-18">call</i>
                            <p>{this.props.number}</p></div>
                        <div className="email-line"><i className="material-icons md-18">email</i>
                            <p>{this.props.email}</p></div>
                        <div className="address-line"><i className="material-icons md-18">info_outline</i>
                            <p>{this.props.address
                            + (this.props.city !== "" ? (", " + this.props.city) : "")
                            + (this.props.cityState !== "" ? (", " + this.props.cityState): "")
                            + (this.props.country !== "" ? (", " + this.props.country): "")}</p></div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Person;
