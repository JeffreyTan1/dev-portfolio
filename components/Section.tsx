import React, { ReactElement } from 'react'
import styles from './../styles/Section.module.css'

interface Props {
  children: any
  id: string
}

export default function Section({children, id}: Props): ReactElement {
  return (
    <section className={styles.sectionContent} id={id}>
      {children}
    </section>
  )
}
