import styles from './styles/Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles["nav"]}>
      <div className={styles["nav-left"]}>
        <a href="/"><b className="demi">Edward Chew</b> / Coding and Designing</a>
      </div>
      <div className={styles["nav-right"]}>
        <a href="/">WORK</a>
        <a href="about">ABOUT ME</a>
      </div>
    </nav>
  )
}