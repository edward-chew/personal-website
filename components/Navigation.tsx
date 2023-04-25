import Link from 'next/link'

import styles from './styles/Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles["nav"]}>
      <div className={styles["nav-left"]}>
        <Link href="/"><b className="demi">Edward Chew</b> / Coding and Designing</Link>
      </div>
      <div className={styles["nav-right"]}>
        <Link href="/">WORK</Link>
        <Link href="about">ABOUT ME</Link>
      </div>
    </nav>
  )
}