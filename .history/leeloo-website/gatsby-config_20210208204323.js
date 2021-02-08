require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `LeeLoo website`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `zyzik`,
    social: [
      {
        name: "Source",
        url: "https://github.com/epilande/gatsby-theme-gallery",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/_epilande",
      },
      {
        name: "GitHub",
        url: "https://github.com/epilande",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["work sans:200,400,700"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `articles`,
    //     path: `${__dirname}/src/data/articles`,
    //   },
    // },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-theme-gallery`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-google-photos`,
      options: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        albums: ["car-audi", "slowakia"],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
}
