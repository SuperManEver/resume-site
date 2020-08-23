import React from "react"
import Layout from "src/components/layout"
import BlockLayout from "src/components/block-layout"

import css from "./styles.module.sass"

export default function Education() {
  return (
    <Layout>
      <BlockLayout>
        <div className={css.root}>
          <p className={css.title}>
            <b>Computer Engineering</b> at{" "}
            <a href="https://unecon.ru/">
              Saint Petersburg State University of Engineering and Economics
            </a>
          </p>

          <ul className={css.items}>
            <li>September 2006 to May 2011</li>
            <li>BS in Computer Engineering</li>
            <li>
              Course Work in Semantic Web, Computer Architecture, Data
              Structures and Algorithms, Database Systems, Artificial
              Intelligence, Cryptography and Security, GUI and Unix Programming,
              Operating Systems, Computer Networks
            </li>
          </ul>
        </div>
      </BlockLayout>
    </Layout>
  )
}
