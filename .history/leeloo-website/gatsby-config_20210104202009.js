require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteMetadata: {
      // Used for the site title and SEO
      title: "My Site Title",
      // Used for SEO
      description: "My site description...",
      // Used for SEO. Do not include a trailing slash
      url: "https://www.example.com",
      // Used for SEO. Must be the full URL for the default image
      image: "https://www.example.com/og-image.jpg",
      // Used for SEO
      author: "John Doe",
      // Used for an optional intro section at the top of the posts template
      intro: "John Doe is a photographer....",
      // Used for the links in the menu
      menuLinks: [
        {
          name: "Home",
          slug: "/",
        },
        {
          name: "About",
          slug: "/about/",
        },
        {
          name: "Contact",
          slug: "/contact/",
        },
      ],
      // Used for the links in the footer
      footerLinks: [
        {
          name: "Dribbble",
          url: "https://www.dribbble.com/johndoe",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/johndoe",
        },
      ],
    },
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
      resolve: "gatsby-theme-amsterdam",
      options: {
        // basePath defaults to '/'
        basePath:
          "/Users/yuriidrahomaretskyi/eduweb/leeloo_v2.0/leeloo-website/src/assets/images",
        // grid defaults to 'basic'
        grid: "list",
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
    `gatsby-plugin-mdx`,
  ],
}
