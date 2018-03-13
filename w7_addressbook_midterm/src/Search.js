/**
 * Created by zhaonan on 2018/3/4.
 */
import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
    constructor(props){
        super(props);
        // this.buttonClicked = this.buttonClicked.bind(this);
        this.placeholder = "Search name, email, or country";
        this.onInputChange = this.onInputChange.bind(this);

    }

    onInputChange(e){
        // e.preventDefault;
        // console.log(e.target.value);
        return this.props.onChange(e.target.value.toLowerCase());
    }

    render() {
        return (
            <div className="Search">
                <i className="material-icons">search</i>
                <input type="text" name = "search" onChange={this.onInputChange} placeholder={this.props.placeholderValue === "" ? this.placeholder : this.props.placeholderValue}/>
            </div>

        );
    }
}

export default Search;
