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
    </>
  )
}
