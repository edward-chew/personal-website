import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Rellax from 'rellax'

import Arrow from '@/../public/images/Arrow.svg'
import Curve4 from '@/../public/images/About/Curve4.svg'
import Curve5 from '@/../public/images/About/Curve5.svg'
import Edward from '@/../public/images/About/Edward.jpg'
import Life1 from '@/../public/images/About/Life1.jpg'
import Life2 from '@/../public/images/About/Life2.jpg'
import Life3 from '@/../public/images/About/Life3.jpg'
import Life4 from '@/../public/images/About/Life4.jpg'
import Life5 from '@/../public/images/About/Life5.jpg'
import Life6 from '@/../public/images/About/Life6.jpg'
import Life7 from '@/../public/images/About/Life7.jpg'
import Life8 from '@/../public/images/About/Life8.jpg'
import LifeA from '@/../public/images/About/LifeA.jpg'
import LifeB from '@/../public/images/About/LifeB.jpg'

import styles from '../styles/about.module.css'
import utils from '../styles/utils.module.css'

export default function About() {
  const rellaxRef = useRef(null);

  // useEffect(() => {
  //   if (rellaxRef.current) {
  //     new Rellax("rellax", {
  //       speed: -3, // the speed of the parallax effect
  //       center: false, // whether or not to center the parallax effect
  //       wrapper: undefined, // the element that contains the parallax element
  //       round: true, // whether or not to round pixel values
  //       vertical: true, // whether or not to enable vertical scrolling
  //       horizontal: false // whether or not to enable horizontal scrolling
  //     });
  //   }
  // }, []);

  return (
    <>
      <Head>
        <title>About / Edward Chew</title>

        <meta property="og:title" content="About / Edward Chew"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://edwardchew.vercel.app/about"/>
        <meta property="og:image" content="https://edwardchew.vercel.app/images/About/Edward.jpg"/>
      </Head>

      <div className={` ${styles["rellax"]} rellax ${styles["lines1"]} `} ref={rellaxRef}><img src={Curve4.src} alt="Background Curve"/></div>
      <div className={` ${styles["rellax"]} rellax ${styles["lines2"]} `} ref={rellaxRef}><img src={Curve5.src} alt="Background Curve"/></div>

      <div className={styles["about"]}>
        <section className={styles["summary"]}>
          <div className="row">
            <div className={` ${styles["left"]} col-md-5 `}>
              <img src={Edward.src} alt="Photo of me!"/>
            </div>
            <div className={` ${styles["right"]} col-md-7 `}>
              <h1>I’m Edward.</h1>
              <p>
                I’m currently a fourth year computer science major and technology management minor at UC Davis. Through side projects, coursework, and involvements, I’ve explored domains well beyond coding. I really enjoy UX design and business/entrepreneurship, as it’s helped me understand a software product end-to-end. For now, I’m especially interested in pursuing front-end development, as it blends my coding and design interests. As I start my career, I hope to get involved with an even greater variety of fields in and out of computer science.
              </p>
              <p>
                When I’m not coding, I love exploring new places. Since the beginning of the pandemic, I’ve biked hundreds (if not thousands) of miles around Davis and the Bay Area. In other cases, I explore on foot, seeing what hill offers the best view in San Francisco. I express my creativity on physical mediums as well. In my apartment, you’ll find sticky notes and posters on the wall adorned with Sharpie doodles.
              </p>
              <p>
                Currently, I lead a software development and UX design organization on campus, CodeLab. I’m also seeking full-time software engineering roles for post-grad. I’m excited to see where my next role will take me!
              </p>
              <Link className="link" href="https://drive.google.com/file/d/1nTexryaBg258VKtiM36aMotkwGOm-t99/view?usp=sharing" target="_blank">
                <span>View Resume</span>
                <img className="arrow-link" src={Arrow.src} alt=""/>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles["snapshots"]}>
          <h1>Snapshots from my life:</h1>
          <div className={` ${styles["full-grid"]} ${utils["gutter25-row"]} row no-gutters `}>
            <div className={` ${utils["gutter25-col"]} ${styles["highlight"]} col-md-3 `}><img src={LifeA.src} alt="Happy times!"/></div>       
            <div className={` ${utils["gutter25-col"]} ${styles["highlight-text"]} col-md-3 `}>
              <div className={styles["front-rectangle"]}></div>
              <div className={styles["back-rectangle"]}></div>
              <p><b className="bold">HackDavis 2020,</b><br/> my first ever <br/>hackathon</p>
            </div>
            <div className={` ${utils["gutter25-col"]} col-md-3 `}><img src={Life1.src} alt="Happy times!"/></div>
            <div className={` ${utils["gutter25-col"]} col-md-3 `}><img src={Life2.src} alt="Happy times!"/></div>
            <div className={` ${utils["gutter25-col"]} col-md-3 `}><img src={Life3.src} alt="Happy times!"/></div>
            <div className={` ${utils["gutter25-col"]} col-md-3 `}><img src={Life4.src} alt="Happy times!"/></div>
            <div className={` ${utils["gutter25-col"]} col-md-3 `}><img src={Life5.src} alt="Happy times!"/></div>
            <div className={` ${utils["gutter25-col"]} col-md-3 `}><img src={Life6.src} alt="Happy times!"/></div>
            <div className={` ${utils["gutter25-col"]} col-md-3 `}><img src={Life7.src} alt="Happy times!"/></div>
            <div className={` ${utils["gutter25-col"]} col-md-3 `}><img src={Life8.src} alt="Happy times!"/></div>
            <div className={` ${utils["gutter25-col"]} ${styles["highlight"]} col-md-3 `}><img src={LifeB.src} alt="Happy times!"/></div>
            <div className={` ${utils["gutter25-col"]} ${styles["highlight-text"]} col-md-3 `}>
              <div className={styles["front-rectangle"]}></div>
              <div className={styles["back-rectangle"]}></div>
              <p><b className="bold">Maple,</b><br/> my dog back <br/>at home</p>
            </div>
          </div>
        </section>

        <section className={styles["experience"]}>
          <h1>Experience and involvement:</h1>
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
          <Link className="link" href="https://drive.google.com/file/d/1nTexryaBg258VKtiM36aMotkwGOm-t99/view?usp=sharing" target="_blank">View Full Resume<img className="arrow-link" src={Arrow} alt="arrow"/></Link>
        </section>

        <footer>
          <h1>Let's chat!</h1>
          <p>Feel free to shoot me a message to get in touch!<br/><br/>
            edwardchew8@gmail.com<br/>
            <Link href="https://www.linkedin.com/in/edwardchew8/" target="_blank">
              <span>linkedin.com/in/edwardchew8</span>
            </Link>
          </p>
        </footer>
      </div>
    </>
  )
}