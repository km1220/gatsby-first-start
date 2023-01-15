import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			<p>My cool posts will go in here</p>
			{data.map(node =>
				<li key={node.name}>
					<h3>{node.name}</h3>
					<p>{node.dir}</p>
				</li>
			)}
		</Layout>
	)
}

export const query = graphql`
	query MyQuery {
		allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
			nodes {
				name
				dir
			}
		}
	}`


export const Head = ({ data }) => <SEO title="My Blog Posts" />

export default BlogPage