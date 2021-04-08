if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

module.exports = {
  siteMetadata: {
    title: `Danylo Bilyi`,
    description: `Front-end developer passionate about creating beautiful user-friendly apps.`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
