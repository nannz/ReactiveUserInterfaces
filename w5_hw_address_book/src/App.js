import React, {Component} from 'react';
import './App.css';
import Person from './Person'
import Search from './Search'
import Filter from './Filter'
import ReactModal from 'react-modal';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [
                {
                    name: "Nan Zhao",
                    number: "1234567890",
                    email: "nz591@nyu.edu",
                    address: "No.1555, Century Avenue, Shanghai, China"
                },
                {
                    name: "Di Hu",
                    number: "1234567890",
                    email: "dh456@nyu.edu",
                    address: "No.4, yy Road, Chongqing, China"
                },
                {
                    name: "Rune Madson",
                    number: "012345",
                    email: "rune@madsen.edu",
                    address: "No.1165 København, Copenhagen, Denmark "
                },
                {
                    name: "Moon JungHyun",
                    number: "939",
                    email: "jh.moon@nyu.edu",
                    address: "No.1, Gwanak-ro, Seoul, Korea"
                },
                {
                    name: "Yuxia Yao",
                    number: "31274832",
                    email: "yy123@nyu.edu",
                    address: "No.3, xx Road, Shanghai, China"
                },
                {
                    name: "Matthew Belanger",
                    number: "33333333",
                    email: "mb1065@nyu.edu",
                    address: "No.721, Broadway, New York, NY, United States"
                },
            ],
            searchValue: "",
            showFilter: false,
            sortType: "name",
            onClickName: "",
            showingABar: false
        };
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onNameClick = this.onNameClick.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({showFilter: true});
    }
    handleCloseModal () {
        this.setState({ showFilter: false });
    }

    onSearchChange(value) {
        this.setState({
            searchValue: value
        });
    }

    onNameClick(name) {
        this.setState({
            onClickName: name,
            showingABar: !this.state.showingABar
        });
    }

    render() {
        //map function
        let peopleCopy = this.state.people.slice();

        //search bar function
        if (this.state.searchValue !== '') {
            peopleCopy = peopleCopy.filter(people => {
                if (people.name.toLowerCase().match(this.state.searchValue)) {
                    return people.name.toLowerCase().match(this.state.searchValue);
                } else if (people.email.toLowerCase().match(this.state.searchValue)) {
                    //call setState function, show hiddenbar
                    return people.email.toLowerCase().match(this.state.searchValue)
                } else if (people.address.toLowerCase().match(this.state.searchValue)) {
                    return people.address.toLowerCase().match(this.state.searchValue);
                } else if (people.number.toLowerCase().match(this.state.searchValue)) {
                    return people.number.toLowerCase().match(this.state.searchValue);
                }
            })
        }

        //sort by name by default
        if (this.state.sortType === 'name') {
            peopleCopy.sort(function compareName(a, b) {
                if (a.name < b.name) {
                    return -1;
                } else if (a.name > b.name) {
                    return 1;
                } else {
                    return 0;
                }
            })
        }

        const peopleList = peopleCopy.map((person, i) => {
            return (
                <Person key={i} name={person.name} number={person.number} email={person.email}
                        address={person.address} onNameClick={this.onNameClick} onClickName={this.state.onClickName}/>
            )
        });


        return (
            <div className="App">

                <div className="app-bar">
                    <h1>Student Address Book</h1>
                    <button className="filterBtn" type="button" name="ic-filter" onClick={this.handleOpenModal}>
                        <i className="material-icons">filter_list</i>
                    </button>
                        <Filter showFilter={this.state.showFilter} onCloseModal={this.handleCloseModal}/>




                    <Search onChange={this.onSearchChange}/>
                </div>
                <div className="list">
                    {/*<div className="initial-bar">A</div>*/}
                    {peopleList}
                </div>

            </div>
        );
    }
}

export default App;
