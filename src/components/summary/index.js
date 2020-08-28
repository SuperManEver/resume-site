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
        </section>
      </div>
    </BlockLayout>
  )
}
