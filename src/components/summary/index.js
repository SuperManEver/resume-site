import React from "react"

import css from "./styles.module.sass"

export default function Summary() {
  return (
    <div className={css.wrapper}>
      <aside className={css.prefix}>
        <h2>Summary</h2>
      </aside>
      <section>
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
      </section>
    </div>
  )
}
