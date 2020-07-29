import React from 'react';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_API_KEY;
// const BASE_API='https://api.openweathermap.org/data/2.5/onecall?lat=33.7490&lon=-84.3880&exclude=daily&appid='

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: []
        }
    }

    componentDidMount() {
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.7490&lon=-84.3880&units=imperial&exclude=current,minutely,hourly&appid=${API_KEY}`)
        .then(res => {
            this.setState({ info: res.data});
        })
        .catch(error => {
            console.error("error" + error.message);
        });
    }

    render() {
        const weather = (this.state.info)
        console.log(weather)
        return (
            <div>
                <h1 className = "header">7 Day Forecast</h1>
                <h3> Location: Atlanta, GA </h3>
                <div className = "container">
                
                </div>
            </div>
            
        )
    }
}