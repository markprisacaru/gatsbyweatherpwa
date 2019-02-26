module.exports = {
  siteMetadata: {
    title: `Gatsby Weather App`,
  },
  plugins: [
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      }
    },
    
    'gatsby-plugin-offline',
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-openweathermap',
      options: {
        apikey: 'de4191a622f2664e717eda95cd2abcaa',
        location: 'Moscow',
        units: 'imperial',
        type: 'weather'
      },
    },

    {
      resolve: 'gatsby-source-darksky',
      options: {
        key: '45fb6f3273632c9588737bbc2304987d',
        latitude: '55.75',
        longitude: '37.61',
        exclude: ['minutely']
      },
    }

  ]
}; 