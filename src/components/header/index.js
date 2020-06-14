import React from "react"

import css from "./styles.module.sass"

export default function Header() {
  return (
    <header className={css.header}>
      <div>
        <h2 className={css.name}>Nick Luparev</h2>
        <p className={css.jobTitle}>Software engineer</p>
      </div>

      <div className={css.info}>
        <p>Aktobe, Kazakhstan 🏡</p>
        <p>+7 707 753 65 78 ☎</p>
        <p>email@mail.ru ✉️</p>
      </div>
    </header>
  )
}
