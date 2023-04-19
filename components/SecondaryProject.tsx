import Link from 'next/link';

import styles from './styles/SecondaryProject.module.css';
import utils from '@/styles/utils.module.css'
import { StaticImageData } from 'next/image';

import ExternalLink from '@/../public/images/ExternalLink.svg'

type SecondaryProjectProps = {
  image: StaticImageData,
  skills: string,
  title: string,
  subtitle?: string,
  link?: string,
  external?: boolean,
  disabled?: boolean,
}

export default function PrimaryProject({image, skills, title, subtitle, link, external=false, disabled=false} : SecondaryProjectProps) {
  const contents = (
    <>
      <img className={`${styles["thumbnail"]} ${disabled ? "" : styles["enabled"] }`} src={image.src} alt=""/>
      <h4 className="bold">{skills}</h4>
      <h3 className="demi">{title} {external && <img className={styles["external-link"]} src={ExternalLink.src} alt="External link icon"/>}</h3>
      {subtitle && <h4 className={styles["description"]}>{subtitle}</h4>}
    </>
  )   

  return (
    link ? 
    <div className={` ${styles["other-work"]} ${utils["gutter40-col"]} col-md-6 `}>
      <Link href={link}>
        {contents}
      </Link>
    </div>
    :
    <div className={` ${styles["other-work"]} ${utils["gutter40-col"]} col-md-6 `}>
      {contents}
    </div>
  )
}