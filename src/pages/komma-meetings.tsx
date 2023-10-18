import { ReactElement } from 'react'
import Head from 'next/head'

import ProjectPageLayout from '../../components/layouts/ProjectPageLayout'

import Logo from '@/../public/images/KommaMeetings/Logo.svg'
import Team from '@/../public/images/KommaMeetings/Team.png'
import Homepage from '@/../public/images/KommaMeetings/Homepage.png'
import Availability from '@/../public/images/KommaMeetings/Availability.gif'
import Create from '@/../public/images/KommaMeetings/Create.gif'

import projStyles from '../styles/project-page.module.css'
import styles from '../styles/komma-meetings.module.css'

export default function KommaMeetings() {
  return (
    <>
      <Head>
        <title>Komma Meetings / Edward Chew</title>

        <meta property="og:title" content="Komma Meetings / Edward Chew"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://edwardchew.vercel.app/komma-meetings"/>
        <meta property="og:image" content="https://edwardchew.vercel.app/images/Home/PrimaryProjects/KommaMeetings.png"/>
      </Head>

      <div className={` ${projStyles["project-page"]} ${styles["komma-meetings"]} `}>
        <div className={projStyles["title"]}>
          <img className={projStyles["logo"]} src={Logo.src} alt="Logo"/>
          <h1>Komma Meeting Scheduling</h1>
          <h5 className="italic">Updated 6.17.2022</h5>
        </div>

        <section className="row">
          <div className="col-md-9">
            <h2 className="demi">Fast and Friendly</h2>
            <p className="small-body">
              Komma, a pivot from my previous project of the same name, is a productivity tool that automates the meeting scheduling process. With just a few clicks, generate a custom meeting link to gather your meeting guests' availabilities. Once everyone has given their input, calendar invites are sent to everyone, videoconferencing link and all. Throughout the process, we prioritized making the user experience both efficient and playful, resulting in the tagline "Fast and Friendly Meeting Scheduling".
            </p>
            <p className="small-body">
              This is easily the largest project I have ever been part of. This page is not at all comprehensive, and offers only a small glimpse into what the project was like.
            </p>
            <p className="small-body">
              After about 5 months of work, our team decided not to continue pursuing the project. While we had a largely functioning product, we never deployed/hosted it.
            </p>
            <img src={Team.src} alt="Team photo"/>
          </div>
          <div className="col-md-3">
            <h2 className="demi">Duration</h2>
            <p className="small-body">
              6 Months
              <br/>Jan - Jun 2021
            </p>
            <h2 className="demi">Team Members</h2>
            <p className="small-body">
              Edward Chew
              <br/>James Junaidi
              <br/>Omid Mogasemi
              <br/> Essam Sleiman
            </p>
            <h2 className="demi">Tools</h2>
            <p className="small-body">
              React
              <br/>Figma
              <br/>Premiere Pro
            </p>
          </div>
        </section>

        <section className={styles["glimpse"]}>
          <h2 className="demi">A Glimpse into Entreprenuership</h2>
          <p className="small-body">
            While this project started like any other computer science side project, it soon became so much more. After developing our earlier version of Komma, we decided to build this project as a startup. In January of 2021, we joined the UC Davis PLASMA startup accelerator, where we spent about 14 weeks developing our ideas through workshops, presentations, and mentorship. Instead of diving directly into the tech by building out a prototype, we spent countless hours ideating feature sets, exploring pricing models, interviewing potential customers, researching competitors, iterating wireframes, practicing investor pitches, and more.
          </p>
          <p className="small-body">
            As CPO of Komma, I designed (and redesigned over and over) the wireframes for the project and built out the frontend of the site in React with Omid. I also handled the creation of our pitch deck, video, and other marketing/pitching assets.
          </p>
        </section>

        <section className={styles["wireframes"]}>
          <h2 className="demi">The Wireframes</h2>
          <p className="small-body">
            Here's the home page of the application and some gifs of the user flow. These the prototypes built on Figma.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-6"><img src={Homepage.src} alt="Homepage"/></div>
            <div className="col-md-6">
              <img src={Create.src} alt="Create meeting"/>
              <img src={Availability.src} alt="Create meeting"/>
            </div>
          </div>
        </section>

        <section className={projStyles["video"]}>
          <h2 className="demi">The Video</h2>
          <p className="small-body">
            We put together this explainer video that discusses our product and its features. I had virtually no previous experience with video editing, but I spent about a week learning to use Premiere Pro to edit this.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <iframe width="100%" height="400" src="https://www.youtube.com/embed/QG2nPoob260" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

KommaMeetings.getLayout = (page : ReactElement) => {
  return (
    <ProjectPageLayout>
      {page}
    </ProjectPageLayout>
  )
}