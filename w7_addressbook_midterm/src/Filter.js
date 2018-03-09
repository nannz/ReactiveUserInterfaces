import React, {Component} from 'react';
import './Filter.css';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.handleCloseBtnModal = this.handleCloseBtnModal.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this);
        this.handleBackBtn = this.handleBackBtn.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSubmitBtn = this.handleSubmitBtn.bind(this);
        this.handleReset = this.handleReset.bind(this);
        //this.props.filterCountries
        //this.props.uniqueCountries
        // this.state={
        //     selectedCountryCheckboxes : this.props.filterCountries, //a set
        //     selectedSortType: this.props.currentSortType
        // }
    }

    handleReset(){
        // let emptyCountryCheckboxes = new Set(this.state.selectedCountryCheckboxes);
        // emptyCountryCheckboxes = emptyCountryCheckboxes.clear();
        // this.setState({
        //     selectedSortType: this.props.currentSortType,
        //     // selectedCountryCheckboxes:emptyCountryCheckboxes.clear()
        //     selectedCountryCheckboxes:emptyCountryCheckboxes
        // })
        console.log("clear btn in filter clicked");
        this.props.handleReset();
    }
    handleSubmitBtn(e){
        e.preventDefault();
        //pass the new sort type + selected Country to homePage.js + close the modal
        //this.props.onChangeSortType(this.props.currentSortType);//this.state.selectedSortType);
        //console.log(this.state.selectedCountryCheckboxes);
        //this.props.onChangeCheckbox(this.state.selectedCountryCheckboxes);

        this.props.onCloseModal();
    }
    handleBackBtn(){
        //first clear
        //close the modal
        this.handleCloseBtnModal();
    }

    handleCloseBtnModal() {
        this.props.onCloseModal();
    }

    handleSortChange(e) {
        // this.setState = {
        //     selectedSortType: e.target.value
        // }
        this.props.onChangeSortType(e.target.value); //firstName/lastName/recent
    }

    handleCheckboxChange(e){
        // let updatedCountryCheckboxes = new Set(this.state.selectedCountryCheckboxes);
        let updatedCountryCheckboxes = new Set(this.props.filterCountries);
        // if (this.state.selectedCountryCheckboxes.has(e.target.value)) {

        if (this.props.filterCountries.has(e.target.value)) {
            updatedCountryCheckboxes.delete(e.target.value);
        } else {
           updatedCountryCheckboxes.add(e.target.value);
        }
        // this.setState({
        //     selectedCountryCheckboxes: updatedCountryCheckboxes
        // });
        this.props.onChangeCheckbox(updatedCountryCheckboxes);
    }

    render() {
        const checkboxCountries = this.props.uniqueCountries.map((c, i) => {
            //console.log("this c"+ c);
            return (
                <div key={i}>
                    <label>
                        <input classID={"checkBoxCountry" + this.props.uniqueCountries.indexOf(c)}
                               type="checkbox"
                               value={c}
                               checked = {this.props.filterCountries.has(c)}
                               onChange = {this.handleCheckboxChange}
                        />
                        {c}
                    </label>
                </div>
            )
        });
        console.log(checkboxCountries);


        return (
            <div className="Filter" style={{display: this.props.showFilter ? 'block' : 'none'}}>

                <div className="topBar">
                    <button className="backBtn" type="button" name="ic-back" onClick={this.handleBackBtn}>
                        <i className="material-icons">keyboard_arrow_left</i>
                    </button>
                    <h1>Filter</h1>

                </div>

                <form onReset = {this.handleReset}>
                    <div className="sortBy">
                        <p>Sort By :</p>
                        <div>
                            <label>
                                <input type="radio" classID="sortFirstName"
                                       name="sortType" value="firstName"
                                       checked={this.props.currentSortType === "firstName"}
                                       onChange={this.handleSortChange}/>
                                First Name
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" classID="sortLastName"
                                       name="sortType" value="lastName"
                                       checked={this.props.currentSortType === "lastName"}
                                       onChange={this.handleSortChange}/>
                                Last Name
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" classID="sortRecent"
                                       name="sortType" value="recent" checked={this.props.currentSortType === "recent"}
                                       onChange={this.handleSortChange}/>
                                Recently Contacted
                            </label>
                        </div>
                    </div>

                    <div className="filterBy">
                        <p>Filter By :</p>
                        <p>Country</p>
                        {checkboxCountries}
                    </div>
                    <div>
                        <label><input className="clearBtn" type="reset" name="ic-back" value="Clear" />
                        </label>
                        <button type="submit" onClick={this.handleSubmitBtn} className="sortBtn">Save the filter
                        </button>
                    </div>
                </form>




            </div>
        );
    }
}

export default Filter;
