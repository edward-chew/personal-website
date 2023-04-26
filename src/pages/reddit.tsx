import { ReactElement } from 'react'
import Head from 'next/head'

import ProjectPageLayout from '../../components/layouts/ProjectPageLayout'

import Logo from '@/../public/images/Reddit/Logo.png'
import JSON from '@/../public/images/Reddit/JSON.svg'

import projStyles from '../styles/project-page.module.css'
import styles from '../styles/reddit.module.css'

export default function Reddit() {
  return (
    <>
      <Head>
        <title>Reddit / Edward Chew</title>

        <meta property="og:title" content="Reddit / Edward Chew"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://edwardchew.vercel.app/reddit"/>
        <meta property="og:image" content="https://edwardchew.vercel.app/images/Home/SecondaryProjects/Reddit.png"/>
      </Head>

      <div className={` ${projStyles["project-page"]} ${styles["reddit"]} `}>
        <div className={projStyles["title"]}>
          <img className={styles["logo"]} src={Logo.src} alt="Logo"/>
          <h1>Reddit Subreddit Metadata Scraper</h1>
          <h5 className="italic">Updated 12.13.2021</h5>
        </div>
        
        <section>
          <p className="small-body">
            In my work in the Computational Communication Lab at UC Davis, a significant source of data for study comes from Reddit. In this project, I wrote a script to gather as much data from Reddit subreddits as possible. This included, but was not limited to, subreddit rules, images, butttons, links, descriptions, and wiki pages. The script was written in Python and data was scraped with PRAW.
          </p>
          <p className="small-body">
            Much of the difficulty with the project came from the length of the runtime of the program. In order to reduce the runtime, I needed to continually find ways to reduce API calls, which are throttled to about 30 per minute by Reddit. I also configured the script to run with Supervisord, a process control system, in order to run the script uninterrupted for the many months it may take. To address the possibility of interruption or error, the script was also configured to send regular update emails and emails on fail. More than anything, this project was an opportunity to develop my shell skills.
          </p>
          <p className="small-body">
            Below is a sample of just a single subreddit worth of data! In total, 2.8 million subreddits of data was gathered over a 6 month run.
          </p>
          <img src={JSON.src} alt="Metadata code sample"/>
        </section>
      </div>
    </>
  )
}

Reddit.getLayout = (page : ReactElement) => {
  return (
    <ProjectPageLayout>
      {page}
    </ProjectPageLayout>
  )
}