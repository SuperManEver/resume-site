import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/layout"
import Summary from "src/components/summary"
import Workexperience from "src/components/work-experience"
// import Image from "../components/image"
// import SEO from "../components/seo"

import "./global.css"

const IndexPage = () => (
  <Layout>
    <Summary />
    <Workexperience />
  </Layout>
)

export default IndexPage
