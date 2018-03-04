import React, {Component} from 'react';
import Tweet from './Tweet'
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.sortAsc = this.sortAsc.bind(this);
        this.sortDesc = this.sortDesc.bind(this);
        this.sortByName = this.sortByName.bind(this);
        this.sortByCountry = this.sortByCountry.bind(this);
        this.onSearch = this.onSearch.bind(this);


        this.sortFunction = this.sortFunction.bind(this);

        this.state = {
            sort: 'asc',
            sortType: 'name',
            search: '',
            tweets: [
                {name: "nan", body:"this is the first tweet.", country:"China"},
                {name: "ada", body:"this is the second tweet.", country:"US"},
                {name: "prudence", body:"this is the third tweet.", country:"Japan"},
                {name: "jennifer", body:"this is the fourth tweet.",country:"UK"}
            ]
        }
    }

    onSearch(e){
        this.setState({
            search: e.target.value
        })
    }
    sortFunction(tweetsCopy, sortOrder, sortType){

        return tweetsCopy;
    }
    sortAsc(){
        this.setState({sort:'asc'})
    }

    sortDesc(){
        this.setState({sort:'desc'})
    }

    sortByName(){
        this.setState({sortType:'name'})
    }
    sortByCountry(){
        this.setState({sortType:'country'})
    }

    render() {
        let tweetsCopy = this.state.tweets.slice();

        if(this.state.search !== ''){
            tweetsCopy = tweetsCopy.filter(tweet => {
                return tweet.name.match(this.state.search);
            })
        }

        tweetsCopy = this.sortFunction(tweetsCopy, this.state.sort, this.state.sortType);

        if(this.state.sortType === 'name'){
            tweetsCopy.sort(function compareName(a,b){
                if(a.name < b.name){
                    return -1;
                }else if (a.name > b.name){
                    return 1;
                }else {
                    return 0;
                }
            })
        }
        if(this.state.sortType === 'country'){
            tweetsCopy.sort(function compareName(a,b){
                if(a.country < b.country){
                    return -1;
                }else if (a.country > b.country){
                    return 1;
                }else {
                    return 0;
                }
            })
        }

        if(this.state.sort === 'desc'){
            tweetsCopy.reverse();
        }


        const something = tweetsCopy.map((tweet, i)=> {
            return (
                <Tweet key={i} name={tweet.name} body={tweet.body} country={tweet.country}/>
            )
        });


        return (
            <div className="App">
                <p>sort by <br/> {this.state.sortType} <br/>now</p>

                <div className = "controls">
                    <input type="text" onChange={this.onSearch}/>
                </div>
                {something}
                <button onClick={this.sortAsc}>sortAsc</button>
                <button onClick={this.sortDesc}>sortDesc</button>
                <br/>
                <button onClick={this.sortByName}>sortByName</button>
                <button onClick={this.sortByCountry}>sortByCountry</button>
            </div>
        );
    }
}

export default App;
