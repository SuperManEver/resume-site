/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "src/components/header"
import Nav from "src/components/navigation"
import { useStaticQuery, graphql } from "gatsby"

import css from "./styles.module.sass"

const Layout = ({ children }) => {
  const {
    allDataJson: { nodes },
  } = useStaticQuery(graphql`
    query Summary {
      allDataJson {
        nodes {
          contacts {
            email
            jobTitle
            phone
          }
        }
      }
    }
  `)

  const { contacts } = nodes[0]

  return (
    <>
      <div className={css.root}>
        <Header contacts={contacts} />
        <Nav />
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
