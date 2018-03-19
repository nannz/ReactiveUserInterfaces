import React, {Component} from 'react';
import './App.css';
import Form from './Form'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {id: 1, name: "person1", email: "first@nyu.edu"},
                {id: 2, name: "person2", email: "second@nyu.edu"},
                {id: 3, name: "person3", email: "third@nyu.edu"},
                {id: 4, name: "person4", email: "fourth@nyu.edu"}
            ]
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(name, email){
        let contactsCopy = this.state.contacts.slice();
        let id = this.state.contacts.length + 1;
        contactsCopy.push({id: {id}, name: name, email: email});
        this.setState({
            contacts: contactsCopy
        });
    }

    render() {
        let contactsEle = this.state.contacts.map(contact => {
            return <div key = {contact.id}><h2>{contact.name}</h2><p>{contact.email}</p></div>
        });
        return (
            <div className="App">
                {contactsEle}
                <Form onSubmit = {this.onSubmit}/>
            </div>
        );
    }
}

export default App;
