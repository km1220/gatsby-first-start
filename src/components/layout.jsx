import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import {
	container,
	heading,
	navLinks,
	navLinkItem,
	navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {


	const data = useStaticQuery(graphql`{
		site {
		  siteMetadata {
			title
			siteUrl
			description
		  }
		}
	  }`);

	return (
		<div className={container}>
			<header>{data.site.siteMetadata.title}</header>
			<nav>
				<ul className={navLinks}>
					<li className={navLinkItem}>
						<Link to="/" className={navLinkText}>
							Home
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to="/blog" className={navLinkText}>
							Blog
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to="/about" className={navLinkText}>
							About
						</Link>
					</li>
				</ul>
			</nav>
			<main>
				<h1 className={heading}>{pageTitle}</h1>
				{children}
			</main>
		</div>
	)
}

export default Layout