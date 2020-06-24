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
            <li>
              Desktop and Mobile version for KFC's CRM and ERP system. More{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://evrone.com/kfc"
              >
                here
              </a>
            </li>
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

      <BlockLayout>
        <BlockLayout.Left>
          <p className={css.companyName}>Qoden</p>
          <p className={css.date}>2018-08 - 2019-02</p>
        </BlockLayout.Left>
        <BlockLayout.Content>
          <p className={css.jobTitle}>Frontend developer</p>
          <ul>
            <li>High end SPA for cryptocurrency exchanges</li>
            <li>Implemented Auth flow</li>
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

      <BlockLayout>
        <BlockLayout.Left>
          <p className={css.companyName}>We Are Volt</p>
          <p className={css.date}>2017-02 - 2018-08</p>
        </BlockLayout.Left>
        <BlockLayout.Content>
          <p className={css.jobTitle}>Frontend developer</p>
          <ul>
            <li>
              Web development and consulting focused on frontend part of web
              apps: Performance, Architecture, Defining a Data Layer. Personal
              specialties included application architecture, data model
              definition and selecting/creating more easy to use solution for
              working with data layer, reusability patterns, code
              maintainability
            </li>
            <li>
              Being part of a team creating and maintaining products for
              following companise: <span>Cross Clear</span>, <span> Slyce</span>
              , <span>GoGenie</span>, <span>Homebees</span>
            </li>
          </ul>
          <Tools
            tools={[
              "Rails",
              "Node.js",
              "Postgresql",
              "Mobx",
              "React.js",
              "MobX",
              "MobX-Model",
              "Flow type",
              "jQuery",
              "Adaptive layout",
              "Docker",
              "Sequelize.js",
            ]}
          />
        </BlockLayout.Content>
      </BlockLayout>

      <BlockLayout>
        <BlockLayout.Left>
          <p className={css.companyName}>PyShop</p>
          <p className={css.date}>2016-11 - 2017-02</p>
        </BlockLayout.Left>
        <BlockLayout.Content>
          <p className={css.jobTitle}>Frontend developer (Internship)</p>
          <ul>
            <li>
              Implemented app using React Native used for company's internal
              purposes
            </li>
            <li>
              Implemented part of Frontend app used for HR purposes using
              React/Redux
            </li>
          </ul>
          <Tools
            tools={["JS/ES5", "React.js", "Redux", "Webpack 2", "Typescript"]}
          />
        </BlockLayout.Content>
      </BlockLayout>
    </>
  )
}
