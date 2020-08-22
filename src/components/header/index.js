import React from "react"

import css from "./styles.module.sass"

export default function Header({ contacts: { email, jobTitle, phone } }) {
  return (
    <header className={css.wrapper}>
      <div>
        <h2 className={css.name}>Nick Luparev</h2>
        <p className={css.jobTitle}>{jobTitle}</p>
      </div>

      <div className={css.info}>
        <p>Aktobe, Kazakhstan 🏡</p>
        <p>{phone} ☎</p>
        <p>{email} ✉️</p>
      </div>
    </header>
  )
}
