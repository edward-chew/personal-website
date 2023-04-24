import Link from 'next/link';

import Layout from '../../components/layouts/MainLayout'
import PrimaryProject from '@/../components/PrimaryProject'
import SecondaryProject from '@/../components/SecondaryProject'

import Arrow from '@/../public/images/Arrow.svg'
import ArrowWhite from '@/../public/images/ArrowWhite.svg'
import Edward from '@/../public/images/Home/Edward.jpg'
// Primary Projects
import CodeLabCommunity from '@/../public/images/Home/PrimaryProjects/CodeLabCommunity.png'
import KommaMeetings from '@/../public/images/Home/PrimaryProjects/KommaMeetings.png'
import HandsTogether from '@/../public/images/Home/PrimaryProjects/HandsTogether.png'
import Translation from '@/../public/images/Home/PrimaryProjects/Translation.png'
import CodeLabBrand from '@/../public/images/Home/PrimaryProjects/CodeLabBrand.png'
// Secondary Projects
import JAPA from '@/../public/images/Home/SecondaryProjects/JAPA.png'
import Reddit from '@/../public/images/Home/SecondaryProjects/Reddit.png'
import OldKomma from '@/../public/images/Home/SecondaryProjects/OldKomma.png'
// Mini Projects
import BobaTierList from '@/../public/images/Home/MiniProjects/BobaTierList.png'
import DesignChallenge from '@/../public/images/Home/MiniProjects/DesignChallenge.png'
import Geofilters from '@/../public/images/Home/MiniProjects/Geofilters.png'
import AllergyLabels from '@/../public/images/Home/MiniProjects/AllergyLabels.png'

import styles from '@/styles/index.module.css'
import utils from '@/styles/utils.module.css'

export default function Home() {
  return (
    <>

      <section className={styles["intro"]}>
        <div className={styles["gradient-box"]}>
          <div className="row align-items-center">
            <div className={` ${styles["left"]} col-md-7 `}>
              <h1 className="bold">Hello there!</h1>
              <h2>I’m Edward, a fourth year computer science student at UC Davis.</h2>
              <Link className="link" href="/about">
                <span className={styles["link-text"]}>About Me</span>
                <img className={`${styles["arrow-link"]} arrow-link`} src={ArrowWhite.src} alt="arrow"/>
              </Link>
            </div>
            <div className={`${styles["right"]} col-md-5`}>
              <img src={Edward.src} alt="Photo of me!"/>
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles["work"]}>
        <h1>Here's some of my favorite work:</h1>
        <PrimaryProject 
          image={CodeLabCommunity}
          skills="LEADERSHIP"
          title="A New Community"
          subtitle="Co-founded the largest project-based software development and UX design organization at UC Davis"
          tools=""
          link="/codelab"
        />
        <PrimaryProject 
          image={KommaMeetings}
          skills="FRONTEND, UI/UX DESIGN, & MORE"
          title="Fast and Friendly Meeting Scheduling"
          subtitle="Built platform to automate the meeting scheduling process"
          tools="React, Figma"
          link="/komma-meetings"
        />
        <PrimaryProject 
          image={HandsTogether}
          skills="FULL STACK DEVELOPMENT"
          title="Hands Together"
          subtitle="Revamped nonprofit's website, including shop and checkout functionality"
          tools="MongoDB, Express, React, Node.js, Amazon S3"
          link="/hands-together"
        />
        <PrimaryProject 
          image={Translation}
          skills="APPLIED ML/NLP"
          title="Evaluating Google Translate"
          subtitle="Quantified machine translation's effectiveness to broaden the scope of communications research"
          tools="Python"
          link="/translation"
        />
        <PrimaryProject 
          image={CodeLabBrand}
          skills="FRONTEND, UI/UX & GRAPHIC DESIGN"
          title="CodeLab Brand Identity"
          subtitle="Designed and developed student organization's website and marketing assets"
          tools="React, Figma, Illustrator"
          link="/codelab-brand"
        />
      </section>

      <section className={styles["other-work"]}>
        <h1>Some other things I've worked on:</h1>
        <div className={` ${utils["gutter40-row"]} row `}>
          <SecondaryProject
            image={JAPA}
            skills="UI/UX DESIGN"
            title="Reimagining Parking"
            subtitle="Redesigning a smart parking mobile app for JAPA Inc."
            link="/japa"
          />
          <SecondaryProject
            image={Reddit}
            skills="PYTHON WEB SCRAPING"
            title="Reddit Metadata Scraper"
            subtitle="Scraped Reddit subreddit metadata over several months using Python, PRAW, and Supervisord"
            link="/reddit"
          />
          <SecondaryProject
            image={OldKomma}
            skills="FRONTEND & UI/UX DESIGN"
            title="A Hub for Involvement"
            subtitle="Wireframed and styled a web platform for event sharing between university communities using React and Figma"
            link="/komma-involvement"
          />
        </div>
      </section>

      <section className={styles["mini"]}>
        <h1>And some doodles and mini projects:</h1>
        <div className={` ${utils["gutter40-row"]} row `}>
          <SecondaryProject
            image={BobaTierList}
            skills='"DATA SCIENCE"'
            title="SF Bay Area Boba Ranking"
            link="https://www.facebook.com/groups/1343933772408499/posts/1821661594635712/"
            external
          />
          <SecondaryProject
            image={DesignChallenge}
            skills="UI/UX DESIGN"
            title="Dorm Roommate Finding App"
            disabled
          />
          <SecondaryProject
            image={Geofilters}
            skills="GRAPHIC DESIGN"
            title="Snapchat Geofilters"
            disabled
          />
          <SecondaryProject
            image={AllergyLabels}
            skills="INFORMATION DESIGN"
            title="UC Davis Dining Commons Label Redesign"
            disabled
          />
        </div>
      </section>

      <section className={styles["experience"]}>
        <h1>My experience:</h1>
        <p className={styles["position"]}><b className="demi">CodeLab</b> / Co-Founder, President</p>
        <p className={styles["years"]}>Oct 2020 - Present</p>
        <p className={styles["position"]}><b className="demi">Computational Communication Lab at UC Davis</b> / Research Assistant</p>
        <p className={styles["years"]}>Mar 2020 - Present</p>
        <p className={styles["position"]}><b className="demi">IBM</b> / Software Engineering Intern</p>
        <p className={styles["years"]}>Jun 2022 - Sep 2022</p>
        <p className={styles["position"]}><b className="demi">UC Davis</b> / Student Web Developer</p>
        <p className={styles["years"]}>May 2021 - Jun 2022</p>
        <p className={styles["position"]}><b className="demi">Komma</b> / CPO, Software Engineer</p>
        <p className={styles["years"]}>Sep 2020 - Jun 2021</p>
        <p className={styles["position"]}><b className="demi">Hands Together</b> / Software Engineer</p>
        <p className={styles["years"]}>Jan 2021 - May 2021</p>
        <p className={styles["position"]}><b className="demi">Design Interactive</b> / Design Associate</p>
        <p className={styles["years"]}>Apr 2020 - May 2020</p>
        <Link className="link" href="https://drive.google.com/file/d/1nTexryaBg258VKtiM36aMotkwGOm-t99/view?usp=sharing" target="_blank">
          <span className={styles["view-resume"]}>View Full Resume</span>
          <img className="arrow-link" src={Arrow.src} alt="arrow"/>
        </Link>
      </section>

      <footer className={styles["footer"]}>
        <div className={styles["gradient-box"]}>
          <h1>Let's chat!</h1>
          <p>Feel free to shoot me a message to get in touch!<br/><br/>
            edwardchew8@gmail.com<br/>
            <Link href="https://www.linkedin.com/in/edwardchew8/" target="_blank">linkedin.com/in/edwardchew8</Link>
          </p>
        </div>
      </footer>

    </>
  )
}
