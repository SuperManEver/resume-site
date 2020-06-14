import React from "react"

/**
 * Compound component for block layout
 */

import css from "./styles.module.sass"

function Left({ children }) {
  return <aside className={css.left}>{children}</aside>
}

function Content({ children }) {
  return <section className={css.right}>{children}</section>
}

export default function BlockLayout({ children }) {
  return <div className={css.wrapper}>{children}</div>
}

BlockLayout.Left = Left
BlockLayout.Content = Content