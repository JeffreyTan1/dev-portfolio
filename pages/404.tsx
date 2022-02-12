import styles from './../styles/404.module.css'
import Image
 from 'next/image'
export default function Custom404() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Image src='/gifs/silly.gif' alt='BMO dancing' width={250} height={175}/>
      </div>
    </div>
  )
}