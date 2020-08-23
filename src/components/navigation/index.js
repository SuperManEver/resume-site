import React from "react"
import { Link } from "gatsby"

import css from "./styles.module.sass"

export default function Navigation() {
  return (
    <nav className={css.root}>
      <ul className={css.linksRoot}>
        <li>
          <Link to="/" activeClassName={css.active}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="/jobs" activeClassName={css.active}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="/education" activeClassName={css.active}>
            Education
          </Link>
        </li>
      </ul>
    </nav>
  )
}
