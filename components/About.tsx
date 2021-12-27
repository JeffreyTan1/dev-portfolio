import React, { ReactElement } from 'react'
import Section from './Section'
import styles from './../styles/About.module.css'
import Image from 'next/image'
interface Props {
  
}


const paragraph1 = `
Hello, I'm Jeff, a Software Engineer from Melbourne, Australia.
`

const paragraph2 = `
I began my journey at the beginning of 2020 when I commenced my Bachelors in Computer Science. 
The moment I touched JavaScript, my mind was opened to a whole world of web applications and I haven't looked back since.
`

const paragraph3 = `
Outside of being a programmer, I am a big fan of video games. Right now my game stack consists of R6, Valorant, and Rust.
Another big part of my life is competing as a Powerlifter. 
`

const paragraph4 = `
These are some of the technologies I've been using recently:
`

const listItems = ['JavaScript', 'TypeScript', 'React', 'React Native (Expo)', 'Node + Express', 'NextJS', 'MongoDB']

export default function About({}: Props): ReactElement {
  return (
    <Section>
      <div className={styles.about}>
        <div>
          <h2><span>{`01. `}</span> About Me</h2>
          <p>
            {paragraph1}
          </p> 
          <p>
            {paragraph2}
          </p>  
          <p>
            {paragraph3}
          </p>  
          <p>
            {paragraph4}
          </p>  
          <ul>
            {
              listItems.map((item, index) => (<li key={index}>{item}</li>))
            }
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <Image src='/images/profile.png' alt="Jeffrey Tan" height={800} width={750}/>
        </div>
      </div>
    </Section>
  )
}
