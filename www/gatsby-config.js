require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Le roi du boudin",
    description:
      "Le Roi du boudin par Le Pied Bleu, c'est d’abord un bar à charcuterie spécialisé en charcuterie cuite qui produit un boudin digne d'une AOC, 5 fois médaillés à Mortagne-au-Perche en France.",
    siteUrl: "https://www.leroiduboudin.com/",
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    // "gatsby-plugin-subfont",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_DEPLOY_STUDIO_TOKEN,
        overlayDrafts: true,
        watchMode: true,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-transformer-yaml",
  ],
}
