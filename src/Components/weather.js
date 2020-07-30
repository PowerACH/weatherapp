import React from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

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
        // console.log(weather)
        return (
            <div>
                <h1 className = "header">8 Day Forecast</h1>
                <h3 className = "header2"> Location: Atlanta, GA </h3>
                <div className = "container">
               {
                   weather.map((i => { //iterate over values in state here using map
                {/* console.log(i.dt) */}
                   let date = new Date(i.dt)
                   const options ={weekday: 'long'}
                   {/* console.log(i.weather[0].icon) */}
                    
                    //link for weather icon
                   const icon = ('http://openweathermap.org/img/wn/' + i.weather[0].icon + '@2x.png')
                  
                    return (
                        <div className = "dailyContainer">
                        {/* <Link to = {``} */}
                       <li className="dailyWeather">
                        <img className="icon" src= {icon} />
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