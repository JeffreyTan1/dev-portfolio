import styles from "./../styles/404.module.css";
import Image from "next/image";
import NavBar from "../components/NavBar";
export default function Custom404() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Image
          src="/gifs/silly.gif"
          alt="BMO dancing"
          width={250}
          height={175}
        />
      </div>
    </div>
  );
}
