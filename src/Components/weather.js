import React from 'react';
import axios from 'axios';
import '../App.css';
import clouds from './assets/clouds.png';
import rain from './assets/rain.png';
import snow from './assets/snow.png';
import sunny from './assets/sunny.png';

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
  
    render() { 
        const weather = (this.state.info) //assigned value of info to variable
        console.log(weather)
        return (
            <div>
                <h1 className = "header">8 Day Forecast</h1>
                <h3> Location: Atlanta, GA </h3>
                <div className = "container">
               {
                   weather.map((i => { //iterate over values in state here using map
                  
                   
                   //Switch function for daily weather icons
                   const iconSwitch = (i) => {
                        switch(i.weather[0].main) {
                            case 'Clouds':
                                return clouds
                            case 'Rain':
                                return rain
                            case 'Sunny':
                                return sunny
                            case 'Snow':
                                return snow
                            default:
                                return clouds
                        }

                    }
                    return (
                        <div>
                        {/* <Link to = {``} */}
                       <li className="dailyWeather">
                        <img className="icon" src={iconSwitch(i)} alt="weatherIcon"/>
                         {/* eslint-disable-next-line */}
                       <span>{(i.temp.max).toFixed() + "\u00B0"+"F"}</span> <span>  </span> 
                         {/* eslint-disable-next-line */}
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