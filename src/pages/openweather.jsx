import React from "react"
import Layout from "../components/openlayout"

export default ({ data }) => (
  <Layout>
    <h1>Open Weather Map</h1> 
    <ul>
      <li><a  href="/">Home</a></li>
      <li><a  href="/about">DarkSky Info</a></li>
      <li><a class="active" href="/openweather">Weather</a></li>
    </ul>
      <p><img src = "https://media.dragstone.com/content/icon-openweathermap-1.png" alt = "openweather"></img></p>
  </Layout>
)