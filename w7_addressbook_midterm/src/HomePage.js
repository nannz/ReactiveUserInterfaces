import React, {Component} from 'react';
import './HomePage.css';
import Person from './Person'
import Search from './Search'
import Filter from './Filter'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.uniqueCountryList = this.props.people.map((person) => person.country).filter((value, index, self) => self.indexOf(value) === index).sort();
        //set way to have unique Country
        //this.uniqueCountryList = new Set(this.props.people.map((person) => person.country).sort());
        this.state = {
            searchValue: "",
            showFilter: false,
            sortType: "firstName",
            onClickPersonID: 0,

            filterCountries: new Set() //a set of the countries that filtered
        };
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onNameClick = this.onNameClick.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSortTypeChange = this.handleSortTypeChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleResetFilter = this.handleResetFilter.bind(this);

    }


    handleOpenModal() {
        this.setState({showFilter: true});
    }

    handleCloseModal() {
        this.setState({showFilter: false});
    }

    handleResetFilter(){
        console.log("reset!");
        this.setState({
            sortType: "firstName",
            filterCountries: new Set()
        })
    }

    handleSortTypeChange(sortType) {
        this.setState({
            sortType: sortType
        });
    }

    handleCheckboxChange(selesctedCountries) { //a set
        this.setState({
            filterCountries: selesctedCountries
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
        let peopleCopy = this.props.people.slice();

        //filter tab results
        let filterCountries = Array.from(this.state.filterCountries);
        if (filterCountries.length !== this.uniqueCountryList.length && filterCountries.length !== 0) {
            let peopleFilterTotal = [];
            let filterCountryPeople = filterCountries.map((filterCountry, key) => {
                let peopleFilterTemp = peopleCopy.filter(people => {
                    if (people.country.match(filterCountry)) {
                        return people.country.match(filterCountry)
                    }
                });
                if (peopleFilterTotal.length !== 0) {
                    //join peopleFilterTemp
                    peopleFilterTotal = peopleFilterTotal.concat(peopleFilterTemp);
                } else {
                    peopleFilterTotal = peopleFilterTemp;
                }
            });
            //console.log(peopleFilterTotal);
            peopleCopy = peopleFilterTotal;
        } else if(filterCountries.length === this.uniqueCountryList.length){
            console.log("all countries are checked");
        }else if(filterCountries.length === 0){
            console.log("no country is checked!");
            //peopleCopy = this.props.people.slice();
        }

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
                        address={person.address} city={person.city} cityState={person.cityState}
                        country={person.country}
                        onNameClick={this.onNameClick}
                        onClickPersonID={this.state.onClickPersonID} sortType={this.state.sortType}/>
            )
        });
        console.log("");
        console.log("filteredCountries:");
        console.log(this.state.filterCountries);
        console.log("");

        return (
            <div className="HomePage">
                <div className="app-bar">
                    <h1>Student Address Book</h1>
                    <button className="filterBtn" type="button" name="ic-filter" onClick={this.handleOpenModal}>
                        <i className="material-icons">tune</i>
                    </button>
                    <Filter showFilter={this.state.showFilter} onCloseModal={this.handleCloseModal}
                            onChangeSortType={this.handleSortTypeChange} currentSortType={this.state.sortType}
                            onChangeCheckbox={this.handleCheckboxChange}
                            uniqueCountries={this.uniqueCountryList} filterCountries={this.state.filterCountries}
                            handleReset = {this.handleResetFilter}
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
