import React from "react"

import BlockLayout from "src/components/block-layout"

import css from "./styles.module.sass"

export default function Summary() {
  return (
    <BlockLayout>
      <BlockLayout.Left>
        <h2>Summary</h2>
      </BlockLayout.Left>
      <BlockLayout.Content>
        <ul>
          <li>
            Reliable Front-End Engineer with product-aimed mindset and wide
            experience in development of enterprise-level single-page
            applications (SPA) with best practices regarding architecture,
            technologies and tests.
          </li>
          <li>
            Result-driven, customer-focused, highly organized and analytical
            software engineer with experience in developement, integration, and
            maintaining projects
          </li>
          <li>
            Effective communicator, exhibit a team-oriented and collaborative
            attitude
          </li>
        </ul>
      </BlockLayout.Content>
    </BlockLayout>
  )
}
