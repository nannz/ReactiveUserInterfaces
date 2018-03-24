import React, {Component} from 'react';
import './HomePage.css';
import Person from './Person'
import Search from './Search'
import Filter from './Filter'
import AddContactPage from './AddContactPage'
import {Link} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class HomePage extends Component {
    constructor(props) {
        super(props);
        //generate the array of the unique country list.
        this.uniqueCountryList = this.props.people.map((person) => person.country).filter((value, index, self) => self.indexOf(value) === index).sort();
        //set way to have unique Country: this.uniqueCountryList = new Set(this.props.people.map((person) => person.country).sort());
        this.state = {
            searchValue: "",
            showFilter: false,
            sortType: "First Name",
            onClickPersonID: 0,
            filterCountries: new Set(), //a set of the countries that filtered
            searchShowPeople: new Set(),//Set(id:xx)

            showAddContact: false,
            disableAddContact: true
        };

        this.onSearchChange = this.onSearchChange.bind(this);
        this.onNameClick = this.onNameClick.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleSortTypeChange = this.handleSortTypeChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleResetFilter = this.handleResetFilter.bind(this);

        this.handleFilterEchoCountryBtn = this.handleFilterEchoCountryBtn.bind(this);
        this.handleFilterEchoSortBtn = this.handleFilterEchoSortBtn.bind(this);

        this.addSearchShowPeople = this.addSearchShowPeople.bind(this);
        this.removeSearchShowPeople = this.removeSearchShowPeople.bind(this);
        this.clearSearchShowPeople = this.clearSearchShowPeople.bind(this);

        //w8 - local storage & prop types
        this.handleAddContact = this.handleAddContact.bind(this);
    }

    componentDidMount() {
        this.setState({
            disableAddContact: false
        })
    }


    handleOpenModal() {
        this.setState({showFilter: true});
    }

    handleCloseModal() {
        this.setState({showFilter: false});
    }

    handleResetFilter() {
        this.setState({
            sortType: "First Name",
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

    addSearchShowPeople(personID) {
        let newSearchShowPeople = new Set(this.state.searchShowPeople);//copy the set
        newSearchShowPeople.add(personID);//add id of the new person we want to show into the set
        this.setState({
            searchShowPeople: newSearchShowPeople
        });
    }

    removeSearchShowPeople(personID) {
        let newSearchShowPeople = new Set(this.state.searchShowPeople);
        newSearchShowPeople.delete(personID);
        this.setState({
            searchShowPeople: newSearchShowPeople
        });
    }

    clearSearchShowPeople() {
        this.setState({
            searchShowPeople: new Set()
        })
    }

    handleFilterEchoCountryBtn(e) {
        e.preventDefault();
        //if click the button, remove the country from filterCountries set
        let newFilterCountries = new Set(this.state.filterCountries);
        newFilterCountries.delete(e.target.value);
        this.setState({
            filterCountries: newFilterCountries
        })
    }

    handleFilterEchoSortBtn(e) {
        e.preventDefault();
        this.setState({
            sortType: "First Name"
        })
    }

    onNameClick(personID) {
        //if same, means click again, means close the panel
        if (personID !== this.state.onClickPersonID) {
            this.setState({
                onClickPersonID: personID
            });
        } else {
            this.setState({
                onClickPersonID: 0
            });
        }
    }

    handleAddContact() {
        console.log("the button is clicked");
        this.setState({
            showAddContact: true
        })
    }

    render() {
        let peopleCopy = this.props.people.slice();

        //filter tab results
        //filter the list for the filtered countries
        //join the people arrays together
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
            peopleCopy = peopleFilterTotal;
        } else if (filterCountries.length === this.uniqueCountryList.length) {//all countries are checked
            peopleCopy = this.props.people.slice();
        } else if (filterCountries.length === 0) {//no country is checked
            peopleCopy = this.props.people.slice();
        }

        //search bar function
        if (this.state.searchValue !== '') {
            let lowerCasedSearchValue = this.state.searchValue.slice(0).toLowerCase();
            peopleCopy = peopleCopy.filter(people => {
                if (people.firstName.slice(0).toLowerCase().match(lowerCasedSearchValue)) {
                    //1. firstname
                    return people.firstName.slice(0).toLowerCase().match(lowerCasedSearchValue);
                } else if (people.lastName.slice(0).toLowerCase().match(lowerCasedSearchValue)) {
                    //2.last name
                    return people.lastName.slice(0).toLowerCase().match(lowerCasedSearchValue);
                } else if (people.email.slice(0).toLowerCase().match(lowerCasedSearchValue)) {
                    //3.email
                    //!!!!call setState function, show hiddenbar!!!!
                    return people.email.slice(0).toLowerCase().match(lowerCasedSearchValue)
                } else if (people.address.slice(0).toLowerCase().match(lowerCasedSearchValue)) {
                    //4.address
                    return people.address.slice(0).toLowerCase().match(lowerCasedSearchValue);
                } else if (people.number.slice(0).toLowerCase().match(lowerCasedSearchValue)) {
                    //5. number
                    return people.number.slice(0).toLowerCase().match(lowerCasedSearchValue);
                } else if (people.city.slice(0).toLowerCase().match(lowerCasedSearchValue)) {
                    //5. city
                    return people.city.slice(0).toLowerCase().match(lowerCasedSearchValue);
                } else if (people.cityState.slice(0).toLowerCase().match(lowerCasedSearchValue)) {
                    //6. cityState
                    return people.cityState.slice(0).toLowerCase().match(lowerCasedSearchValue);
                } else if (people.country.slice(0).toLowerCase().match(lowerCasedSearchValue)) {
                    //7. country
                    return people.country.slice(0).toLowerCase().match(lowerCasedSearchValue);
                }
            })
        }

        //sort by name by default
        if (this.state.sortType === 'First Name') {
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
        if (this.state.sortType === 'Last Name') {
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
        if (this.state.sortType === 'Recently Contacted') {
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
                        onClickPersonID={this.state.onClickPersonID} sortType={this.state.sortType}
                        showBar={this.state.onClickPersonID === person.id}
                        searchToShow={this.state.searchShowPeople.has(person.id)}
                        searchText={this.state.searchValue}
                />
            )
        });
        // search to show the hidder bar
        peopleList.forEach((personComponent) => {
            if (this.state.searchValue !== "") {
                let lowerCasedSearchValue = this.state.searchValue.slice(0).toLowerCase();
                //if the name doesn't have searchValue, then show the hidden bar when the props matches the search value
                //lowerCase for less sensibility
                //copy the string and apply toLowerCase(), otherwise the text itself will be lowercased and shown on the interface
                if (personComponent.props.firstName.slice(0).toLowerCase().includes(lowerCasedSearchValue) === false
                    && personComponent.props.lastName.slice(0).toLowerCase().includes(lowerCasedSearchValue) === false) {

                    if (personComponent.props.email.slice(0).toLowerCase().includes(lowerCasedSearchValue)
                        || personComponent.props.address.slice(0).toLowerCase().includes(lowerCasedSearchValue)
                        || personComponent.props.number.slice(0).toLowerCase().includes(lowerCasedSearchValue)
                        || personComponent.props.city.slice(0).toLowerCase().includes(lowerCasedSearchValue)
                        || personComponent.props.cityState.slice(0).toLowerCase().includes(lowerCasedSearchValue)
                        || personComponent.props.country.slice(0).toLowerCase().includes(lowerCasedSearchValue)
                    ) {
                        if (!this.state.searchShowPeople.has(personComponent.props.id)) {
                            //if the people set doesn't have the id, add it to the set
                            this.addSearchShowPeople(personComponent.props.id);
                        }
                    } else {
                        if (this.state.searchShowPeople.has(personComponent.props.id)) {
                            this.removeSearchShowPeople(personComponent.props.id);
                        }
                    }
                } else {
                    // console.log(personComponent.props.id, "match name already");
                }
            } else {
                if (this.state.searchShowPeople.size > 0) this.clearSearchShowPeople();
            }
        });

        //the filter echo buttons - let user know what they have filtered
        const filterCountriesArray = Array.from(this.state.filterCountries).sort();
        const filterCountriesEchoBtns = filterCountriesArray.map((c, i) => {
            return (
                <button key={i} type="button" className="filter-echo-countries" value={c}
                        onClick={this.handleFilterEchoCountryBtn}>{c}<i className="material-icons">clear</i></button>
            )
        });

        return (
            <div className="HomePage">

                <div className="app-bar">
                    <h1>Student Address Book</h1>
                    <MuiThemeProvider>
                        <button className="filterBtn" type="button" name="ic-filter" onClick={this.handleOpenModal}>
                            <i className="material-icons">tune</i>
                        </button>
                        <Filter showFilter={this.state.showFilter} onCloseModal={this.handleCloseModal}
                                onChangeSortType={this.handleSortTypeChange} currentSortType={this.state.sortType}
                                onChangeCheckbox={this.handleCheckboxChange}
                                uniqueCountries={this.uniqueCountryList} filterCountries={this.state.filterCountries}
                                handleReset={this.handleResetFilter}
                        />
                    </MuiThemeProvider>
                    <Search onChange={this.onSearchChange} placeholderValue={this.state.searchValue}/>
                </div>

                <div className="filter-echo">
                    {this.state.sortType !== "First Name" &&
                    <button type="button" className="filter-echo-sortType" value={this.state.sortType}
                            onClick={this.handleFilterEchoSortBtn}>sort by {this.state.sortType} </button>}
                    {filterCountriesEchoBtns}
                </div>
                <div className="list">
                    {peopleList}
                </div>

                <div className="emptyState" style={{display: peopleCopy.length > 0 ? 'none' : 'block'}}>
                    <h2>Oh no search result</h2>
                    <p>try to unclick the tags</p>
                    <p> or decrease the search input~</p>
                </div>

                <button className="addContactBtn" type="button" name="btn-add" onClick={this.handleAddContact}>
                    <Link
                        to={'/add-contact'}
                        style={{textDecoration: 'none', color: "black"}}>
                        <i className="material-icons md-light">add</i>
                    </Link>
                </button>

            </div>

        );
    }
}

export default HomePage;
