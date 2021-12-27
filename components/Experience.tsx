import React, { ReactElement } from 'react'
import Section from './Section'
import styles from './../styles/Experience.module.css'
interface Props {
  
}

export default function Experience({}: Props): ReactElement {
  return (
    <Section>
      <div className={styles.experience}>
        <h2><span>{`02. `}</span>Experience</h2>
        <p>
          
        </p>
      </div>
    </Section>
  )
}
