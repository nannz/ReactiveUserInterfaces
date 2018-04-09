import React, {Component} from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom'
class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            people:[]
        }
    }
    componentDidMount(){
        fetch('https://swapi.co/api/people/')
            .then(response=>{
                return response.json();
            })
            .then(json=>{
                console.log(json.results)
                this.setState({
                    isLoading: false,
                    people: json.results
                })
            })
    }
    render(){
        if(this.state.isLoading){
            return(
                <div className="HomePage">
                    <h1>Loading...</h1>
                </div>
            )
        }else{
            const listOfPeople = this.state.people.map((person)=>{
                const splitUrl = person.url.split('/');
                const id = splitUrl[splitUrl.length-2];
                return(
                    <Link key={person.url} to={"/people/"+id}>{person.name}</Link>
                );
            });


            return(
            <div className="HomePage">
                <h1>I am the Home Page!</h1>
                <h1>I am also the page of the list of people in Star Wars!</h1>
                <div className='listOfPeople'>{listOfPeople}</div>
            </div>
        )}

    }
}

export default HomePage;