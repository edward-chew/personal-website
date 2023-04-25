import type { ReactElement } from 'react'
import Link from 'next/link'

import ProjectPageLayout from '../../components/layouts/ProjectPageLayout'

import Logo from '@/../public/images/CodeLabBrand/Logo.svg'
import LogoIcon from '@/../public/images/CodeLabBrand/LogoIcon.svg'
import Flyer1 from '@/../public/images/CodeLabBrand/Flyer1.jpg'
import Flyer2 from '@/../public/images/CodeLabBrand/Flyer2.jpg'
import Flyer3 from '@/../public/images/CodeLabBrand/Flyer3.jpg'
import Flyer4 from '@/../public/images/CodeLabBrand/Flyer4.jpg'
import Flyer5 from '@/../public/images/CodeLabBrand/Flyer5.jpg'
import Flyer6 from '@/../public/images/CodeLabBrand/Flyer6.jpg'
import Flyer7 from '@/../public/images/CodeLabBrand/Flyer7.jpg'
import Flyer8 from '@/../public/images/CodeLabBrand/Flyer8.jpg'
import Flyer9 from '@/../public/images/CodeLabBrand/Flyer9.jpg'
import Flyer10 from '@/../public/images/CodeLabBrand/Flyer10.jpg'
import Flyer11 from '@/../public/images/CodeLabBrand/Flyer11.jpg'
import Flyer12 from '@/../public/images/CodeLabBrand/Flyer12.jpg'

import projStyles from '../styles/project-page.module.css'
import styles from '../styles/codelab-brand.module.css'

export default function CodeLabBrand() {
  return (
    <div className={` ${projStyles["project-page"]} ${styles["codelab-brand"]} `}>
      <div className={projStyles["title"]}>
        <img className={styles["logo"]} src={LogoIcon.src} alt="Logo"/>
        <h1>CodeLab Brand Identity</h1>
        <h5 className="italic">Updated 6.17.2022</h5>
      </div>

      <section className={styles["role"]}>
        <h2 className="demi">My Role</h2>
        <p className="small-body">
          In my first two years of CodeLab, I shaped the organization’s image through my role as the Vice President of External. I handled all communications for the organization—social media, written article content, our website, and the design of many marketing assets.
        </p>
        <p className="small-body">
          As a new organization, branding was a blank slate. It became a fun challenge to apply my creativity while still maintaining a professional image.
        </p>
        <p className="small-body">
          To learn more about the organization, view my <Link className="small-body" href="/codelab-community">CodeLab Community page</Link>.
        </p>
      </section>

      <section className={styles["logo-development"]}>
        <h2 className="demi">Logo</h2>
        <p className="small-body">
          First, we needed a logo. After playing around with various designs, we selected the design below. The dot-slash refers to the syntax for the current working directory, and thus the syntax used to execute a compiled script in a UNIX environment.
        </p>
        <div className={` ${styles["logo-row"]} row justify-content-center `}>
          <div className={` ${styles["full-logo"]} col-md-6 `}><img src={Logo.src} alt="Logo"/></div>
          <div className={` ${styles["icon-logo"]} col-md-6 `}><img src={LogoIcon.src} alt="Icon logo"/></div>
        </div>
      </section>

      <section className={styles["website"]}>
        <h2 className="demi">Website</h2>
        <p className="small-body">
          In Summer 2021, I redesigned the website, which is one of my favorite wireframes I've created to date. 
        </p>
        <p className="small-body">
          In Fall 2021, I led and mentored a student team to develop the site in React. In addition to teaching the students frontend development, I planned and delegated tasks over a rapid 6 weeks of agile development. It was incredible seeing my team grow their development and communication skills throughout the quarter, and I am so proud to see what they were able to create.
        </p>
        <p className="small-body">
          The website is currently live at <Link className="small-body" href="https://codelabdavis.com/" target="blank_">codelabdavis.com</Link>.
        </p>
      </section>

      <section className={styles["flyers"]}>
        <h2 className="demi">Flyers</h2>
        <p className="small-body">
          Even after I moved out of the formal graphics roles on the board, I continued to get involved in design occasionally. Here are just a handful of the assets I created over the years. You’ll notice the recruitment flyers take a step away from the brand; I took more creative liberties with those.
        </p>
        <div className="row justify-content-center">
          <div className="col-12"><img src={Flyer1.src} alt=""/></div>
          <div className="col-md-4"><img src={Flyer2.src} alt=""/></div>
          <div className="col-md-4"><img src={Flyer3.src} alt=""/></div>
          <div className="col-md-4"><img src={Flyer4.src} alt=""/></div>
          <div className="col-md-6"><img src={Flyer5.src} alt=""/></div>
          <div className="col-md-6"><img src={Flyer6.src} alt=""/></div>
          <div className="col-md-6"><img src={Flyer7.src} alt=""/></div>
          <div className="col-md-6"><img src={Flyer8.src} alt=""/></div>
          <div className="col-md-6">
            <img src={Flyer9.src} alt=""/>
            <img src={Flyer10.src} alt=""/>
          </div>
          <div className="col-md-6">
            <img src={Flyer11.src} alt="" className="no-shadow"/>
            <img src={Flyer12.src} alt=""/>
          </div>
        </div>
      </section>
    </div>
  )
}

CodeLabBrand.getLayout = (page : ReactElement) => {
  return (
    <ProjectPageLayout>
      {page}
    </ProjectPageLayout>
  )
}