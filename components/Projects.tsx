import React, { ReactElement } from 'react'
import Section from './Section'
interface Props {
  
}

export default function Projects({}: Props): ReactElement {
  return (
    <Section>
      <h2><span>{`03. `}</span>Projects</h2>
      <p>Here are a few things that I have been working on recently. Many of them are deployed onto the web, or Google Play and App Store.</p>
      
    </Section>
  )
}
