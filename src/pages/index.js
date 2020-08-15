import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "src/components/layout"
import Summary from "src/components/summary"
import Workexperience from "src/components/work-experience"

import "./global.css"

const IndexPage = ({ data }) => {
  const {
    allDataJson: { nodes },
  } = data

  const [{ jobs, summary }, _] = nodes

  return (
    <Layout>
      <Summary summary={summary} />
      <Workexperience jobs={jobs} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyJobs {
    allDataJson {
      nodes {
        summary
        jobs {
          employeerName
          startDate
          endDate
          jobTitle
          achievements
          tools
        }
      }
    }
  }
`

export default IndexPage
