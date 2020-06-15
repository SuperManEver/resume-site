import React from "react"

import BlockLayout from "../block-layout"
import Tools from "src/components/tools"

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
          <Tools
            tools={[
              "React.js 16",
              "Webpack 4",
              "Adaptive Layout",
              "Redux",
              "Sass",
              "Flow.js",
            ]}
          />
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
            <li>
              Created custom solution for persistence layer which reduced costs
              of development <br /> about to 30%
            </li>
            <li>
              Increased app performance by improving how graph of related data
              gets formed
            </li>
            <li>Сonducting interviews with Front end developers</li>
          </ul>
          <Tools
            tools={[
              "Vue.js 2",
              "Vuex",
              "Webpack 4",
              "Adaptive Layout",
              "Ruby on Rails",
              "SCSS",
              "Capistrano",
            ]}
          />
        </BlockLayout.Content>
      </BlockLayout>

      <BlockLayout>
        <BlockLayout.Left>
          <p className={css.companyName}>Melp.pro</p>
          <p className={css.date}>2018-10 - 2019-01</p>
        </BlockLayout.Left>
        <BlockLayout.Content>
          <p className={css.jobTitle}>Fullstack developer</p>
          <ul>
            <li>Update app's UI according to new design</li>
            <li>maintaining backend Rails API</li>
            <li>CI config and setup</li>
            <li>Configure app's execution environment</li>
          </ul>
          <Tools
            tools={[
              "Linux Administration",
              "Redis",
              "Ruby on Rails",
              "React.js",
              "MobX",
              "Typescript",
              "Ansible",
              "Devops",
              "Capistrano",
              "Nginx",
            ]}
          />
        </BlockLayout.Content>
      </BlockLayout>
    </>
  )
}
