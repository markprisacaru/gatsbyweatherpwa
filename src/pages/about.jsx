import React from "react"
import Layout from "../components/layout"


export default ({ data }) => (
  <Layout>
      <h1>Dark Sky</h1> 
      <ul>
      <li><a  href="/">Home</a></li>
      <li><a class="active" href="/about">DarkSky Info</a></li>
      <li><a href="/openweather">Weather</a></li>
      </ul>
      <p><img src = "https://www.sierraclub.org/sites/www.sierraclub.org/files/styles/sierra_full_page_width/public/sierra/articles/sharing/2018-3-darkskies_ph1-OPENER-WB.jpg?itok=lPRmxIKI" height= "300px" width = "400px" alt= "darksky"></img></p>

  </Layout>
) 