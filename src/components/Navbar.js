import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import '../styles/nav.css'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <nav>
        <h1>
          <Link to="/">Lorena Ledezma</Link>
        </h1>
        <div>
          {data.allWordpressPage.edges
            .filter(({ node }) => node.slug !== `homepage` )
            .map(edge => (
            <Link
              className="navbar-item"
              to={edge.node.slug}
              key={edge.node.slug}
            >
              {edge.node.title}
            </Link>
            ))}
        </div>
      </nav>
    )}
  />
)

export default Navbar
