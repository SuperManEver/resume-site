import React from "react"

import BlockLayout from "src/components/block-layout"
import Image from "src/components/image"

import css from "./styles.module.sass"

export default function Summary({ summary }) {
  return (
    <BlockLayout>
      <div className={css.root}>
        <aside className={css.left}>
          <div className={css.profileImg}></div>
        </aside>

        <section className={css.right}>
          <h2 className={css.title}>Nikita Luparev</h2>
          <ul className={css.items}>
            {summary.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <ul className={css.socialLinks}>
            <li>
              <a
                className={css.socialLink}
                target="_blank"
                href="https://www.linkedin.com/in/nikita-luparev-007b97ba/"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                className={css.socialLink}
                target="_blank"
                href="https://twitter.com/nluparev"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                className={css.socialLink}
                target="_blank"
                href="https://github.com/SuperManEver"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </BlockLayout>
  )
}
