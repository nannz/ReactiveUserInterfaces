import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class PersonDetail extends Component {
    //this.props.match.params.id
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            person:{}
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        fetch('https://swapi.co/api/people/' + id)
            .then(response=>{
                return response.json();
            })
            .then(json=>{
                this.setState({
                    isLoading: false,
                    person: json
                });
                fetch(json.homeworld)
                    .then(response=>{
                        return response.json();
                    })
                    .then(json=>{
                        console.log(json);
                        let copy = Object.assign({}, this.state.person);
                        copy.homeworld = json.name;
                        this.setState({
                            person: copy
                        })
                    })
            });

    }

    render(){

        if(this.state.isLoading){
            return(
                <div className="PersonDetail">
                    <h1>Person is loading...</h1>
                </div>
            )
        }else {

            console.log(this.state.person);
            //name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair"
            //homeworld
            return (
                <div className="PersonDetail">
                    <h1>{this.state.person.name}!</h1>
                    <ul>
                        <li>Height: {this.state.person.height}</li>
                        <li>Mass: {this.state.person.mass}</li>
                        <li>Hair Color: {this.state.person.hair_color}</li>
                        <li>Skin Color:  {this.state.person.skin_color}</li>
                    </ul>
                    <p>HomeWorld: {this.state.person.homeworld}</p>
                    <Link to='/'>Back to the list of people</Link>
                </div>
            )
        }
    }
}

export default PersonDetail;