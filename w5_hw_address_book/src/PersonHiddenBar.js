import React, {Component} from 'react';
import './PersonHiddenBar.css';

class PersonHiddenBar extends Component {
    constructor(props) {
        super(props);


        this.state = {
            showBar: this.props.showBar
        };
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.showBar !== this.props.showBar) {
            this.setState({
                showBar: this.props.showBar
            });
        }
    }

    render() {
        if (this.state.showBar) {
            return (
                <div className="PersonHiddenBar">
                    <div className="action">
                        <button type="button" name="action-call" value="call" onClick={this.buttonClicked}><i className="material-icons">call</i><p>Call</p></button>
                        <button type="button" name="action-email" value="email" onClick={this.buttonClicked}><i className="material-icons">email</i><p>Email</p></button>
                        <button type="button" name="action-more" value="more" onClick={this.buttonClicked}><i className="material-icons">info_outline</i><p>More</p></button>
                    </div>
                    <div className="info">
                        <div className="number-line"><i className="material-icons md-18">call</i><p>{this.props.number}</p></div>
                        <div className="email-line"><i className="material-icons md-18">email</i><p>{this.props.email}</p></div>
                        <div className="address-line"><i className="material-icons md-18">info_outline</i><p>{this.props.address}</p></div>
                    </div>
                </div>
            );
        }else{
            return null;
        }
    }
}

export default PersonHiddenBar;
