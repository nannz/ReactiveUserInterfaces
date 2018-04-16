import React, {Component} from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import Button from 'antd/lib/button';
import { Spin } from 'antd';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            people: []
        };
        this.loadPeopleFunc = this.loadPeopleFunc.bind(this);
    }

    loadPeopleFunc(page) {
        fetch('https://swapi.co/api/people/?page=' + page)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Something went wrong ...");
                }
            })
            .then(json => {
                const newPeople = this.state.people.concat(json.results);
                this.setState({
                    isLoading: false,
                    people: newPeople//json.results
                })
            })
    }

    render() {

        const listOfPeople = this.state.people.map((person) => {
            const splitUrl = person.url.split('/');
            const id = splitUrl[splitUrl.length - 2];
            return (
                <p><Link key={person.url} to={"/people/" + id}>{person.name}</Link></p>
            );
        });


        return (
            <div className="HomePage">
                {/*<h1>I am the Home Page!</h1>*/}
                <h1>I am also the page of the list of people in Star Wars!</h1>
                <Button type="primary">Ant Button</Button>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadPeopleFunc}
                    hasMore={true}
                    loader={<div className="loader" key={0}><Spin /></div>}
                >
                    {listOfPeople}
                </InfiniteScroll>

            </div>
        )
    }


}

export default HomePage;