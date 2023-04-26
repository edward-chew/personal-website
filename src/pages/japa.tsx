import { ReactElement } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import ProjectPageLayout from '../../components/layouts/ProjectPageLayout'

import Logo from '@/../public/images/JAPA/Logo.png'
import AffinityMapBG from '@/../public/images/JAPA/AffinityMapBG.png'
import AffinityMapping from '@/../public/images/JAPA/AffinityMapping.png'
import Availability1 from '@/../public/images/JAPA/Availability1.png'
import Availability2 from '@/../public/images/JAPA/Availability2.png'
import Availability3 from '@/../public/images/JAPA/Availability3.png'
import Availability4 from '@/../public/images/JAPA/Availability4.png'
import Availability5 from '@/../public/images/JAPA/Availability5.png'
import Availability6 from '@/../public/images/JAPA/Availability6.png'
import B2H from '@/../public/images/JAPA/B2H.png'
import Competitive from '@/../public/images/JAPA/Competitive.png'
import GoldenPath from '@/../public/images/JAPA/GoldenPath.png'
import Info1 from '@/../public/images/JAPA/Info1.png'
import Info3 from '@/../public/images/JAPA/Info3.png'
import Map1 from '@/../public/images/JAPA/Map1.png'
import MockupBG from '@/../public/images/JAPA/MockupBG.png'
import PresBG from '@/../public/images/JAPA/PresBG.png'
import PrototypeBG from '@/../public/images/JAPA/PrototypeBG.png'
import Sketches from '@/../public/images/JAPA/Sketches.png'
import Spots1 from '@/../public/images/JAPA/Spots1.png'
import FinalSpaces from '@/../public/images/JAPA/FinalSpaces.svg'
import OriginalSpaces from '@/../public/images/JAPA/OriginalSpaces.svg'
import RedesignSpaces from '@/../public/images/JAPA/RedesignSpaces.svg'
import RestrictedSpaces from '@/../public/images/JAPA/RestrictedSpaces.svg'

import AddPaymentMethod from '@/../public/images/JAPA/Gifs/AddPaymentMethod.gif'
import GarageLevelSwipe from '@/../public/images/JAPA/Gifs/GarageLevelSwipe.gif'
import LotInfoAnimation from '@/../public/images/JAPA/Gifs/LotInfoAnimation.gif'
import Onboarding from '@/../public/images/JAPA/Gifs/Onboarding.gif'
import Profile from '@/../public/images/JAPA/Gifs/Profile.gif'
import QuickLookAnimation from '@/../public/images/JAPA/Gifs/QuickLookAnimation.gif'
import SavedAnimation from '@/../public/images/JAPA/Gifs/SavedAnimation.gif'
import SearchFilterAnimation from '@/../public/images/JAPA/Gifs/SearchFilterAnimation.gif'
import SignInAnimation from '@/../public/images/JAPA/Gifs/SignInAnimation.gif'
import TransactionHistory from '@/../public/images/JAPA/Gifs/TransactionHistory.gif'

import projStyles from '../styles/project-page.module.css'
import styles from '../styles/japa.module.css'

export default function JAPA() {
  return (
    <>
      <Head>
        <title>JAPA / Edward Chew</title>

        <meta property="og:title" content="JAPA / Edward Chew"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://edwardchew.vercel.app/japa"/>
        <meta property="og:image" content="https://edwardchew.vercel.app/images/Home/SecondaryProjects/JAPA.png"/>
      </Head>

      <div className={` ${projStyles["project-page"]} ${styles["japa"]} `}>
        <div className={` ${projStyles["title"]} ${styles["title"]} `}>
          <img className={styles["logo"]} src={Logo.src} alt="Logo"/>
          <h1>Reimagining Parking</h1>
          <h5 className="italic">Updated 11.8.2021</h5>
        </div>

        <section className={` ${styles["intro"]} row `}>
          <div className="col-md-9">
            <h2>Exploring Design</h2>
            <p className="small-body">
              This project was my first large-scale UX design project. Looking back, there are many elements of this project (research, ideation, the wireframes themselves) that could be improved. Still, I'm leaving this project here to share the starting point of my journey through web design and development.
            </p>

            <h2>Just a Parking App</h2>
            <p className="small-body">
              JAPA, or Just a Parking App, is a mobile app that provides real time parking availability to users at universities, corporate campuses, and beyond. In addition to viewing which individual spots are open, users can view parking lot policies and get driving directions. JAPA’s motto is “Park Smart. Stress Less.”, something that guided our decisions throughout the project.
            </p>
            <p className="small-body">
              Visit them at <Link className="japa-link regular" target="blank_" href="https://www.parkjapa.com/">https://www.parkjapa.com/</Link>.
            </p>

            <h2>Present and Future</h2>
            <p className="small-body">
              Over the course of the 5 weeks, we worked closely with JAPA’s CTO to better understand their needs in the app and gain feedback on our work in progress. 
            </p>
            <p className="small-body">
              Prior to the project, JAPA already had an app on the market, but it was a bare bones app lacking a lot of the functionality JAPA plans to implement in the future. Our job was to fill in the gaps. We needed to both:
            </p>
            <ol className="small-body">
              <li>Improve the existing interface</li>
              <li>Design for scalability and the addition of features</li>
            </ol>
          </div>
          <div className="col-md-3">
            <h2>Duration</h2>
            <p className="small-body">
              5 Weeks
              <br/>Apr - May 2020
            </p>
            <h2>Team Members</h2>
            <p className="small-body">
              Edward Chew (Me!)
              <br/>Briana Omori
              <br/>Miranda Wong
              <br/>Kiara Cowderoy
            </p>
          </div>
        </section>


        <img className={styles["bg-img"]} src={MockupBG.src} alt="JAPA prototype"/>


        <section className={styles["research-ideation"]}>
          <div className={styles["heading-container"]}>
            <h1>Gaining Insight & Developing Ideas</h1>
            <div className={styles["orange-line"]}></div>
          </div>

          <div className={styles["narrow-text-container"]}>
            <h2>An Inefficient App for Efficiency</h2>
            <p className="small-body">
              In order to identify issues in the current app, we spoke to different user groups and conducted a user task analysis. Each participant was given a task—like finding an open parking spot or locating a particular parking garage—and we observed the steps they took to fulfill the task. Sometimes they cruised through the app, other times they hit the wrong button or hesitated. This told us which screens were laid out effectively and which weren’t. 
            </p>
            <p className="small-body">
              We found three broad issues:
            </p>
            <ol className="small-body">
              <li>The app is slow. To find a parking lot, a user would need to manually zoom into the map and click on the correct pin.</li>
              <li>The app is visually confusing. Users did not understand the iconography. What did the colors of the dots mean? Other times, clusters of pins indicating parking lot locations looked like one pin, instead of multiple.</li>
              <li>The app lacks direction. This was the big one. Upon opening the app, a user does not know what the app does, what the visual symbols mean, or where to go and what to do. Some design elements in an application can rely on a user’s intuition, but often not.</li>
            </ol>
          </div>

          <div className={` ${styles["old-screens"]} row justify-content-center`}>
            <div className="col-md-10 row">
              <div className="col-md-4">
                <img src={Spots1.src} alt="Old JAPA parking screen"/>
              </div>
              <div className="col-md-4">
                <img src={Info1.src} alt="Old JAPA lot info screen"/>
              </div>
              <div className="col-md-4">
                <img src={Map1.src} alt="Old JAPA map screen"/>
              </div>
              <div className="col-md-12">
                <h5 className={projStyles["caption"]}>The current state of the JAPA app, including the parking lot map, parking space map, and lot information page.</h5>
              </div>
            </div>
          </div>

          <div className={styles["narrow-text-container"]}>
            <h2>Understanding the Business</h2>
            <p className="small-body">
              At the end of the day, JAPA is a business. Beyond providing a seamless parking experience to users, we needed to understand the needs of the business.
            </p>
            <p className="small-body">
              JAPA currently does not monetize their mobile app. A user never needs to pay anything, nor do they ever see an ad. Instead, JAPA’s revenue comes from parking lot managers. By paying JAPA to have parking sensors installed in their parking lot, a parking lot manager is given access to a lot management dashboard, where they can see different metrics of the parking lot’s usage.
            </p>
            <p className="small-body">
              We addressed this business-user divide by writing business questions and converting them to human questions.
            </p>
            <p className="small-body">
              For example, “How do we distinguish ourselves from our competitors?” becomes “Why might a user use JAPA instead of other smart parking apps?” These questions can sometimes seem trivial, but seriously considering the answers to the questions helps us consider what values should guide our decision making in the design process.
            </p>
          </div>

          <img src={B2H.src} alt="Business to human questions"/>
          <h5 className={projStyles["caption"]}>A selected handful of the Business to Human questions.</h5>

          <div className={styles["narrow-text-container"]}>
            <h2>Checking Out the Competition</h2>
            <p className="small-body">
              Why might a use JAPA instead of other smart parking apps? Well, we first need to know what the other smart parking apps have to offer. Our team compiled a list of JAPA’s competitors, including some parking unrelated apps that the JAPA team liked the UI of. We each studied a couple of the apps, testing out their parking search function and compiling a list of features.
            </p>
            <p className="small-body">
              We compiled all our notes in a competitive analysis matrix, comparing what features each app did—or more importantly—didn’t have. We examined what features JAPA was lacking, and based on our experiences in testing the competitors’ apps, we could determine whether those were valuable features to include.
            </p>
          </div>

          <img src={Competitive.src} alt="Competitive analysis matrix"/>
          <h5 className={projStyles["caption"]}>The competitive analysis matrix.</h5>

          <div className={styles["narrow-text-container"]}>
            <h2>The Road from A to B</h2>
            <p className="small-body">
              One of our top priorities in the redesign of the app was maximizing efficiency, which made it vital to minimize the number of screens a user needed to go through to complete their task. We wrote out the primary flow a user would take through the app, otherwise known as The Golden Path. We used this to identify the essential screens within the app and how we could optimize the flow from one screen to the next.
            </p>
          </div>

          <img src={GoldenPath.src} alt="Golden path"/>
          <h5 className={projStyles["caption"]}>The most important elements of the app that a user would pass though.</h5>

          <div className={styles["narrow-text-container"]}>
            <h2>Creating Solutions</h2>
            <p className="small-body">
              After synthesizing all of our research, we wrote out different “How Might We?” questions to identify issues in the app. We then organized these into categories to find the broader problem spaces to focus on, such as navigation or the parking layout feature. Not only did this help us identify the necessary features for the app, some questions served as goals for the whole project: maximizing visual appeal, making the app recognizable to users, and the focus on efficiency.
            </p>
            <p className="small-body">
              With the list of design issues in hand, we prioritized them based on the insights gained from our user research. We brainstormed answers for these questions, some drawn from our competitive analysis, some based on the current state of the app, others on potential features. With our massive list of ideas, we discussed and voted to select those that could most effectively solve user problems.
            </p>
          </div>

          <img className="no-shadow" src={AffinityMapping.src} alt="Affinity mapping process"/>
          <h5 className={projStyles["caption"]}>The Affinity Mapping process: synthesizing the research into HMW questions, grouping questions, then creating solutions.</h5>

          <div className={styles["narrow-text-container"]}>
            <h2>Sketching Things Out</h2>
            <p className="small-body">
              Next came sketches! We split the features up and we each scribbled out different ideas and layouts. With sketches, we could test out many different designs without taking too much of our time.
            </p>
          </div>

          <img src={Sketches.src} alt="Sketches"/>
          <h5 className={projStyles["caption"]}>Sketches by Kiara Cowderoy and Briana Omori.</h5>
        </section>

        <img className={styles["bg-img"]} src={AffinityMapBG.src} alt="Affinity map"/>

        <section className={styles["design-prototype"]}>
          <div className={styles["heading-container"]}>
            <h1>Design & Prototyping</h1>
            <div className={styles["orange-line"]}></div>
          </div>

          <div className={styles["narrow-text-container"]}>
            <h2>Perfecting the Spot</h2>
            <p className="small-body">
              What set JAPA’s app apart? The spot. No major parking app on the market could identify which individual parking spots were available or occupied. This was a feature to be highlighted.
            </p>
            <p className="small-body">
              Let’s take a look at the original state of the app.
            </p>
          </div>

          <div className="row">
            <div className="col-md-7 row">
              <div className="col-md-6">
                <img src={Spots1.src} alt="Old JAPA parking lot screen"/>
                <h4 className={styles["large-caption"]}>Parking Spot Map</h4>
              </div>
              <div className="col-md-6">
                <img src={Info1.src} alt="Old JAPA lot info screen"/>
                <h4 className={styles["large-caption"]}>Lot Information</h4>
              </div>
            </div>
            <div className="col-md-5">
              <p className="small-body">
                The parking spot map is full of green and red dots, and a user might assume red means occupied and green means available. 
              </p>
              <p className="small-body">
                When we shift our attention to the lot information page, we see there are actually quite a few types of parking, from “Disabled Person” to “Residence Hall”. But which spaces in the map fall into these categories? Could the red and green be indicators of space type instead of space availability?
              </p>
              <p className="small-body">
                Let’s make things clear.
              </p>
            </div>
          </div>

          <div className={styles["narrow-text-container"]}>
            <p className="small-body">
              Here was our first iteration of the spot icons. Instead of the two icons, we now have six. A blank icon to indicate regular spots, a wheelchair icon to indicate handicapped spots, and a lightning bolt to indicate electric vehicle charging spots. Each icon then has its red counterpart to indicate it was occupied. The red and green colors were also adjusted to better complement the rest of the app design.
            </p>
          </div>

          <div className={` ${styles["icon-container"]} row `}>
            <div className={` ${styles["inner-icon-container"]} ${styles["left"]} col-md-4 `}>
              <h2 className={styles["subtitle"]}>Original</h2>
              <img className="no-shadow" src={OriginalSpaces.src} alt="Original space icons"/>
            </div>
            <div className="col-md-1"></div>
            <div className={` ${styles["inner-icon-container"]} col-md-7 `}>
              <h2 className={styles["subtitle"]}>Redesigned</h2>
              <img className="no-shadow" src={RedesignSpaces.src} alt="Redesigned space icons"/>
            </div>
          </div>

          <div className={styles["narrow-text-container"]}>
            <p className="small-body">
              But there’s a problem. The vast majority of parking spots in public parking lots fall into the above categories, but not all. What about the parking spots restricted to faculty? Or residence hall residents?
            </p>
            <p className="small-body">
              Cue the “Restricted Spot”, an umbrella icon for any parking spots with special restrictions.
            </p>
          </div>

          <h2 className={styles["subtitle"]}>The Restricted Spot</h2>
          <div className={styles["restricted"]}>
            <img className="no-shadow" src={RestrictedSpaces.src} alt="Restricted space icons"/>
          </div>

          <div className={styles["narrow-text-container"]}>
            <p className="small-body">
              As part of our usability testing in our prototyping stage, we put these new icons to the test. We noted two things:
            </p>
            <ol className="small-body">
              <li>Now that there were more colors involved, users had more difficulty picking out the red, occupied spots.</li>
              <li>Users interpreted the “R” icon as “Reserved” instead of “Restricted” like what aimed for.</li>
            </ol>
            <p className="small-body">
              <br/>In our final iteration, we changed the “R” symbol to a star, and used a brighter red for occupied spots.
            </p>
          </div>

          <h2 className={styles["subtitle"]}>The Final Icons</h2>
          <div className={styles["restricted"]}>
            <img className="no-shadow" src={FinalSpaces.src} alt="Final space icons"/>
          </div>

          <div className={styles["narrow-text-container"]}>
            <h2>What the Lots Have to Offer</h2>
            <p className="small-body">
              JAPA exists because parking spots are a scarce resource. More scarce than parking spots in general, though, are specific types of parking spots. If a person requires a handicapped parking spot, there’s no reason to enter a lot even if regular parking spots are available.
            </p>
            <p className="small-body">
              Instead of indicating the total parking spaces like the current app, we decided to indicate the available parking spaces. This feature was designed in parallel to the parking icons, and it was necessary to adapt it accordingly.
            </p>
          </div>

          <div className={` ${styles["old-lot"]} row `}>
            <div className="col-md-7 row">
              <div className="col-md-6">
                <img src={Info1.src} alt="Old JAPA lot info screen"/>
                <h4 className={styles["large-caption"]}>Original</h4>
              </div>
              <div className="col-md-6">
                <img src={Info3.src} alt="Old JAPA lot info screen"/>
                <h4 className={styles["large-caption"]}>Redesign</h4>
              </div>
            </div>
            <div className="col-md-5">
              <p className="small-body">
                Here was an early design of the lot information screen. The information on the screen was rearranged, highlighting the important details like the price, the address, and, of course, the available parking spots!
              </p>
              <p className="small-body">
                Let’s focus on the “Availability” box. It uses the same icons that we created earlier.
              </p>
            </div>
          </div>

          <div className={` ${styles["wide-section"]} ${styles["iter1"]} row `}>
            <div className="col-md-6">
              <h2 className={styles["subtitle"]}>Iteration 1</h2>
              <p className="small-body">
                The first design, and also the simplest. Bare bones and only supports three types of parking spaces.
              </p>
            </div>
            <div className={` ${styles["center-content"]} col-md-6 `}>
              <img className="no-shadow" src={Availability1.src} alt="Availability legend first iteration"/>
            </div>
          </div>

          <div className={` ${styles["wide-section"]} ${styles["iter2"]} row `}>
            <div className={` ${styles["center-content"]} col-md-6 `}>
              <img src={Availability2.src} alt="Availability legend second iteration"/>
              <img src={Availability3.src} alt="Availability legend second iteration expanded"/>
            </div>
            <div className="col-md-6">
              <h2 className={styles["subtitle"]}>Iteration 2</h2>
              <p className="small-body">
                This second design was a leap forward. The restricted parking spot was added, and the box was now an element that could be tapped to expand it.
              </p>
              <p className="small-body">
                When only indicating the available spots, and not the number occupied, a user would not have a sense of the size of the lot (and the probability an occupied space would free up). The expanded box also provides information on the nature of the restricted parking spots.
              </p>
            </div>
          </div>

          <div className={` ${styles["wide-section"]} ${styles["iter2"]} row `}>
            <div className="col-md-6">
              <h2 className={styles["subtitle"]}>Iteration 3</h2>
              <p className="small-body">
                The design in the previous design still relied on a user’s intuition to understand what the icons represented. In our usability testing, many identified the “R” icon as “Reserved” instead of “Restricted”, so we knew we couldn’t make the assumption that users would recognize the icons’ meanings. 
              </p>
              <p className="small-body">
                This new design took the guesswork out of things. Each type of parking spot is explicitly labeled, including which colors represented open or occupied spots. 
              </p>
              <p className="small-body">
                This design also gave room for expansion. Should new parking spot types be introduced to the app later on, they can be easily added without rearranging the screen’s layout.
              </p>
            </div>
            <div className={` ${styles["center-content"]} col-md-6 `}>
              <img src={Availability4.src} alt="Availability legend third iteration"/>
              <img src={Availability5.src} alt="Availability legend third iteration expanded"/>
            </div>
          </div>

          <div className={` ${styles["wide-section"]} ${styles["iter3"]} row `}>
            <div className="col-md-6">
              <p className="small-body">
                Still, the concept of a restricted space could be tricky for users. To make things clear, we added a tooltip by the restricted label that explains what a restricted parking spot is. 
              </p>
            </div>
            <div className={` ${styles["center-content"]} col-md-6 `}>
              <img src={Availability6.src} alt="Availability legend third iteration tooltip"/>
            </div>
          </div>
        </section>

        <img className={styles["bg-img"]} src={PrototypeBG.src} alt="Prototypes"/>

        <section className={styles["final-prototype"]}>
          <div className={styles["heading-container"]}>
            <h1>The Final Prototypes</h1>
            <div className={styles["orange-line"]}></div>
          </div>

          <div className={` ${styles["wide-section"]} ${styles["firt-item"]} row `}>
            <div className="col-md-7 row">
              <div className="col-md-6">
                <img src={SignInAnimation.src} alt="Sign in"/>
              </div>
              <div className="col-md-6">
                <img src={Onboarding.src} alt="Onboarding"/> 
              </div>
            </div>
            <div className="col-md-5">
              <h2>Sign In & Onboarding</h2>
              <p className="small-body">
                Upon opening the app, users are taken through a series of screens to set up their account. This includes setting up payment information for future in-app payment implementations. Users also have the option to skip creating an account to begin exploring the app. JAPA’s orange is prominent, putting there brand identity at the forefront. 
              </p>
              <p className="small-body">
                After signing up, users are taken through onboarding screens providing an overview of the app and its features.
              </p>
            </div>
          </div>

          <div className={` ${styles["wide-section"]} row `}>
            <div className="col-md-5">
              <h2>Lot Search & Filter</h2>
              <p className="small-body">
                Finding a lot is the core of the app. Users can search by location or manually zoom into the map, and also filter their search based on their needs. Lot markers are now grouped when zoomed out in order to reduce clutter.
              </p>
              <p className="small-body">
                When looking at the available lots, the quick look feature makes it easy to swipe through lots and get a glimpse of the cost, location, and spot availability. Alternatively, users can switch to list view and scroll through all available lots in the area.
              </p>
            </div>
            <div className="col-md-7 row">
              <div className="col-md-6">
                <img src={SearchFilterAnimation.src} alt="Search and filter"/>
              </div>
              <div className="col-md-6">
                <img src={QuickLookAnimation.src} alt="Quick look"/>
              </div>
            </div>
          </div>

          <div className={` ${styles["wide-section"]} row `}>
            <div className="col-md-2"></div>
            <div className="col-md-3">
              <img src={GarageLevelSwipe.src} alt="Lot layout"/>
            </div>
            <div className="col-md-5">
              <h2>Parking Lot Layout</h2>
              <p className="small-body">
                Upon clicking into a parking lot, users can view available parking spots. On the left is an example of the lot layout for a parking garage. Users can quickly swipe through the floors or jump to a floor with the dropdown menu. Clicking into a floor preview provides a closer look of the floor.
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>

          <div className={` ${styles["wide-section"]} row `}>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <h2>Lot Information</h2>
              <p className="small-body">
                The lot information screen provides vital details about a parking lot. Users can add the lot to their saved lots, see lot amenities and policies, and the availability of each type of parking spot. The parking lot layout screen is also easily accessible from this page. 
              </p>
              <p className="small-body">
                Navigation is now integrated, so users can view the route to the lot without ever leaving the JAPA app.
              </p>
            </div>
            <div className="col-md-3">
              <img src={LotInfoAnimation.src} alt="Lot info"/>
            </div>
            <div className="col-md-2"></div>
          </div>

          <div className={` ${styles["wide-section"]} row `}>
            <div className="col-md-2"></div>
            <div className="col-md-3">
              <img src={SavedAnimation.src} alt="Saved lots"/>
            </div>
            <div className="col-md-5">
              <h2>Saved Lots</h2>
              <p className="small-body">
                One of the three navigation bar pages is the saved lots, where users can add parking lots that they frequent. This feature is geared toward the regular user groups, such as commuters and university students.
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>

          <div className={` ${styles["wide-section"]} row `}>
            <div className="col-md-5">
              <h2>Profile & Payments</h2>
              <p className="small-body">
                In the profile screens, users can edit their profile info, add and remove payment methods, and change their app interface theme.
              </p>
            </div>
            <div className="col-md-7 row">
              <div className="col-md-4">
                <img src={AddPaymentMethod.src} alt="Add payment method"/>
              </div>
              <div className="col-md-4">
                <img src={TransactionHistory.src} alt="Transaction history"/>
              </div>
              <div className="col-md-4">
                <img src={Profile.src} alt="Light and dark mode"/>
              </div>
            </div>
          </div>
        </section>

        <img className={styles["bg-img"]} src={PresBG.src} alt="Presentation"/>


        <section className={styles["takeaways"]}>
          <div className={styles["heading-container"]}>
            <h1>Takeaways</h1>
            <div className={styles["orange-line"]}></div>
          </div>

          <div className={` ${styles["narrow-text-container"]} `}>
            <h2>Working on a Design Team</h2>
            <p className="small-body">
              This was my first time working on a design project on a team. Like with collaboration in any type of project, communication becomes essential, and it was often a balancing act of our many different ideas. Throughout the five weeks, our team met very frequently to bounce ideas around and gain feedback on our designs in progress. At our very first meeting together, each of us introduced ourselves and described where our strengths were, something that helped us determine where each member could work most effectively and what we could learn from each other. 
            </p>
            <p className="small-body">
              This was also my first time working with a client. This meant we needed to design for the client’s needs and vision, not just our own. With so many ideas in the air, it made it even more important to focus on our user research and make research-backed design decisions. Since this was a real app for a real company, we also needed to keep technical constraints in mind. In our weekly meetings with JAPA, our team would discuss potential app features and gain feedback on the feasibility of implementing such ideas in the actual app.
            </p>

            <h2>Remote Collaboration</h2>
            <p className="small-body">
              This year was no doubt a difficult time for everyone. Working amid the pandemic, all work had to done remotely. It was tough at first losing out on that human element of working with a team, but we made it work! We had frequent video calls and used different collaborative online tools. We also still managed to conduct interviews and user testing, but now with household members or through Zoom. I’ve still never met my team members in-person! I’m really happy with what we were able to accomplish.
            </p>

            <h2>Exploration</h2>
            <p className="small-body">
              I’m a computer science major, and somehow I’ve done design work a fair handful of times. I don’t plan to pursue a purely design oriented field, but I think having these design skills has helped me grow a lot even as a computer programmer. I build things with the user in mind, considering what the user of the application needs or wants. I write clean, efficient code, not just functional code. Like the way I minimized the number of screens a user passed through in the JAPA app, I minimize the lines of code in a program (while maintaining readability of course). At the time of writing this, I’m early on in college, and I’m excited to explore the different career paths I can take on.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

JAPA.getLayout = (page : ReactElement) => {
  return (
    <ProjectPageLayout>
      {page}
    </ProjectPageLayout>
  )
}