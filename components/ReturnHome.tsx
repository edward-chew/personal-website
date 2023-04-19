import Link from 'next/link'

import Arrow from '@/../public/images/Arrow.svg'

import styles from './styles/ReturnHome.module.css'

export default function ReturnHome() {
  return (
    <div className={styles["return-home"]}>
      <Link className="link" href="/">Return Home<img className="arrow-link" src={Arrow.src} alt="arrow"/></Link>
    </div>
  )
}