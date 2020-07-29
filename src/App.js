import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Weather from './Components/weather'

export default function App() {
  return (
    <BrowserRouter>
      <div className = "App">
        <Route exact path="/" component={Weather} />
        {/* <Route path = ""  */}
      </div>
    </BrowserRouter>
  )
}
