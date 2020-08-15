import React from "react"

import BlockLayout from "src/components/block-layout"

import css from "./styles.module.sass"

export default function Summary({ summary }) {
  return (
    <BlockLayout>
      <BlockLayout.Left>
        <h2>Summary</h2>
      </BlockLayout.Left>
      <BlockLayout.Content>
        <ul>
          {summary.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </BlockLayout.Content>
    </BlockLayout>
  )
}
