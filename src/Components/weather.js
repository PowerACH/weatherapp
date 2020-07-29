import React from 'react';
import axios from 'axios';

const BASE_API='https://api.openweathermap.org/data/2.5/onecall?lat=33.7490&lon=-84.3880&exclude=daily&appid=6d2b5295767d6217e6db8d1a0669653a'

export default class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            forecast: []
        }
    }

    componentDidMount() {
        axios.get({BASE_API})
    }

    render() {
        return (
            <h1>{this.state.forecast}</h1>
        )
    }
}