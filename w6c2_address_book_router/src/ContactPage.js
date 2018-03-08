import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

class ContactPage extends Component {
    render() {
        return (
            <div className="ContactPage">
                <h1>Test of the contact page</h1>
                <h2>
                    {this.props.contact.name}
                </h2>
                <p>{this.props.contact.email}</p>
                <Link to="/">Back to contact list</Link>
            </div>
        );
    }
}

export default ContactPage;