import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			<p>My cool posts will go in here</p>
			{
				data.allMdx.nodes.map((node) => (
					<article key={node.id}>
						<h2>{node.frontmatter.title}</h2>
						<b>Posted: {node.frontmatter.date}</b>
						<br />
						<br />
						<p>{node.excerpt}</p>
						<h6>{node.parent.modifiedTime}</h6>
						<br />
						<br />
						<br />
						<br />
						<br />
					</article>
				))
			}
		</Layout>
	)
}

export const query = graphql`
	query {
		# allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
		# 	nodes {
		# 		name
		# 		dir
		# 	}
		# }
		allMdx(sort: { frontmatter: { date: DESC } }) {
			nodes {
				frontmatter {
					date(formatString: "YYYY/MM/DD")
					title
				}
				body
				id
				excerpt
				parent {
					... on File {
						modifiedTime(formatString: "MMMM D, YYYY")
					}
				}
			}
		}
	}`


export const Head = ({ data }) => <Seo title="My Blog Posts" />

export default BlogPage