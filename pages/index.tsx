import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import styles from '../styles/Home.module.css'
import Section from '../components/Section'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jeffrey Tan</title>
        <meta name="description" content="Portfolio website created using Next.js" />
        <meta name="keywords" content="Portfolio, NextJS" />
        <meta name="author" content="Jeffrey Tan" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main className={styles.main}>
        <NavBar />
        <Hero/>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
