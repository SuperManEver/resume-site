import React from "react"
import { graphql } from "gatsby"

import Layout from "src/components/layout"
import Summary from "src/components/summary"

const IndexPage = ({ data }) => {
  const {
    allDataJson: { nodes },
  } = data

  const [{ summary }] = nodes

  return (
    <Layout>
      <Summary summary={summary} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query SummaryInfo {
    allDataJson {
      nodes {
        summary
      }
    }
  }
`

export default IndexPage
