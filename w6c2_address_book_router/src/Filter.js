import React, {Component} from 'react';
import './Filter.css';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.handleCloseBtnModal = this.handleCloseBtnModal.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this);
//this.props.filterCountries
    }

    handleCloseBtnModal() {
        this.props.onCloseModal();
    }

    handleSortChange(e) {
        this.props.onChangeSortType(e.target.value); //firstName/lastName/recent
    }

    render() {

        return (
            <div className="Filter" style={{display: this.props.showFilter ? 'block' : 'none'}}>

                {/*<div className="Filter-content">*/}
                <div className="topBar">
                    <button className="backBtn" type="button" name="ic-back" onClick={this.handleBackBtn}>
                        <i className="material-icons">keyboard_arrow_left</i>
                    </button>
                    <h1>Filter</h1>
                </div>

                <form>

                    <div className="sortBy">
                        <p>Sort By :</p>
                        <div>
                            <input type="radio" classID="sortFirstName"
                                   name="sortType" value="firstName"
                                   checked={this.props.currentSortType === "firstName"}
                                   onChange={this.handleSortChange}/>
                            <label htmlFor="sortFirstName">First Name</label>
                        </div>
                        <div>
                            <input type="radio" classID="sortLastName"
                                   name="sortType" value="lastName" checked={this.props.currentSortType === "lastName"}
                                   onChange={this.handleSortChange}/>
                            <label htmlFor="sortLastName">Last Name</label>
                        </div>
                        <div>
                            <input type="radio" classID="sortRecent"
                                   name="sortType" value="recent" checked={this.props.currentSortType === "recent"}
                                   onChange={this.handleSortChange}/>
                            <label htmlFor="sortRecent">Recently Contacted</label>
                        </div>
                    </div>

                    <div className="filterBy">
                        <p>Filter By :</p>
                        <p>Country</p>

                    </div>
                    <div>
                        <button type="button" onClick={this.handleCloseBtnModal} className="sortBtn">Save the filter
                        </button>
                    </div>
                </form>
                {/*</div>*/}

            </div>
        );
    }
}

export default Filter;
