import React, {Component} from 'react';
import './App.css';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [
                {
                    id: 1,
                    firstName: "Nan",
                    lastName: "Zhao",
                    number: "1234567890",
                    email: "nz591@nyu.edu",
                    address: "No.1555, Century Avenue",
                    city:"Shanghai",
                    cityState:"",
                    country:"China",
                    lastContactTime: new Date(2018,3,8)
                },
                {
                    id: 2,
                    firstName: "Di",
                    lastName: "Hu",
                    number: "1234567890",
                    email: "dh456@nyu.edu",
                    address: "No.4, yy Road",
                    city:"Chengdu",
                    cityState:"Sichuan",
                    country:"China",
                    lastContactTime: new Date(2018,2,8)
                },
                {
                    id: 3,
                    firstName: "Rune",
                    lastName: "Madson",
                    number: "012345",
                    email: "rune@madsen.edu",
                    address: "No.1165 København",
                    city:"Copenhagen",
                    cityState:"",
                    country:"Denmark",
                    lastContactTime: new Date(2018,3,5)
                },
                {
                    id: 4,
                    firstName: "Moon",
                    lastName: "JungHyun",
                    number: "939",
                    email: "jh.moon@nyu.edu",
                    address: "No.1, Gwanak-ro",
                    city:"Seoul",
                    cityState:"",
                    country:"Korea",
                    lastContactTime: new Date(2017,12,8)
                },
                {
                    id: 5,
                    firstName: "Yuxia",
                    lastName: "Yao",
                    number: "31274832",
                    email: "yy123@nyu.edu",
                    address: "No.3, xx Road",
                    city:"Shanghai",
                    cityState:"Shanghai",
                    country:"China",
                    lastContactTime: new Date(2017,6,10)
                },
                {
                    id: 6,
                    firstName: "Matthew",
                    lastName: "Belanger",
                    number: "33333333",
                    email: "mb1065@nyu.edu",
                    address: "No.721, Broadway",
                    city:"New York",
                    cityState:"NY",
                    country:"United States",
                    lastContactTime: new Date(2016, 12,31)
                },
            ]
        };

    }

    //The render prop receives all the same route props as the component render prop.
    render() {
        return (
            <Router>
                <div className="App">
                    {/*<Link to="/topics">Topics</Link>*/}

                    <Route exact path="/" render={(props) => {
                        console.log(props);
                        console.log(this.state.people);
                        return <HomePage people={this.state.people}/>}
                    }/>

                    <Route path="/contacts/:id" render={(props)=> {
                        const contact = this.state.people.find((c)=>
                            parseInt(props.match.params.id) === c.id
                        );
                        return <ContactPage contact = {contact}/>
                    }}
                    />
                </div>
            </Router>
        );
    }
}

export default App;

