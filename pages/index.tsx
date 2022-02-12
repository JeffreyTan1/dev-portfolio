import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import styles from '../styles/Home.module.css'
import Socials from '../components/Socials'

interface Props {
  serviceID:string, templateID:string, userID:string
}


const Home = ({serviceID, templateID, userID}: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jeffrey Tan Portfolio</title>
        <meta name="description" content="Portfolio website created using Next.js" />
        <meta name="keywords" content="Portfolio, NextJS" />
        <meta name="author" content="Jeffrey Tan" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main className={styles.main} >
        <NavBar />
        <Hero/>
        <About />
        <Experience />
        <Projects />
        <Contact serviceID={serviceID} templateID={templateID} userID={userID}/> 
        
      </main>

      <footer className={styles.footer}>
        <Socials />     
      </footer>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: {
      serviceID: process.env.EMAILJS_SERVICE_ID,
      templateID: process.env.EMAILJS_TEMPLATE_ID,
      userID: process.env.EMAILJS_USER_ID
    }, 
  }
}