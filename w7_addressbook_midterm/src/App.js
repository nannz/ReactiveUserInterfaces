import React, {Component} from 'react';
import './App.css';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddContactPage from "./AddContactPage";
class App extends Component {
    constructor(props) {
        super(props);

        let initialState = localStorage.getItem('appData');
        console.log(JSON.parse(initialState));
        if (initialState) {
            this.state = JSON.parse(initialState);
        } else {


            this.state = {
                people:  [
                    {
                        id: 1,
                        firstName: "Nan",
                        lastName: "Zhao",
                        number: "1234567890",
                        email: "nz591@nyu.edu",
                        address: "No.1555, Century Avenue",
                        city: "Shanghai",
                        cityState: "",
                        country: "China",
                        lastContactTime: new Date(2018, 3, 8)
                    },
                    {
                        id: 2,
                        firstName: "Di",
                        lastName: "Hu",
                        number: "1234567890",
                        email: "dh456@nyu.edu",
                        address: "No.4, yy Road",
                        city: "Chengdu",
                        cityState: "Sichuan",
                        country: "China",
                        lastContactTime: new Date(2018, 2, 8)
                    },
                    {
                        id: 3,
                        firstName: "Rune",
                        lastName: "Madson",
                        number: "012345",
                        email: "rune@madsen.edu",
                        address: "No.1165 København",
                        city: "Copenhagen",
                        cityState: "",
                        country: "Denmark",
                        lastContactTime: new Date(2018, 3, 5)
                    },
                    {
                        id: 4,
                        firstName: "Moon",
                        lastName: "JungHyun",
                        number: "939",
                        email: "jh.moon@nyu.edu",
                        address: "No.1, Gwanak-ro",
                        city: "Seoul",
                        cityState: "",
                        country: "Korea",
                        lastContactTime: new Date(2017, 12, 8)
                    },
                    {
                        id: 5,
                        firstName: "Yuxia",
                        lastName: "Yao",
                        number: "31274832",
                        email: "yy123@nyu.edu",
                        address: "No.3, xx Road",
                        city: "Shanghai",
                        cityState: "Shanghai",
                        country: "China",
                        lastContactTime: new Date(2017, 6, 10)
                    },
                    {
                        id: 6,
                        firstName: "Matthew",
                        lastName: "Belanger",
                        number: "33333333",
                        email: "mb1065@nyu.edu",
                        address: "No.721, Broadway",
                        city: "New York",
                        cityState: "NY",
                        country: "United States",
                        lastContactTime: new Date(2016, 12, 31)
                    },
                    {
                        id: 7,
                        firstName: "Miyake",
                        lastName: "Kazumaru",
                        number: "2565638364",
                        email: "issey@miyake.com",
                        address: "No.16, E Ontario",
                        city: "Hiroshima",
                        cityState: "Hiroshima Prefecture",
                        country: "Japan",
                        lastContactTime: new Date(2014, 12, 31)
                    },
                    {
                        id: 8,
                        firstName: "Igino",
                        lastName: "Zello",
                        number: "03631767459",
                        email: "igino@zello.com",
                        address: "Via Pisanelli 12",
                        city: "Benestare",
                        cityState: "Reggio Calabria",
                        country: "Italy",
                        lastContactTime: new Date(2004, 12, 31)
                    },
                    {
                        id: 9,
                        firstName: "Luke",
                        lastName: "Carew",
                        number: "(08) 9082 3254",
                        email: "luke@hotmail.com",
                        address: "93 Carnegie Avenue",
                        city: "Kojarena",
                        cityState: "Western Australia",
                        country: "Australia",
                        lastContactTime: new Date(2010, 5, 31)
                    },
                    {
                        id: 10,
                        firstName: "Jeffrey",
                        lastName: "Lehman",
                        number: "+86 (21) 20595009",
                        email: "jsl569@nyu.edu",
                        address: "CAV 1401",
                        city: "Bronxville",
                        cityState: "New York",
                        country: "United States",
                        lastContactTime: new Date(2014, 9, 1)
                    }
                ]
            };
        }

        this.handleAddContact = this.handleAddContact.bind(this);
    }

    handleAddContact(firstName, lastName, number, email,address,city,cityState,country, lastContactTime){
        let peopleCopy = this.state.people.slice();
        let newId = this.state.people.length + 1;
        peopleCopy.push({id: newId, firstName: firstName, lastName:lastName, number:number, email: email, address:address,city:city,cityState:cityState, country:country, lastContactTime:lastContactTime});
        this.setState({
            people: peopleCopy
        });
    }

    componentDidUpdate() {
        console.log("update appjs!");
        console.log(JSON.stringify(this.state));
        localStorage.setItem('appData', JSON.stringify(this.state));//let object into strings.
    }


    //The render prop receives all the same route props as the component render prop.
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" render={(props) => {
                        return <HomePage people={this.state.people}/>
                    }
                    }/>

                    <Route path="/contacts/:id" render={(props) => {
                        const contact = this.state.people.find((c) =>
                            parseInt(props.match.params.id) === c.id
                        );
                        return <ContactPage contact={contact}/>
                    }}
                    />

                    <Route path="/add-contact" render={(props) => {
                        return <AddContactPage onAddContact={this.handleAddContact}/>
                    }}
                    />
                </div>
            </Router>
        );
    }
}

export default App;

