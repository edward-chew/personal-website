import type { ReactElement } from 'react'
import Link from 'next/link'

import ProjectPageLayout from '../../components/layouts/ProjectPageLayout'

import LogoIcon from '@/../public/images/CodeLab/LogoIcon.svg'

import Now0 from '@/../public/images/CodeLab/Now0.jpg'
import Now1 from '@/../public/images/CodeLab/Now1.jpg'
import Now2 from '@/../public/images/CodeLab/Now2.jpg'
import Now3 from '@/../public/images/CodeLab/Now3.jpg'
import Now4 from '@/../public/images/CodeLab/Now4.jpg'
import Now5 from '@/../public/images/CodeLab/Now5.jpg'

import Cross1 from '@/../public/images/CodeLab/Cross1.jpg'
import Cross2 from '@/../public/images/CodeLab/Cross2.jpg'

import Connection1 from '@/../public/images/CodeLab/Connection1.jpg'
import Connection2 from '@/../public/images/CodeLab/Connection2.jpg'
import Connection3 from '@/../public/images/CodeLab/Connection3.jpg'
import Connection4 from '@/../public/images/CodeLab/Connection4.jpg'
import Connection5 from '@/../public/images/CodeLab/Connection5.jpg'
import Connection6 from '@/../public/images/CodeLab/Connection6.jpg'
import Connection7 from '@/../public/images/CodeLab/Connection7.jpg'
import Connection8 from '@/../public/images/CodeLab/Connection8.jpg'
import Connection9 from '@/../public/images/CodeLab/Connection9.jpg'
import Connection10 from '@/../public/images/CodeLab/Connection10.jpg'

import Team1 from '@/../public/images/CodeLab/Team1.jpg'
import Team2 from '@/../public/images/CodeLab/Team2.jpg'
import Team3 from '@/../public/images/CodeLab/Team3.jpg'

import projStyles from '../styles/project-page.module.css'
import styles from '../styles/codelab.module.css'

export default function CodeLab() {
  return (
    <div className={` ${projStyles["project-page"]} ${styles["codelab"]} `}>
      <div className={projStyles["title"]}>
        <img className={styles["logo"]} src={LogoIcon.src} alt="Logo"/>
        <h1>CodeLab</h1>
        <h5 className="italic">Updated 3.21.2023</h5>
      </div>

      <section className="row justify-content-center">
        <div className="col-md-12">
          <h2 className="demi">A New Community at UC Davis</h2>
          <p className="small-body">
            After grinding away on our lower-division courses, a few friends and I felt there lacked a strong computer science community at UC Davis. Lecture halls were huge, students were disconnected, and there was little opportunity to apply our newly developed coding skills. When the pandemic pushed our college experience online, these issues were only exacerbated.
            <br/><br/>And so, we build CodeLab, a project-based software development organization at UC Davis. We started off informally, recruiting 7 of our friends to make up our first cohort of general members. Within a few weeks, our two teams presented some pretty cool projects at our final presentations over Zoom.
          </p>
        </div>
        <div className="col-md-4">
          <img src={Now0.src} alt="Our first-ever cohort!"/>
          <h5 className={projStyles["caption"]}>Our first-ever cohort!</h5>
        </div>
      </section>

      <section className="row justify-content-center">
        <div className="col-md-12">
          <h2 className="demi">Where We Are Now</h2>
          <p className="small-body">
            Today, after three short years, we have grown to so much more. CodeLab became a software development and UX design organization, offering an opportunity for members to work on cross-functional teams. Our advanced teams work with real-world tech company clients, giving members a taste of industry work. And most important of all, we’ve built community. Between developing amazing projects, learning new skills through our curriculum, and growing professionally and socially at events, we’ve created a much greater sense of connectedness in the UC Davis tech community.
            <br/><br/>As of Spring 2023, CodeLab has built 32 projects, worked with 15 industry clients, and had 180 members and alumni across our 6 project terms. Learn more about the organization on our <Link className="small-body" href="https://codelabdavis.com/" target="blank_">website</Link>. (Our website was also a project I designed and led the development team on!)
            <br/><br/>Being a part of CodeLab had an immense impact on my college experience and career journey. It’s impossible to share everything about my three years in CodeLab, but I’d like to highlight a few key initiatives, accomplishments, and experiences I had.
          </p>
        </div>
        <div className="col-md-4">
          <img src={Now1.src} alt="Winter/Spring 2021"/>
          <h5 className={projStyles["caption"]}>Winter/Spring 2021</h5>
        </div>
        <div className="col-md-4">
          <img src={Now2.src} alt="Fall 2021"/>
          <h5 className={projStyles["caption"]}>Fall 2021</h5>
        </div>
        <div className="col-md-4">
          <img src={Now3.src} alt="Winter/Spring 2022"/>
          <h5 className={projStyles["caption"]}>Winter/Spring 2022</h5>
        </div>
        <div className="col-md-6">
          <img src={Now4.src} alt="Fall 2022"/>
          <h5 className={projStyles["caption"]}>Fall 2022</h5>
        </div>
        <div className="col-md-6">
          <img src={Now5.src} alt="Winter/Spring 2023"/>
          <h5 className={projStyles["caption"]}>Winter/Spring 2023</h5>
        </div>
      </section>

      <section className="row">
        <div className="col-md-12">
          <h2 className="demi">A Little About Our Structure</h2>
          <p className="small-body">
            We run two project terms a year, which are spans of 6 (our Fall term) or 15 (our Winter/Spring term) weeks where students build out a project. Students apply to join each term, so we get a brand new cohort of members twice a year. After hosting several recruitment events and parsing through hundreds of applications each cycle, our board members place students on teams based on their strengths and interests. Less experienced students are placed on “Spark” projects, which are low-stakes projects generally focused on addressing a pain point of the student community. More experienced students are placed on “Industry” teams, where they work with a real tech startup client for their projects.
          </p>
        </div>
      </section>

      <section className="row justify-content-center">
        <div className="col-md-12">
          <h2 className="demi">Cross-Functional Teams</h2>
          <p className="small-body">
            CodeLab started as a software development-only organization, but when taking on web and mobile projects, we quickly realized someone had to design the interfaces as well. We brought on designers—to which we had a rocky start. Initially, we had a single separate design team working with all the developer teams. We quickly realized this was the wrong way to do it, and we had designers directly integrated in teams soon after.
            <br/><br/>Since then, we’ve made a point to integrate design and development. The developers and designers of teams meet regularly to discuss the feasibility of design implementations and to offer feedback on the progress of both sides. We also host workshops where we have developers create wireframes on Figma while designers try their hand at front-end coding.
            <br/><br/>These initiatives have not only smoothened out the progression of the projects but also fostered empathy and appreciation in associates for the other field’s craft.            
          </p>
        </div>
        <div className="col-md-4">
          <img src={Cross1.src} alt="Associates ideating on features"/>
          <h5 className={projStyles["caption"]}>Associates ideating on features</h5>
        </div>
        <div className="col-md-4">
          <img src={Cross2.src} alt="Me with the CodeLab Website team I led in Fall 2021"/>
          <h5 className={projStyles["caption"]}>Me with the CodeLab Website team I led in Fall 2021</h5>
        </div>
      </section>

      <section className="row">
        <div className="col-md-12">
          <h2 className="demi">Developing an In-House Curriculum</h2>
          <p className="small-body">
            I never really saw educating students as CodeLab’s function. Instead, I see it as an organization that facilitates learning. Subtle, sure, but the board is composed of undergraduate students too. We aren’t experts in any technical domain, but we want to make it easy for associates to learn new things on their own.
            <br/><br/>That said, our education team over the years has gone above and beyond, creating a set of in-house technical articles, video tutorials, and quizzes. In their first week of the project term, associates go through our technical bootcamp in either software development or UX design. The articles and videos are rounded off by a bootcamp project, tying in all the concepts they learn. A handful of our bootcamp videos are available publicly on our <Link className="small-body" href="https://www.youtube.com/channel/UCAMYCupe0W1ICln7CzYU1Zg" target="blank_">YouTube channel</Link>.
            <br/><br/>Over time, the education team hopes to expand the curriculum to more technical topics and find more innovative ways of teaching. (In fact, we have an internal learning tool currently in development.)
        </p>
        </div>
      </section>

      <section className="row">
        <div className="col-md-12">
          <h2 className="demi">Growing Professionally and Building Connections</h2>
          <p className="small-body">
            Being a part of CodeLab is meant to help associates develop their skills and have a resume-worthy project, but that’s only one step toward landing a future job. Throughout the project term, we also host resume and portfolio reviews, guest speaker events, and mock interviews. To develop associates’ soft skills, we have team-building exercises and public speaking activities like our pitch competition.
            <br/><br/>We also host social events, completely detached from the technical work. We’ve had game nights, taken trips to Sacramento, and more. The socials cater to different needs: some associates want to network, others simply want to make new friends! Regardless, we’ve found that bringing associates closer together results in a more fun work environment and even greater outcomes from project teams.
        </p>
        </div>
        <div className="col-md-4">
          <img src={Connection1.src} alt="Our scavenger hunt in Sacramento"/>
          <h5 className={projStyles["caption"]}>Our scavenger hunt in Sacramento</h5>
        </div>
        <div className="col-md-4">
          <img src={Connection2.src} alt="Some associates and I playing mini golf"/>
          <h5 className={projStyles["caption"]}>Some associates and I playing mini golf</h5>
        </div>
        <div className="col-md-4">
          <img src={Connection3.src} alt="The winning egg tower team"/>
          <h5 className={projStyles["caption"]}>The winning egg tower team</h5>
        </div>
        <div className="col-md-3">
          <img src={Connection4.src} alt="Our Top Golf social"/>
          <h5 className={projStyles["caption"]}>Our Top Golf social</h5>
        </div>
        <div className="col-md-3">
          <img src={Connection5.src} alt="Fall 2022 Final Presentations"/>
          <h5 className={projStyles["caption"]}>Fall 2022 Final Presentations</h5>
        </div>
        <div className="col-md-3">
          <img src={Connection6.src} alt="Billiards at the MU games area"/>
          <h5 className={projStyles["caption"]}>Billiards at the MU games area</h5>
        </div>
        <div className="col-md-3">
          <img src={Connection7.src} alt="Some associates and I playing mini golf"/>
          <h5 className={projStyles["caption"]}>Davis Triceratops team at our banquet</h5>
        </div>
        <div className="col-md-4">
          <img src={Connection8.src} alt="Guest speakers from Netflix"/>
          <h5 className={projStyles["caption"]}>Ben and Justin, guest speakers from Netflix</h5>
        </div>
        <div className="col-md-4">
          <img src={Connection9.src} alt="Associates at our Blaze Pizza fundraiser"/>
          <h5 className={projStyles["caption"]}>Associates at our Blaze Pizza fundraiser</h5>
        </div>
        <div className="col-md-4">
          <img src={Connection10.src} alt="Teams scrambling during our Pitch Competition"/>
          <h5 className={projStyles["caption"]}>Teams scrambling during our Pitch Competition</h5>
        </div>
      </section>

      <section className="row">
        <div className="col-md-12">
          <h2 className="demi">Introducing a Business Mindset</h2>
          <p className="small-body">
            In Fall of 2022, I sat in a general meeting and looked around the room. For the first time, things felt mostly stable. We had the largest volume of applications yet, ironed out many of the kinks in teams’ structures, and had a library of already-planned events we could reuse. But I love experimenting, so I wanted to introduce something new.
            <br/><br/>Towards the end of the prior academic year, we noticed a trend among current and former members: many joined for one term, some stayed for two (typically one term on a Spark project and one on an Industry project), but next to none stayed for more than that. UC Davis only has three or so prominent project-based tech clubs, so after getting involved in a couple of clubs for a term or two, many students asked “What’s next?”. It was clear there was a need for longer-term opportunities in such clubs.
            <br/><br/>And so, CodeLab Product was born. CodeLab Product is a new branch of the organization, offering opportunities to work on a project long-term alongside a product-thinking curriculum. (Spark and Industry projects, on the other hand, are now under the “CodeLab Accelerate” program umbrella.) Product associates are already experts in UX design or the relevant software stack, allowing them to broaden their understanding of a software product. 
            <br/><br/>For the Winter/Spring 2023 term, CodeLab Product is but a pilot program. We have two teams of 5 students each building upon two former Spark projects. The first 6 weeks of the term was the “Discovery” phase, where teams were completely hands-off on the codebase. Instead, they spent the time doing a deep dive into their target market, conducting business experiments, and developing their product roadmap. In the latter 9 weeks of the term, teams rapidly developed their selected features, launched a beta version, and planned out their product marketing.
            <br/><br/>Whether to continue this program or not is in the hands of next year’s board. Regardless of if CodeLab Product sticks around, I hope this pilot helps inform the planning of the future associate experience.
        </p>
        </div>
      </section>

      <section className="row">
        <div className="col-md-12">
          <h2 className="demi">Leading a Team</h2>
          <p className="small-body">
            After serving two years as the Vice President of External, I became the President of CodeLab for the 2022-2023 academic year. And wow, leading a team was a challenge. Prior to moving into the position, I anticipated I would be focused on giving high-level direction on where to steer the organization. Instead, my biggest challenges this year were from handling *people*, not the organization.
            <br/><br/>I found I needed to drive intrinsic motivation in the team, balance everyone’s interests, gain commitment to initiatives, and generally work to improve morale, among other things. I can’t go into specifics about the situations I encountered, but I definitely learned a lot from overcoming all the roadblocks.
        </p>
        </div>
        <div className="col-md-4">
          <img src={Team1.src} alt="Escape room social with the board"/>
          <h5 className={projStyles["caption"]}>Escape room social with the board</h5>
        </div>
        <div className="col-md-4">
          <img src={Team2.src} alt="Deliberating on associate applications… until 3am"/>
          <h5 className={projStyles["caption"]}>Deliberating on associate applications… until 3am</h5>
        </div>
        <div className="col-md-4">
          <img src={Team3.src} alt="Thai food we waited an hour for"/>
          <h5 className={projStyles["caption"]}>Thai food we waited an hour for</h5>
        </div>
      </section>

      <section className="row">
        <div className="col-md-12">
          <h2 className="demi">Reflections After Three Years</h2>
          <p className="small-body">
            Coming soon...
        </p>
        </div>
      </section>

    </div>
  )
}

CodeLab.getLayout = (page : ReactElement) => {
  return (
    <ProjectPageLayout>
      {page}
    </ProjectPageLayout>
  )
}