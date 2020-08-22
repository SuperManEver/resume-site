import React from "react"
import { graphql } from "gatsby"

import Layout from "src/components/layout"
import Summary from "src/components/summary"
import Header from "src/components/header"
import Workexperience from "src/components/work-experience"

import "./global.css"

const IndexPage = ({ data }) => {
  const {
    allDataJson: { nodes },
  } = data

  const [{ jobs, summary, contacts }] = nodes

  return (
    <Layout>
      <Header contacts={contacts} />
      <Summary summary={summary} />
      <Workexperience jobs={jobs} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyJobs {
    allDataJson {
      nodes {
        contacts {
          email
          jobTitle
          phone
        }
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
