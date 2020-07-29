import React from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;


export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: []
        }
    }

    componentDidMount() {//GET API with Axios
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.749001&lon=-84.387978&units=imperial&exclude=current,minutely&appid=${API_KEY}`)
        .then(res => {//Set the state of info results here
            this.setState({ info: res.data.daily});
        })
        .catch(error => {
            console.error("error" + error.message);
        });
    }

    render() {
        return (
            <div className = "header"> Daily Forecast </div>
        )
    }
}