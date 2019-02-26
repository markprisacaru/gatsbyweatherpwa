import React from "react"

import { StaticQuery,  graphql } from "gatsby"

import "../styles/global.css"




export default ({ children }) => (
    <StaticQuery
    query={graphql`
      query {
        
    weatherData{
      latitude
      longitude
      currently {
        time
        summary
        icon
        precipIntensity
        precipProbability
        temperature
        apparentTemperature
        dewPoint
        humidity
        pressure
        windSpeed
        windGust
        windBearing
        cloudCover
        uvIndex
        visibility
        ozone
      }
    }
  }
      
    `
}
    render={data => (
  <div id = "container">    
      {children}
   <div id = "darksky">
         <h3>Summary: {data.weatherData.currently.summary}</h3>
        <br/>
        <h3>Cloud Cover: {data.weatherData.currently.cloudCover } </h3>
        <br/>
        <h3>Humidity: {data.weatherData.currently.humidity }</h3>
        <br/>
        <h3>Ozone: {data.weatherData.currently.ozone}</h3>
        <br/>
        <h3>Time: {data.weatherData.currently.time}</h3>
        </div>
  </div>
    )}
  />
    ) 