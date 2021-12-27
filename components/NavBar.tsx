import React, { ReactElement, useEffect, useState } from 'react'
import styles from '../styles/NavBar.module.css'
import {AiOutlineMenu} from 'react-icons/ai';

interface Props {
  
}

const MenuItems = () => {
  return (
    <>
      <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>01. About</a>
      </li>
      <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>02. Experience</a>
      </li>
      <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>03. Projects</a>
      </li>
      <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>04. Contact</a>
      </li>
    </>
  )
}

export default function NavBar({}: Props): ReactElement {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  useEffect(() => {
    console.log(hamburgerOpen)
  }, [hamburgerOpen])

  return (
    <nav className={styles.navBar}>
        <a href="#" className={styles.navLogo}>JT</a>
        <ul className={styles.navMenuWeb}>
          <MenuItems/>
        </ul>
        <div className={styles.hamburger} >
            <AiOutlineMenu onClick={() => setHamburgerOpen(!hamburgerOpen)}/>
            {
              hamburgerOpen &&
              <ul className={styles.navMenuMobile}>
                <MenuItems/>
              </ul>
            }
        </div>
    </nav>

  )
}
