import type { ReactElement } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import ProjectPageLayout from '../../components/layouts/ProjectPageLayout'

import Logo from '@/../public/images/HandsTogether/Logo.png'
import Item from '@/../public/images/HandsTogether/Item.gif'
import Shop from '@/../public/images/HandsTogether/Shop.gif'

import projStyles from '../styles/project-page.module.css'
import styles from '../styles/hands-together.module.css'

export default function HandsTogether() {
  return (
    <>
      <Head>
        <title>Hands Together / Edward Chew</title>

        <meta property="og:title" content="Hands Together / Edward Chew"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.edwardchew.me/hands-together"/>
        <meta property="og:image" content="https://www.edwardchew.me/images/Home/PrimaryProjects/HandsTogether.png"/>
      </Head>

      <div className={` ${projStyles["project-page"]} ${styles["hands-together"]} `}>
        <div className={projStyles["title"]}>
          <img className={styles["logo"]} src={Logo.src} alt="Logo"/>
          <h1>Hands Together</h1>
          <h5 className="italic">Updated 7.24.2021</h5>
        </div>

        <section className="row">
          <div className="col-md-9">
            <h2 className="demi">A Center for Children</h2>
            <p className="small-body">
              Hands Together is a Santa Ana-based nonprofit working to bring early childhood education accessible to all. Their team was seeking a website refresh, because their former website was visually dated and lacked certain calls to action. Over the course of 16 weeks, our team worked to build up numerous static pages, a shop with payments processed through Stripe, and an administrator dashboard allowing members of the organization to log in and list events and items for sale.
            </p>
            <p className="small-body">
              View the completed site <Link className="small-body" href="https://www.handstogether-sa.org/" target="blank_">here</Link>.
              <br/>View the full project write up <Link className="small-body" href="https://codelabdavis.medium.com/hands-together-winter-spring-21-mentored-project-c1bb2098f4ce" target="blank_">here</Link>.
            </p>
            <h2 className="demi">My Role</h2>
            <p className="small-body">
              I created the frontend of the shop and item pages, which involved pulling items from the database and dynamically displaying the data. I also built a “shopping cart”, which allowed site visitors to add items to their cart and be able to checkout with those items even after leaving the page or site. This also required numerous checks to the database to see what items were available and calculations of total costs.
            </p>
            <p className="small-body">
              As items are listed and sold and as events come and go, the need for images on the website changes. This meant we needed a way to dynamically store images. I set up image hosting with Amazon S3, which allowed us to upload images as items and events were created, and delete them later as needed.
            </p>
            <p className="small-body">
              Overall, this was a really exciting project to work on. This was my first time being involved in a full fledged full stack project, and I learned a lot of new tools and technology.
            </p>
          </div>
          <div className="col-md-3">
            <h2 className="demi">Duration</h2>
            <p className="small-body">
              16 Weeks
              <br/>Jan - Jun 2021
            </p>
            <h2 className="demi">Team Members</h2>
            <p className="small-body">
              <span className="demi">Development</span>
              <br/>Edward Chew (Me!)
              <br/>Grisha Bandodkar
              <br/>Guk il Kim 
              <br/>Nicole Lazovsky
              <br/>Abhay Thacker
              <br/>Michelle Tran
            </p>
            <p className="small-body">
              <span className="demi">Design</span>
              <br/>Megan Chueh
              <br/>Sienna Gonzalez
            </p>
            <h2 className="demi">Tools</h2>
            <p className="small-body">
              Node.js
              <br/>MongoDB
              <br/>Mongoose
              <br/>Express
              <br/>React
            </p>
          </div>
        </section>

        <section className={styles["shop-demo"]}>
          <h2 className="demi">Shop Demo</h2>
          <p className="small-body">
            Here's a demo of some of the interactions on the shop pages. It was fun working on pages with so many dynamic elements. Images in the gifs are filler images.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-6"><img src={Shop.src} alt="Shop page interactions"/></div>
            <div className="col-md-6"><img src={Item.src} alt="About page"/></div>
          </div>
        </section>
      </div>
    </>
  )
}

HandsTogether.getLayout = (page : ReactElement) => {
  return (
    <ProjectPageLayout>
      {page}
    </ProjectPageLayout>
  )
}