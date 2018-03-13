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

            filterCountries: new Set(), //a set of the countries that filtered

            searchShowPeople: new Set()//Set(id:xx)
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
    }


    handleOpenModal() {
        this.setState({showFilter: true});
    }

    handleCloseModal() {
        this.setState({showFilter: false});
    }

    handleResetFilter() {
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

    addSearchShowPeople(personID) {
        console.log("add ", personID);
        //if the people set doesn't have the id, ADD it
        let newSearchShowPeople = this.state.searchShowPeople.add(personID);
        console.log(newSearchShowPeople);
        // this.setState({
        //     searchShowPeople: newSearchShowPeople
        // });
    }
    removeSearchShowPeople(personID) {
        console.log("remove ", personID);
        let newSearchShowPeople = this.state.searchShowPeople.delete(personID);
        this.setState({
            searchShowPeople: newSearchShowPeople
        });
    }
    clearSearchShowPeople(){
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
            sortType: "firstName"
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
        } else if (filterCountries.length === this.uniqueCountryList.length) {
            console.log("all countries are checked");
            peopleCopy = this.props.people.slice();
        } else if (filterCountries.length === 0) {
            console.log("no country is checked!");
            peopleCopy = this.props.people.slice();
        }

        //search bar function
        if (this.state.searchValue !== '') {
            peopleCopy = peopleCopy.filter(people => {
                if (people.firstName.toLowerCase().match(this.state.searchValue.toLowerCase())) {
                    //1. firstname
                    console.log("searching first name");
                    return people.firstName.toLowerCase().match(this.state.searchValue.toLowerCase());
                } else if (people.lastName.toLowerCase().match(this.state.searchValue.toLowerCase())) {
                    //2.last name
                    console.log("searching last name");
                    return people.lastName.toLowerCase().match(this.state.searchValue.toLowerCase());
                } else if (people.email.toLowerCase().match(this.state.searchValue.toLowerCase())) {
                    //3.email
                    console.log("searching email");
                    //!!!!call setState function, show hiddenbar!!!!
                    return people.email.toLowerCase().match(this.state.searchValue.toLowerCase())
                } else if (people.address.toLowerCase().match(this.state.searchValue.toLowerCase())) {
                    //4.address
                    console.log("searching address");
                    return people.address.toLowerCase().match(this.state.searchValue.toLowerCase());
                } else if (people.number.toLowerCase().match(this.state.searchValue.toLowerCase())) {
                    //5. number
                    console.log("searching number");
                    return people.number.toLowerCase().match(this.state.searchValue.toLowerCase());
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
            //console.log(this.state.searchShowPeople.has(person.id));
            return (
                <Person key={person.id} id={person.id} firstName={person.firstName} lastName={person.lastName}
                        number={person.number} email={person.email}
                        address={person.address} city={person.city} cityState={person.cityState}
                        country={person.country}
                        onNameClick={this.onNameClick}
                        onClickPersonID={this.state.onClickPersonID} sortType={this.state.sortType}
                        showBar={this.state.onClickPersonID === person.id}
                        searchToShow={this.state.searchShowPeople.has(person.id)}
                        searchText = {this.state.searchValue}
                />
            )
        });
        // console.log(peopleList);
        peopleList.forEach((personComponent) => {
            if (this.state.searchValue !== "") {
                if (personComponent.props.firstName.toLowerCase().includes(this.state.searchValue.toLowerCase()) === false && personComponent.props.lastName.toLowerCase().includes(this.state.searchValue.toLowerCase()) === false) {
                    if (personComponent.props.email.toLowerCase().includes(this.state.searchValue.toLowerCase())) {
                        if (!this.state.searchShowPeople.has(personComponent.props.id)) {
                            console.log("add add add should only once.");
                            this.addSearchShowPeople(personComponent.props.id); //add it to the set
                        }
                    } else {
                        if (this.state.searchShowPeople.has(personComponent.props.id)) {
                            //remove it from the set
                            this.removeSearchShowPeople(personComponent.props.id);
                        }
                    }
                }else{
                    console.log(personComponent.props.id, "match name already");
                }
            }else{
                if(this.state.searchShowPeople.size > 0) this.clearSearchShowPeople();
            }


        });
        //here: if person.email.toLowerCase().match(this.state.searchValue.toLowerCase()); click the person(open the hidden bar ) & in the email, highlight the word


        //the filter echo buttons HUI XIAN
        const filterCountriesArray = Array.from(this.state.filterCountries).sort();
        const filterCountriesEchoBtns = filterCountriesArray.map((c, i) => {
            return (
                <button key={i} type="button" className="filter-echo-countries" value={c}
                        onClick={this.handleFilterEchoCountryBtn}>{c}</button>
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
                            onChangeCheckbox={this.handleCheckboxChange}
                            uniqueCountries={this.uniqueCountryList} filterCountries={this.state.filterCountries}
                            handleReset={this.handleResetFilter}
                    />
                    <Search onChange={this.onSearchChange} placeholderValue={this.state.searchValue}/>
                </div>
                <div className="filter-echo">
                    {this.state.sortType !== "firstName" &&
                    <button type="button" className="filter-echo-sortType" value={this.state.sortType}
                            onClick={this.handleFilterEchoSortBtn}>sort by {this.state.sortType}</button>}
                    {/*<button type="button" className="filter-echo-sortType" disabled>sort by {this.state.sortType}</button>*/}
                    {filterCountriesEchoBtns}

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
