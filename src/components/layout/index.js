/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import Header from "src/components/header"
import Nav from "src/components/navigation"
import useSiteMetadata from "src/hooks/use-sitemetadata"
import useContactsData from "src/hooks/use-contactsdata"

import { useStaticQuery, graphql } from "gatsby"

import css from "./styles.module.sass"

const Layout = ({ children }) => {
  const { title, description, author } = useSiteMetadata()
  const contacts = useContactsData()

  return (
    <>
      <div className={css.root}>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} />
          <meta name="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content={author} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
        </Helmet>
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
