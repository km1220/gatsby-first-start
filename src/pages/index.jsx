import * as React from "react"
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import SEO from '../components/seo'


const IndexPage = () => {
  return (
    <Layout>
      <h1 h1 > Welcome to my Gatsby site!</h1 >
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>

      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://prod.docsiteassets.roblox.com/assets/tutorials/building-unique-3d-objects/Create-Parts-3.jpg"
      />
      <StaticImage
        alt="Tom"
        src="../images/_Tom.png"
      />
    </Layout >
  )
}

export const Head = () => <SEO title="Home page" />

export default IndexPage

