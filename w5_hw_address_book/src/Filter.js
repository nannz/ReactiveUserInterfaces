import React, {Component} from 'react';
import './Filter.css';
import ReactModal from 'react-modal';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.handleCloseBtnModal = this.handleCloseBtnModal.bind(this);
        this.state = {
            sortType: this.props.currentSortType
        }
    }

    handleCloseBtnModal(){
        this.props.onCloseModal(this.state.sortType);
    }

    render() {

        return (
            <div className="Filter" style={{display: this.props.showFilter ? 'block' : 'none' }} onClick={this.handleCloseBtnModal}>

                <div className="Filter-content">
                    <h1>Filter</h1>
                    <p>This is the filter.</p>
                    <form>
                        <input type="radio" value="firstName"/> <p>First Name</p>
                        <button type="button" onClick={this.handleCloseBtnModal} className= "sortBtn">Sort Connections</button>
                    </form>
                </div>

            </div>
        );
    }
}

export default Filter;
