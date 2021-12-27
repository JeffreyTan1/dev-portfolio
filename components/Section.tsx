import React, { ReactElement } from 'react'
import styles from './../styles/Section.module.css'

interface Props {
  children: any
}

export default function Section({children}: Props): ReactElement {
  return (
    <section className={styles.sectionContent}>
      {children}
    </section>
  )
}
