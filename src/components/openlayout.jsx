import React from "react"

import { StaticQuery, graphql } from "gatsby"

/* import "/home/cabox/workspace/gatsby-starter-weather/src/styles/global.css" */

// import "./src/styles/global.css" 

import "../styles/global.css" 

export default ({ children }) => (
    <StaticQuery
    query={graphql`
      query {
    openWeather{
      coord{
        lon
        lat
      
      }
      weather {
        id
        main
        description
        icon
      }
      dt
      wind {
        speed
        deg
      }
      name
    }
  }`
}
    render={data => (
  <div id = "container">
    {children}
     <div id = "darksky">
       <h3>City Name: {data.openWeather.name}</h3>
        <br/>
        <h3>City Coord lat: {data.openWeather.coord.lat}</h3>
        <br/>
         <h3>City Coord lon: {data.openWeather.coord.lon}</h3>
       <br/>
       <h3>Wind Speed {data.openWeather.wind.speed}</h3>
       <br/>
       <h3>Time: {data.openWeather.dt}</h3>
        <br/>
        </div>


  </div>
    )}
  />
    )