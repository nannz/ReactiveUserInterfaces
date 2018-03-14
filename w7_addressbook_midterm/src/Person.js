import React, {Component} from 'react';
import './Person.css';
import {Link} from 'react-router-dom';

class Person extends Component {
    constructor(props) {
        super(props);
        this.onNameClick = this.onNameClick.bind(this);
        this.actionButtonClicked = this.actionButtonClicked.bind(this);
        this.handleSearchHighlight = this.handleSearchHighlight.bind(this);
    }

    onNameClick() {
        this.props.onNameClick(this.props.id);
    }

    actionButtonClicked(e) {
        e.preventDefault;
        console.log(this.props.id + "/ " + e.currentTarget.value + " clicked");
    }

    handleSearchHighlight(prop) {
        let output;
        let lowerCaseProp = prop.toLowerCase();
        if (this.props.searchText !== "" && lowerCaseProp.includes(this.props.searchText.toLowerCase())) {
            //highlight the text
            let pos = lowerCaseProp.search(this.props.searchText.toLowerCase());
            let firstPart = prop.slice(0, pos);
            let secondPart = "";
            if ((pos + this.props.searchText.length) !== prop.length) {
                secondPart = prop.slice(pos + this.props.searchText.length);
            }
            output = (
                <span>{firstPart}<span style={{color: '#00BFFF'}}>{this.props.searchText}</span>{secondPart}</span>);
        } else {
            output = (<span>{prop}</span>);
        }
        return output;
    }

    render() {

        let combinedAdd = this.props.address
            + (this.props.city !== "" ? (", " + this.props.city) : "")
            + (this.props.cityState !== "" ? (", " + this.props.cityState) : "")
            + (this.props.country !== "" ? (", " + this.props.country) : "");
        console.log(combinedAdd);
        let addressOutput = this.handleSearchHighlight(combinedAdd);


        return (
            <div className="Person">
                <div className="name-bar" onClick={this.onNameClick}>
                    <div className="avatar"></div>
                    {/*<h2>{this.props.firstName + " " + this.props.lastName}</h2>*/}
                    <h2>{(() => {
                        switch (this.props.sortType) {
                            case "First Name":
                                return this.props.firstName + " " + this.props.lastName;
                            case "Last Name":
                                return this.props.lastName + ", " + this.props.firstName;
                            default:
                                return this.props.firstName + " " + this.props.lastName;
                        }
                    })()}</h2>
                </div>

                <div className="PersonHiddenBar"
                    // style={{display: (this.state.showBar && this.props.onClickPersonID === this.props.id) ? 'block' : 'none'}}
                     style={{display: (this.props.showBar || this.props.searchToShow) ? 'block' : 'none'}}
                >
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
                            <p>{this.handleSearchHighlight(this.props.number)}</p></div>
                        <div className="email-line"><i className="material-icons md-18">email</i>
                            <p>{this.handleSearchHighlight(this.props.email)}</p>
                        </div>
                        <div className="address-line"><i className="material-icons md-18">home</i>
                            <p>{addressOutput}</p>
                            {/*<p>{*/}
                            {/*this.props.address*/}
                            {/*+ (this.props.city !== "" ? (", " + this.props.city) : "")*/}
                            {/*+ (this.props.cityState !== "" ? (", " + this.props.cityState): "")*/}
                            {/*+ (this.props.country !== "" ? (", " + this.props.country): "")}*/}
                            {/*</p>*/}
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Person;
