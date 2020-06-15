import React from "react"

import css from "./styles.module.sass"

export default function Tools({ tools }) {
  return (
    <div className={css.tools}>
      <p>Tools:</p>
      <ul>
        {tools.map(tool => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
    </div>
  )
}
