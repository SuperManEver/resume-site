import React from "react"
import Layout from "src/components/layout"
import Workexperience from "src/components/work-experience"

export default function jobs({ data }) {
  const {
    allDataJson: { nodes },
  } = data

  const [{ jobs }] = nodes

  return (
    <Layout>
      <>
        <Workexperience jobs={jobs} />
      </>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Experience {
    allDataJson {
      nodes {
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
