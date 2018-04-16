import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Planets extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            planets:[]
        }
    }
}

export default Planets;

