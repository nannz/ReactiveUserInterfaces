import React, {Component} from 'react';
import './HomePage.css';
import Person from './Person'
import Search from './Search'
import Filter from './Filter'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
            showFilter: false,
            sortType: "firstName",
            onClickPersonID: 0,

            filterCountry: [] //an array of the countries that filtered
        };
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onNameClick = this.onNameClick.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSortTypeChange = this.handleSortTypeChange.bind(this);

        this.uniqueCountryList = this.props.people.map((person) => person.country).filter((value, index, self)=> self.indexOf(value)===index );
    }




    handleOpenModal() {
        this.setState({showFilter: true});
    }

    handleCloseModal() {
        this.setState({showFilter: false});
    }

    handleSortTypeChange(sortType) {
        this.setState({
            sortType: sortType
        });
    }

    onSearchChange(value) {
        this.setState({
            searchValue: value
        });
    }

    onNameClick(personID) {
        this.setState({
            onClickPersonID: personID
        });
    }

    render() {
        //map function
        let peopleCopy = this.props.people.slice();

        //get the countryList for the filter
        // const countryList = peopleCopy.map((person) => person.country);
        // let uniqueCountrylist = countryList.filter((value, index, self)=> self.indexOf(value)===index );
        console.log(this.uniqueCountryList);

        //search bar function
        if (this.state.searchValue !== '') {
            peopleCopy = peopleCopy.filter(people => {
                if (people.firstName.toLowerCase().match(this.state.searchValue)) {
                    return people.firstName.toLowerCase().match(this.state.searchValue);
                } else if (people.lastName.toLowerCase().match(this.state.searchValue)) {
                    return people.lastName.toLowerCase().match(this.state.searchValue);
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
        if (this.state.sortType === 'firstName') {
            peopleCopy.sort(function compareName(a, b) {
                if (a.firstName < b.firstName) {
                    return -1;
                } else if (a.firstName > b.firstName) {
                    return 1;
                } else {
                    return 0;
                }
            })
        }
        if (this.state.sortType === 'lastName') {
            peopleCopy.sort(function compareName(a, b) {
                if (a.lastName < b.lastName) {
                    return -1;
                } else if (a.lastName > b.lastName) {
                    return 1;
                } else {
                    return 0;
                }
            })
        }
        if (this.state.sortType === 'recent') {
            peopleCopy.sort(function compareName(a, b) {
                //compare year
                if (a.lastContactTime.getTime() < b.lastContactTime.getTime()) {
                    return 1;
                } else if (a.lastContactTime.getTime() > b.lastContactTime.getTime()) {
                    return -1;
                } else {
                    return 0;
                }
            })
        }

        const peopleList = peopleCopy.map((person) => {
            return (
                <Person key={person.id} id={person.id} firstName={person.firstName} lastName={person.lastName}
                        number={person.number} email={person.email}
                        address={person.address} city={person.city} cityState={person.cityState} country={person.country}
                        onNameClick={this.onNameClick}
                        onClickPersonID={this.state.onClickPersonID} sortType={this.state.sortType}/>
            )
        });


        return (
            <div className="HomePage">
                <div className="app-bar">
                    <h1>Student Address Book</h1>
                    <button className="filterBtn" type="button" name="ic-filter" onClick={this.handleOpenModal}>
                        <i className="material-icons">tune</i>
                    </button>
                    <Filter showFilter={this.state.showFilter} onCloseModal={this.handleCloseModal}
                            onChangeSortType={this.handleSortTypeChange} currentSortType={this.state.sortType}
                            countryList = {this.uniqueCountryList} filterCountries = {this.state.filterCountry}
                    />
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

export default HomePage;
