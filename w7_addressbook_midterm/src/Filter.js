import React, {Component} from 'react';
import './Filter.css';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
};

class Filter extends Component {
    constructor(props) {
        super(props);
        this.handleCloseBtnModal = this.handleCloseBtnModal.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this);
        this.handleBackBtn = this.handleBackBtn.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSubmitBtn = this.handleSubmitBtn.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleReset() {
        console.log("clear btn in filter clicked");
        this.props.handleReset();
    }

    handleSubmitBtn(e) {
        e.preventDefault();
        this.props.onCloseModal();
    }

    handleBackBtn() {
        //first clear
        //close the modal
        this.handleCloseBtnModal();
    }

    handleCloseBtnModal() {
        this.props.onCloseModal();
    }

    handleSortChange(e) {
        this.props.onChangeSortType(e.target.value); //firstName/lastName/recent
    }

    handleCheckboxChange(e) {
        //e.preventDefault();
        let updatedCountryCheckboxes = new Set(this.props.filterCountries);

        if (this.props.filterCountries.has(e.target.value)) {
            updatedCountryCheckboxes.delete(e.target.value);
        } else {
            updatedCountryCheckboxes.add(e.target.value);
        }
        this.props.onChangeCheckbox(updatedCountryCheckboxes);
    }
// <label className="checkbox-custom-label">
// {c}
// <input classID={"checkBoxCountry" + this.props.uniqueCountries.indexOf(c)}
// className="checkbox-custom"
// type="checkbox"
// value={c}
// checked={this.props.filterCountries.has(c)}
// onChange={this.handleCheckboxChange}
// />
// </label>
    render() {
        const checkboxCountries = this.props.uniqueCountries.map((c, i) => {
            //console.log("this c"+ c);
            return (
                <Checkbox  key = {i} classID={"checkBoxCountry" + this.props.uniqueCountries.indexOf(c)}
                           label={c}  labelPosition="left"
                           value={c} checked={this.props.filterCountries.has(c)}
                           onCheck={this.handleCheckboxChange}
                           style={styles.checkbox}/>
            )
        });


        return (
            <div className="Filter" style={{display: this.props.showFilter ? 'block' : 'none'}}>

                <div className="topBar">
                    <button className="backBtn" type="button" name="ic-back" onClick={this.handleBackBtn}>
                        <i className="material-icons">arrow_back</i>
                    </button>
                    <h1>Filter</h1>
                </div>
                <form onReset={this.handleReset} className="filter-content">
                    <div className="expansionBar">
                        <h2>Sort By :</h2>
                        <div className="bar-right">
                            <p>{this.props.currentSortType}</p>
                            <i className="material-icons">expand_more</i>
                        </div>

                    </div>
                    <div className="sortBy">
                        <div>
                            <label>
                                <input type="radio" classID="sortFirstName"
                                       name="sortType" value="First Name"
                                       checked={this.props.currentSortType === "First Name"}
                                       onChange={this.handleSortChange}/>
                                First Name
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" classID="sortLastName"
                                       name="sortType" value="Last Name"
                                       checked={this.props.currentSortType === "Last Name"}
                                       onChange={this.handleSortChange}/>
                                Last Name
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" classID="sortRecent"
                                       name="sortType" value="Recently Contacted"
                                       checked={this.props.currentSortType === "Recently Contacted"}
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
                        <label><input className="clearBtn" type="reset" name="ic-back" value="Clear"/>
                        </label>
                        <button type="submit" onClick={this.handleSubmitBtn} className="submitBtn">Save the filter
                        </button>
                    </div>
                </form>


            </div>
        );
    }
}

export default Filter;
