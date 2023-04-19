import Link from 'next/link';
import { StaticImageData } from 'next/image';

import Arrow from '../public/images/Arrow.svg'

import styles from './styles/PrimaryProject.module.css';

type PrimaryProjectProps = {
  image: StaticImageData,
  skills: string,
  title: string,
  subtitle: string,
  tools: string,
  link: string,
}

export default function PrimaryProject({image, skills, title, subtitle, tools, link} : PrimaryProjectProps) {
  return (
    <Link href={link} className={styles["work"]}>
      <div className="row">
        <div className={`${styles["left"]} col-md-7`}>
          <img src={image.src} alt=""/>
        </div>
        <div className={`${styles["right"]} col-md-5`}>
          <h4 className={"bold"}>{skills}</h4>
          <h2 className={"demi"}>{title}</h2>
          <p>{subtitle}</p>
          <h5 className={"italic"}>{tools}</h5>
          <img className={`${styles["arrow-link"]} arrow-link`} src={Arrow.src} alt="arrow"></img>
        </div>
      </div>
    </Link>
  )
}