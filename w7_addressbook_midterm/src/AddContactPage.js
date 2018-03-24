import React, {Component} from 'react';
import './AddContactPage.css';
import {Link} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AddContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            number: "",
            email: "",
            address: "",
            city: "",
            cityState: "",
            country: "",
            lastContactTime: new Date(),

            hasInputted: false,
            errorText: "",
            canSaveContact: false
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onNumberChange = this.onNumberChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onAddressChange = this.onAddressChange.bind(this);
        this.handleSubmitBtn = this.handleSubmitBtn.bind(this);
    }

    handleSubmitBtn(e) {
        //check firstName and last
        //if it's empty
        //set error text
        //set canSaveContact false

        //if it's not
        //save the contact and go back to homePage
        //set canSaveContact:true
        if (this.state.firstName === "" || this.state.lastName === "") {
            this.setState({
                errorText: "Name is required.",
                canSaveContact: false,
            })
        } else {
            this.props.onAddContact(this.state.firstName, this.state.lastName, this.state.number, this.state.email, this.state.address, this.state.city, this.state.cityState, this.state.country, this.state.lastContactTime);
            this.setState({
                canSaveContact: true,
            })
        }

        this.setState({
            firstName: "",
            lastName: "",
            number: "",
            email: "",
            address: "",
            city: "",
            cityState: "",
            country: "",
        });
    }

    onNameChange(e) {
        // e.preventDefault();
        if (e.target.name === "firstName") {
            this.setState({
                firstName: e.target.value,
                hasInputted: true,
            })
        }
        if (e.target.name === "lastName") {
            this.setState({
                lastName: e.target.value,
                hasInputted: true,
            })
        }
    }

    onNumberChange(e) {
        this.setState({
            number: e.target.value,
            hasInputted: true,
        })
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value,
            hasInputted: true,
        })
    }

    onAddressChange(e) {
        if (e.target.name === "address") {
            this.setState({address: e.target.value, hasInputted: true,});
        }
        if (e.target.name === "city") {
            this.setState({city: e.target.value, hasInputted: true});
        }
        if (e.target.name === "state") {
            this.setState({cityState: e.target.value, hasInputted: true});
        }
        if (e.target.name === "country") {
            this.setState({country: e.target.value, hasInputted: true});
        }
    }


    render() {
        return (
            <div className="AddContactPage">
                <div className="topBar">
                    <div className="backBtn-and-title">
                        <Link
                            to={'/'}
                            style={{textDecoration: 'none', color: "black"}}>
                            <button className="backBtn" type="button" name="ic-back">
                                <i className="material-icons">arrow_back</i>
                            </button>
                        </Link>
                        <h1>Add Contact</h1>
                    </div>
                    {this.state.canSaveContact ?
                        (<Link to={'/'}
                               onClick={this.handleSubmitBtn}>
                            <button className="submitBtn" value="Save"
                                    style={{display: this.state.hasInputted ? "block" : "none"}}
                                    onClick={this.handleSubmitBtn}
                            >Save</button>
                        </Link>)
                        :
                        <Link to={'/'}
                              onClick={(e) => e.preventDefault()}>
                            <button className="submitBtn" value="Save"
                                    style={{display: this.state.hasInputted ? "block" : "none"}}
                                    onClick={this.handleSubmitBtn}
                            >Save</button>
                        </Link>
                    }
                    
                </div>
                <div className="form-container">
                    <MuiThemeProvider>

                        <div className="input-name">
                            <i className="material-icons">account_circle</i>
                            <TextField
                                hintText="First Name"
                                floatingLabelText="First Name"
                                style={{width: 40 + "%", marginRight: 8 + "px"}}
                                name="firstName"
                                autoComplete="off"
                                onChange={this.onNameChange}
                                errorText={this.state.errorText}
                            />
                            <TextField
                                hintText="Last Name"
                                floatingLabelText="Last Name"
                                style={{width: 40 + "%"}}
                                name="lastName"
                                autoComplete="off"
                                onChange={this.onNameChange}
                                errorText={this.state.errorText}
                            />
                        </div>
                        <div className="input-number">
                            <i className="material-icons">call</i>
                            <TextField
                                hintText="1234567890"
                                floatingLabelText="Phone Number"
                                name="number"
                                type="number"
                                autoComplete="off"
                                onChange={this.onNumberChange}
                            />
                        </div>
                        <br/>
                        <div className="input-email">
                            <i className="material-icons">email</i>
                            <TextField
                                hintText="123@4566.com"
                                floatingLabelText="Email"
                                name="email"
                                type="email"
                                autoComplete="off"
                                onChange={this.onEmailChange}
                            />
                        </div>
                        <br/>


                        <div className="input-address">
                            <i className="material-icons">home</i>
                            <div className="input-address-formArea">
                                <TextField
                                    hintText="No12, sample Road"
                                    floatingLabelText="Detailed Address"
                                    name="address" type="text"
                                    autoComplete="off"
                                    onChange={this.onAddressChange}
                                />
                                <br/>
                                <TextField
                                    hintText="New York City"
                                    floatingLabelText="City"
                                    name="city" type="text"
                                    autoComplete="off"
                                    style={{width: 40 + "%", marginRight: 8 + "px"}}
                                    onChange={this.onAddressChange}
                                />
                                <TextField
                                    hintText="New York"
                                    floatingLabelText="State"
                                    name="state" type="text"
                                    autoComplete="off"
                                    style={{width: 40 + "%"}}
                                    onChange={this.onAddressChange}
                                />
                                <TextField
                                    hintText="United States"
                                    floatingLabelText="Country"
                                    name="country" type="text"
                                    autoComplete="off"
                                    onChange={this.onAddressChange}
                                />
                            </div>
                        </div>
                    </MuiThemeProvider>
                </div>


            </div>
        );
    };
}

export default AddContactPage;