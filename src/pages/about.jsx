import * as React from "react"
// import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'


const AboutPage = () => {
	return (
		<Layout>
			<StaticImage
				alt="Tom"
				src="../images/_Tom.png"
			/>
		</Layout >
	)
}

export const Head = () => <Seo />

export default AboutPage