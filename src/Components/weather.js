import React from 'react';
import axios from 'axios';
import '../App.css';

//I secured my unique API key and assigned a value
const API_KEY = process.env.REACT_APP_API_KEY;


export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: []
        }
    }

    componentDidMount() {//GET API with Axios
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.749001&lon=-84.387978&units=imperial&exclude=current,minutely,hourly&appid=${API_KEY}`)
        .then(res => {//Set the state of info results here
            this.setState({ info: res.data.daily});
        })
        .catch(error => {
            console.error("error" + error.message);
        });
    }
    
    iconSwitch(param) {
        switch(param) {
            case 'sunny':
                return 
        }

    }

    render() { 
        const weather = (this.state.info) //assigned value of info to variable
        // console.log(weather)
        return (
            <div>
                <h1 className = "header">7 Day Forecast</h1>
                <h3> Location: Atlanta, GA </h3>
                <div className = "container">
               {
                   weather.map((i => { //iterate over values in state here using map
                   console.log(i.weather[0].main)
                      
                    return (
                        <div>

                       <li className="dailyWeather">
                                   <p>{i.weather[0].main}</p>
                       <span>{(i.temp.max).toFixed() + "\u00B0"+"F"}</span> <span>  </span> 
                       <span className="loTemp">{(i.temp.min).toFixed() + "\u00B0"+ "F"}</span> 
                       </li>
                        </div>
                   )}))
               }
                
                </div>
            </div>
            
        )
    }
}