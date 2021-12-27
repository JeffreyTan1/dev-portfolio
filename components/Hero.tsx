import React, { ReactElement } from 'react'
import styles from './../styles/Hero.module.css'
import Section from './Section'

interface Props {
  
}

export default function Hero({}: Props): ReactElement {
  return (
    <Section>
      <div className={styles.hero}>
        <h3>G&apos;Day 👋, I am</h3>
        <h1>Jeffrey Tan</h1>
        <h1>I build things for mobile and the web.</h1>
      </div>
    </Section>
  )
}
