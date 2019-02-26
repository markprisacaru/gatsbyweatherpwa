import React from "react"
import Header from "../components/header"
import "../styles/global.css"

export default () => (
    <div id = "container">
    <Header class= "container" headerText="Gatsby Weather App" />

    <ul>
  <li><a class="active" href="/">Home</a></li>
  <li><a href="/about">DarkSky Info</a></li>
  <li><a href="/openweather">Weather</a></li>
</ul>
      <br/>
      <br/>
      <h2>Welcome to Gatsby Weather App HomePage!</h2>
      <h3><em> Click the Links Above to explore DarkSky and OpenWeather Gatsby Plugin</em></h3>
    <p> <img src = "https://www.irishexaminer.com/remote/media.central.ie/media/images/s/SunnyBlueSky_large.jpg?width=648&s=ie-837170" alt = "sky"></img>
      </p><br/>
       </div>
) 
