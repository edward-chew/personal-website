import { ReactElement } from 'react'

import ProjectPageLayout from '../../components/layouts/ProjectPageLayout'

import Logo from '@/../public/images/KommaInvolvement/Logo.png'
import About from '@/../public/images/KommaInvolvement/About.jpg'
import Cards1 from '@/../public/images/KommaInvolvement/Cards1.jpg'
import Cards2 from '@/../public/images/KommaInvolvement/Cards2.jpg'
import Dashboard1 from '@/../public/images/KommaInvolvement/Dashboard1.jpg'
import Dashboard2 from '@/../public/images/KommaInvolvement/Dashboard2.jpg'
import Dashboard3 from '@/../public/images/KommaInvolvement/Dashboard3.jpg'
import Dashboard4 from '@/../public/images/KommaInvolvement/Dashboard4.jpg'
import Discover from '@/../public/images/KommaInvolvement/Discover.jpg'
import Event from '@/../public/images/KommaInvolvement/Event.jpg'
import Home from '@/../public/images/KommaInvolvement/Home.jpg'
import Organization from '@/../public/images/KommaInvolvement/Organization.jpg'
import Search1 from '@/../public/images/KommaInvolvement/Search1.jpg'
import Search2 from '@/../public/images/KommaInvolvement/Search2.jpg'
import Search3 from '@/../public/images/KommaInvolvement/Search3.jpg'
import SignIn from '@/../public/images/KommaInvolvement/SignIn.jpg'

import projStyles from '../styles/project-page.module.css'
import styles from '../styles/komma-involvement.module.css'

export default function KommaInvolvement() {
  return (
    <div className={` ${projStyles["project-page"]} ${styles["komma"]} `}>
      <div className={projStyles["title"]}>
        <img src={Logo.src} alt="Logo"/>
        <h1>Komma Event Sharing</h1>
        <h5 className="italic">Updated 3.22.2021</h5>
      </div>

      <section className="images">
        <p className="small-body">
          Getting involved in college can be difficult, despite the many clubs that exist. Students need to rely on clunky email lists or endless Facebook feeds to find events happening on campus. For the leadership of student organizations, it can be difficult to publicize events when students use many different platforms that do not function to share event info. Komma makes it easy to both share events and discover new ones. Users can join organizations they are already part of on the platform to get updates on their events, as well as seek out new involvements.
        </p>
        <p className="small-body">
          Komma is a web development project I got involved with in September 2020. The project was more focused on getting a wireframe out quickly, so we could develop the platform regardless of usability. User research was not conducted, and I dove into prototyping. With the wireframe complete, we began converting the designs to code.
        </p>
        <p className="small-body">
          The platform was built out with the MERN stack, almost to completion. Despite having a functional platform, our team decided to stop pursuing the project due to questions regarding the adoption of the platform by students. We have now pivoted to tackle a new problem: scheduling meetings. The new project still carries the same name, Komma, and we are now in the development stages. The prototypes and wireframes for the latter project are not available at this time.
        </p>
        <h2 className="demi">Home, About, and Events</h2>
        <div className="row justify-content-center">
          <div className="col-md-4"><img src={Home.src} alt="Homepage"/></div>
          <div className="col-md-4"><img src={About.src} alt="About page"/></div>
          <div className="col-md-4"><img src={Discover.src} alt="Browse events page"/></div>
        </div>
        <h2 className="demi">Search Events</h2>
        <div className="row justify-content-center">
          <div className="col-md-4"><img src={Search1.src} alt="Search page"/></div>
          <div className="col-md-4"><img src={Search2.src} alt="Search page"/></div>
          <div className="col-md-4"><img src={Search3.src} alt="Search window"/></div>
        </div>
        <h2 className="demi">Event and Organization Page</h2>
        <div className="row justify-content-center">
          <div className="col-md-4"><img src={Event.src} alt="Event page"/></div>
          <div className="col-md-4"><img src={Organization.src} alt="Organization page"/></div>
        </div>
        <h2 className="demi">Admin Dashboard</h2>
        <div className="row justify-content-center">
          <div className="col-md-4"><img src={Dashboard1.src} alt="Dashboard page"/></div>
          <div className="col-md-4"><img src={Dashboard2.src} alt="Dashboard page"/></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4"><img src={Dashboard3.src} alt="Dashboard page"/></div>
          <div className="col-md-4"><img src={Dashboard4.src} alt="Dashboard page"/></div>
        </div>
        <h2 className="demi">Sign In</h2>
        <div className="row justify-content-center">
          <div className="col-md-4"><img src={SignIn.src} alt="Sign in page"/></div>
        </div>
        <h2 className="demi">The Many Info Card Iterations</h2>
        <div className="row justify-content-center">
          <div className="col-md-5"><img src={Cards1.src} alt="Event cards"/></div>
          <div className="col-md-5"><img src={Cards2.src} alt="Info cards"/></div>
        </div>
      </section>
    </div>
  )
}

KommaInvolvement.getLayout = (page : ReactElement) => {
  return (
    <ProjectPageLayout>
      {page}
    </ProjectPageLayout>
  )
}