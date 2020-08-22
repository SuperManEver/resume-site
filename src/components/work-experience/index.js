import React from "react"
import dayjs from "dayjs"

import Tools from "src/components/tools"
import { date } from "src/utils/date"
import BlockLayout from "../block-layout"

import css from "./styles.module.sass"

export default function WorkExperience({ jobs }) {
  return (
    <>
      {jobs.map(job => (
        <BlockLayout key={job.employeerName}>
          <BlockLayout.Left>
            <p className={css.companyName}>{job.employeerName}</p>
            <p className={css.date}>
              {date(job.startDate)} -{" "}
              <span className={css.present}>{date(job.endDate)}</span>
            </p>
          </BlockLayout.Left>
          <BlockLayout.Content>
            <p className={css.jobTitle}>Frontend developer</p>
            <ul>
              {job.achievements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <Tools tools={job.tools} />
          </BlockLayout.Content>
        </BlockLayout>
      ))}

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

      <BlockLayout>
        <BlockLayout.Left>
          <p className={css.companyName}>Agile Ventures</p>
          <p className={css.date}>2015-110 - 2016-03</p>
        </BlockLayout.Left>
        <BlockLayout.Content>
          <p className={css.jobTitle}>Backend developer (Internship)</p>
          <ul>
            <li>Refactoring and optimization events dashboard</li>
            <li>
              Integration with EDX platform for showing five latest events
            </li>
          </ul>
          <Tools
            tools={[
              "JavaScript",
              "Ruby",
              "Ruby on Rails",
              "PostgreSQL",
              "Git",
              "Heroku",
            ]}
          />
        </BlockLayout.Content>
      </BlockLayout>

      <BlockLayout>
        <BlockLayout.Left>
          <p className={css.companyName}>Freelance Android developer</p>
          <p className={css.date}>2011-06 - 2012-03</p>
        </BlockLayout.Left>
        <BlockLayout.Content>
          <p className={css.jobTitle}>Android developer</p>
          <ul>
            <li>Implemented Restaurants search app</li>
            <li>Implemented app using Geo API location service</li>
          </ul>
          <Tools tools={["Android", "Maven", "Gradle"]} />
        </BlockLayout.Content>
      </BlockLayout>

      <BlockLayout>
        <BlockLayout.Left>
          <p className={css.companyName}>"SIAB" Bank</p>
          <p className={css.date}>2010-11 - 2011-06</p>
        </BlockLayout.Left>
        <BlockLayout.Content>
          <p className={css.jobTitle}>Java EE developer (Internship)</p>
          <ul>
            <li>
              Implemented API for working with payment providers using SOAP
              protocol
            </li>
            <li>Found vulnerability in existing API which </li>
          </ul>
          <Tools
            tools={[
              "Java EE",
              "Apache maven",
              "Java servlet",
              "Apache tomcat",
              "SOAP Protocol",
            ]}
          />
        </BlockLayout.Content>
      </BlockLayout>
    </>
  )
}
