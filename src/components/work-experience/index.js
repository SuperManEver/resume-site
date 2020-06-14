import React from "react"

import BlockLayout from "../block-layout"

import css from "./styles.module.sass"

export default function WorkExperience() {
  return (
    <>
      <BlockLayout>
        <BlockLayout.Left>
          <p className={css.companyName}>Netology Group</p>
          <p className={css.date}>
            2019-12 - <span className={css.present}>Present</span>
          </p>
        </BlockLayout.Left>
        <BlockLayout.Content>
          <p className={css.jobTitle}>Frontend developer</p>
          <ul>
            <li>
              Extended onboarding interface and made it more like a chat system
            </li>
            <li>
              Created landing pages for different events, olympiads for example
            </li>
            <li>
              Implementing A/B tests for new features and running experiments
            </li>
          </ul>
        </BlockLayout.Content>
      </BlockLayout>

      <BlockLayout>
        <BlockLayout.Left>
          <p className={css.companyName}>Evrone</p>
          <p className={css.date}>2019-03 - 2019-12</p>
        </BlockLayout.Left>
        <BlockLayout.Content>
          <p className={css.jobTitle}>Frontend developer</p>
          <ul>
            <li>Desktop and Mobile version for KFC's CRM and ERP system.</li>
            <li>Сonducting interviews with Front end developers</li>
          </ul>
        </BlockLayout.Content>
      </BlockLayout>
    </>
  )
}
