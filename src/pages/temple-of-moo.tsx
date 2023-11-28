import type { ReactElement } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import ProjectPageLayout from '../../components/layouts/ProjectPageLayout'

import Logo from '@/../public/images/TempleOfMoo/Logo.svg'
import Duck1 from '@/../public/images/TempleOfMoo/Duck1.jpg'
import Duck2 from '@/../public/images/TempleOfMoo/Duck2.jpg'
import Duck3 from '@/../public/images/TempleOfMoo/Duck3.jpg'
import Trailhead from '@/../public/images/TempleOfMoo/Trailhead.png'
import FirstClue1 from '@/../public/images/TempleOfMoo/FirstClue1.png'
import FirstClue2 from '@/../public/images/TempleOfMoo/FirstClue2.png'
import QR from '@/../public/images/TempleOfMoo/QR.png'
import MapClue1 from '@/../public/images/TempleOfMoo/MapClue1.png'
import MapClue2 from '@/../public/images/TempleOfMoo/MapClue2.png'
import MapClue3 from '@/../public/images/TempleOfMoo/MapClue3.png'
import MapClue4 from '@/../public/images/TempleOfMoo/MapClue4.png'
import RedHerring from '@/../public/images/TempleOfMoo/RedHerring.png'
import Switch1 from '@/../public/images/TempleOfMoo/Switch1.png'
import Switch2 from '@/../public/images/TempleOfMoo/Switch2.png'
import End1 from '@/../public/images/TempleOfMoo/End1.png'
import End2 from '@/../public/images/TempleOfMoo/End2.png'
import End3 from '@/../public/images/TempleOfMoo/End3.png'
import End4 from '@/../public/images/TempleOfMoo/End4.png'
import End5 from '@/../public/images/TempleOfMoo/End5.png'
import End6 from '@/../public/images/TempleOfMoo/End6.png'

import projStyles from '../styles/project-page.module.css'
import styles from '../styles/temple-of-moo.module.css'

export default function TempleOfMoo() {
  return (
    <>
      <Head>
        <title>Temple of Moo / Edward Chew</title>

        <meta property="og:title" content="Temple of Moo / Edward Chew"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.edwardchew.me/temple-of-moo"/>
        <meta property="og:image" content="https://www.edwardchew.me/images/Home/SecondaryProjects/TempleOfMoo.png"/>
      </Head>

      <div className={` ${projStyles["project-page"]} ${styles["translation"]} `}>
        <div className={projStyles["title"]}>
          <img className={projStyles["logo"]} src={Logo.src} alt="Temple of Moo logo"/>
          <h1>The Temple of Moo</h1>
          <h5 className="italic">Updated 10.16.2023</h5>
        </div>

        <section className="row">
          <div className="col-md-9">
            <h2 className="demi">The Rubber Duck Cult</h2>
            <p className="small-body">
              A picture of a rubber duck and the words “Three Days” in bold, black text. That was the cryptic photo that surfaced on the UC Davis subreddit in December 2019. A few days later, another picture of a rubber duck was posted, along with a location and time. I knew I had to explore what was going on.
            </p>
            <p className="small-body">
              It was the Monday afternoon of my first finals week of college. Luckily, I didn’t have any last-minute studying to do, so I made my way down my dorm staircase, unlocked my bike, and took off towards the Death Star. (The “Death Star” is our Social Sciences and Humanities building.)
            </p>
            <p className="small-body">
              As I hopped off my bike and made my way over to the room listed on the post, I saw the concrete walls adorned with colorful chalk duck drawings. “The ducks love you”, one read. “Quack quack”, read another. When I neared the room, the floor was littered with tiny ducks, and ominous music radiated out from an unsuspecting room in the hallway.
            </p>
            <p className="small-body">
              Upon entering, I was greeted by a few 20-something-year-olds dressed in lab coats, along with a half-dozen other students who decided to investigate the ducks. In deep, dramatic voices, interrupted now and then by giggling as they broke character, the students in lab coats invited us to play a game. We collected rubber ducks from around the courtyard, organized them onto placemats, and deciphered a few duck-related messages using the letters Sharpied onto the ducks’ bellies. Upon completion of the task, we were granted rubber ducks of our own, along with a Trader Joe’s chocolate chip cult cookie.
            </p>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img src={Duck1.src} alt="'Waddle onwards' written in chalk on ground" />
                <h5 className={projStyles["caption"]}>Mysterious chalk messages</h5>
              </div>
              <div className="col-md-4">
                <img src={Duck2.src} alt="Rubber ducks on paper placemats" />
                <h5 className={projStyles["caption"]}>The message decryption game</h5>
              </div>
              <div className="col-md-4">
                <img src={Duck3.src} alt="Rubber duck and cult cookie" />
                <h5 className={projStyles["caption"]}>Rubber duck and a cult cookie</h5>
              </div>
            </div>
            <p className="small-body">
              This experience from freshmen year still remains one of my favorite moments from my time at UC Davis, even when the whole process was only a short, 20-minute experience. It was a fun introduction to the quirky campus I would be on for the next four years, and an inspiration for my next project.
            </p>
          </div>
          <div className="col-md-3">
            <h2 className="demi">Duration</h2>
            <p className="small-body">
              3 Months
              <br/>Dec 2019 - Feb 2020
            </p>
            <h2 className="demi">Tools</h2>
            <p className="small-body">
              Weebly
              <br/>Illustrator
              <br/>Google Suite
            </p>
          </div>
        </section>

        <section>
          <h2 className="demi">Building New Worlds</h2>
          <p className="small-body">
            After my initiation into the rubber duck cult, I knew I wanted to build a game of my own that could bring people together.
          </p>
          <p className="small-body">
            My interest in game-building was nothing new. In elementary and middle school, I regularly designed games to play with friends. We’ve hosted our own renditions of Survivor, played many tag variations, and “murdered” one another in mystery games. Outside of that, I’ve loved puzzle-solving games, like escape rooms and geocaching. It was only a matter of time before I created my own elaborate puzzle-solving game.
          </p>
          <p className="small-body">
            Many alternate reality games (ARGs) try to be mysterious, edgy, and difficult. I wanted to build something sillier and simple enough that the average person could solve it. And so, The Temple of Moo was born, an anonymous working to restore power (over humans, that is) to the on-campus cows. Looking back on the project, the dialogue was admittedly still a little cornier than I prefer, but I think it is a neat project to showcase nonetheless.
          </p>
        </section>

        <section className={`${styles["design"]} row justify-content-center`}>
          <div className="col-12">
            <h2 className="demi">Design and Planning</h2>
            <p className="small-body">
              In my freshmen year of college, I hardly knew how to code, so the solutions in this project were pretty low-tech. The clues were all hosted on a Weebly site I stripped down to the bare bones, and everything else relied on printouts.
            </p>
            <p className="small-body">
              All of the clues on the Weebly site were presented through brief dialogue, as though the puppet master (PM) was talking to the player directly. (In ARGs, the puppet-master is the operator of the game and is also the “interface” that players interface with the game through.) Players could then “respond” by selecting from a set of buttons. 
            </p>
            <p className="small-body">
              Printout assets were pretty low-fidelity. Black and white were used almost exclusively, and Proxima Nova was the font of choice.
            </p>
            <p className="small-body">
              For the logo, I wanted an icon related to cows that wasn’t immediately identifiable to what it represented. Hopefully, it would click that the logo was a cowbell once the players were a couple of rounds in.
            </p>
          </div>
          <div className="col-md-2">
            <img className={projStyles["logo"]} src={Logo.src} alt="Temple of Moo logo"/>
          </div>
          <div className="col-12">
            <p className="small-body">
              To scout out potential locations to hide clues, I took several trips around campus, making an effort to explore corners of campus off the beaten path. In doing so, I found hidden-away seating areas, dusty underpasses, and little bits of campus beauty.
            </p>
          </div>
        </section>

        <section className={`row justify-content-center`}>
          <div className="col-12">
            <h2 className="demi">Gameplay</h2>
            <p className="small-body">
              ARGs always begin with a “trailhead”, which is the artifact that draws players into the game. In The Temple of Moo, it’s a set of digital and paper flyers with QR codes posted around campus and on-campus social media.
            </p>
          </div>
          <div className="col-md-3">
            <img src={Trailhead.src} alt="Flyer with QR code and logo"/>
          </div>
          <div className="col-12">
            <p className="small-body">
              Upon scanning the code, players are taken to the homepage of the Weebly site—and their first clue.
            </p>
          </div>
          <div className="col-md-8">
            <img src={FirstClue1.src} alt="Website with first clue"/>
          </div>
          <div className="col-12">
            <p className="small-body">
              Here’s the first clue, intended to be the easiest of the twelve total clues. Most UC Davis students would know our campus has a series of dorm buildings named after trees, including Sequoia. In addition to solving this simple riddle, players need to get past the small obstacle of slipping into this access-controlled building.
            </p>
          </div>
          <div className="col-md-8">
            <img src={FirstClue2.src} alt="Website with first clue"/>
          </div>
          <div className="col-12">
            <p className="small-body">
              At this clue location, and every other location following, players need to locate and scan the following printout, which leads back to the Weebly site and their next clue.
            </p>
          </div>
          <div className="col-md-8">
            <img src={QR.src} alt="QR code for next clue"/>
          </div>
          <div className="col-12">
            <p className="small-body">
              Until the end of the game, players continue this pattern of solving a clue to uncover a location. visiting the location to find and scan the QR code, and retrieving the clue to the next location. There are 12 total clues pointing to 12 locations.
            </p>
          </div>
        </section>

        <section>
          <h2 className="demi">Overseeing the Game</h2>
          <p className="small-body">
            After solving the first clue, I unfortunately broke the fourth wall by providing a list of rules/tips for players. This includes rules to not cheat (especially given these low-tech solutions are easy to bypass), as well as a contact email to use in case things go wrong. I also offered to give hints to puzzles whenever needed. There was no reward to this game, so completing it is just for the fun of it anyway.
          </p>
          <p className="small-body">
            To track players’ progress, I sprinkled a few Google Forms throughout clues, which had to be filled out before proceeding. In addition to requesting players’ emails, I asked simple questions like “Why do you want to join the Temple of Moo?” as though to converse with the PM.
          </p>
        </section>

        <section className={`${styles["puzzles"]} row justify-content-center`}>
          <div className="col-12">
            <h2 className="demi">The Puzzles</h2>
            <p className="small-body">
              At the end of this page, I’ll link all the clues so you can solve them yourself. All of the puzzles were designed by me, but most are structurally based on some existing type of puzzle. Here are a few of my favorites. (Spoilers ahead!)
            </p>
            <h3 className="demi">Puzzle 6: Map</h3>
            <p className="small-body">
              In this puzzle, players are presented with the below diagram with shapes and numbers, along with pairs of clues. The solution to each clue is a number, resulting in pairs of numbers that can be found on the diagram. Some of these numbers may have changed over time or are generally ambiguous. However, only four pairs are actually relevant, and I made sure that those were clues with more fixed, definite solutions.
            </p>
          </div>
          <div className="col-md-6">
            <img src={MapClue1.src} alt="Diagram with numbers, dots, and shapes"/>
          </div>
          <div className="col-md-6">
            <img src={MapClue2.src} alt="List of clues"/>
          </div>
          <div className="col-12">
            <p className="small-body">
              After solving all the clues and connecting the pairs with straight lines, a small square is drawn on the diagram. The drawn-in shapes are all the bird’s eye view shapes of a few campus buildings. Most students would likely recognize the shape of Shields Library or the Segundo Dining Commons. By overlaying the official campus map and scaling it appropriately, players will discover that the square is neatly framing Haring Hall, the location of their next clue.
            </p>
          </div>
          <div className="col-md-6">
            <img src={MapClue3.src} alt="Same diagram, with additional lines connecting dots"/>
          </div>
          <div className="col-md-6">
            <img src={MapClue4.src} alt="Same diagram, with added map overlay"/>
          </div>
          <div className="col-12">
            <h3 className={`${styles["mt-10"]} demi`}>Puzzle 10: Word Categories</h3>
            <p className="small-body">
              This puzzle was modeled after the iOS app <Link href="https://apps.apple.com/us/app/red-herring/id663596265" target="_blank">Red Herring</Link>, a word puzzle game I played many years ago. In September 2023, NYT Games released their rendition, called <Link href="https://www.nytimes.com/games/connections" target="_blank">Connections</Link>.
            </p>
            <p className="small-body">
              In this puzzle, you must organize a list of words into three groups of four words each. You’ll be left with a few extra words, there to throw you off. In this variation of the game, the categories are not provided, but a few words are filled in for you to guide you in the right direction. The tricky thing, though, is that words with multiple meanings were deliberately chosen. For example, does the word “bat” belong in the animals category or the sports equipment category? There will still, only ever be one solution to these puzzles, as there will not be enough words to fill in a full category using the “incorrect” definition.
            </p>
            <p className="small-body">
              The final location is extracted by taking the first letter of the leftover words and unscrambling it into “BioBrew”, the name of the coffee window housed in our Science Laboratory Building. Unfortunately, this coffee window no longer exists.             
            </p>
          </div>
          <div className="col-md-6">
            <img src={RedHerring.src} alt="Puzzle with tables of word lists"/>
          </div>
          <div className="col-12">
            <h3 className={`${styles["mt-10"]} demi`}>Puzzle 12: The Switch Matrix</h3>
            <p className="small-body">
              The twelfth and final puzzle is really a series of 10 small puzzles. After following the directions listed in the image below, players are left with a grid of black and white circles.
            </p>
          </div>
          <div className="col-md-8">
            <img src={Switch1.src} alt="Puzzle instructions with grid of circles"/>
          </div>
          <div className="col-12">
            <p className="small-body">
              Below is the finished solution matrix, excluding the circles outside of the square. By dividing the square into six 3 by 2 rectangles, the final location can be uncovered: GAZEBO written in braille. This refers to the Carolee Shields Gazebo in the campus Arboretum, where players will find their final QR code.
            </p>
          </div>
          <div className="col-md-3">
            <img src={Switch2.src} alt="Completed puzzle with black and white circles"/>
          </div>
        </section>

        <section className={`row justify-content-center`}>
          <div className="col-12">
            <h2 className="demi">Completing the Game</h2>
            <p className="small-body">
              If you survey UC Davis students about where their favorite spots on campus are, the most common response will be the Arboretum. The Arboretum is a gorgeous 100-acre area full of otherworldly plants, fields for picnicking, and the waterways of Putah Creek. While students know and love the Arboretum, they’re generally just referring to the east side of it around Lake Spafford. While the lake is certainly gorgeous, I’ve grown fond of the west side, where the gazebo is located. It’s much quieter, has colorful tile art, and is a contemplative escape from the bustling main campus.
            </p>
            <p className="small-body">
              That’s why I chose the Shields Gazebo as a final location. I hope players have a chance to be alone with their thoughts for a moment and reflect on the little adventure they just completed. Players receive a simple completion certificate and are met with these final bits of dialogue.
            </p>
          </div>
          <div className="col-8">
            <img src={End1.src} alt="End dialogue"/>
            <img src={End2.src} alt="End dialogue"/>
            <img src={End3.src} alt="End dialogue"/>
            <img src={End4.src} alt="End dialogue"/>
            <img src={End5.src} alt="End dialogue"/>
            <img src={End6.src} alt="End dialogue"/>
          </div>
        </section>

        <section className="row">
          <div className="col-12">
            <h2 className="demi">Deployment</h2>
            <p className="small-body">
              Unfortunately, this game was never deployed. I completed building this game in February 2020, intending to deploy it at the beginning of spring quarter in March 2020. I’m sure you can recall why that did not work out.
            </p>
            <p className="small-body">
              As the pandemic conditions improved in 2021, we returned to classrooms for fall quarter of my junior year. Still, it didn’t sound like a good idea to deploy a game dependent on students rooting around places on campus and touching lots of surfaces. By senior year, conditions were considerably better, but other projects got in the way.
            </p>
            <p className="small-body">
              I’m definitely a little bummed I never got to see students play this game, but I hope future UC Davis students will bring random ideas to life and add a little more fun to the campus community.
            </p>
          </div>
        </section>

        <section className="row">
          <div className="col-12">
            <h2 className="demi">All the Puzzles</h2>
            <p className="small-body">
              If you’d like to solve the puzzles yourself, access them from the links below. It’s possible (and maybe likely) that puzzles have errors I didn’t catch. Many puzzles may also be difficult if you are unfamiliar with UC Davis.
            </p>
            <p className="small-body">
              <Link href="https://moodavis.weebly.com/" target="_blank">Clue 1 (Trailhead)</Link>
              <br/><Link href="https://moodavis.weebly.com/followed" target="_blank">Clue 2</Link>
              <br/><Link href="https://moodavis.weebly.com/caught-on" target="_blank">Clue 3</Link>
              <br/><Link href="https://moodavis.weebly.com/too-easy" target="_blank">Clue 4</Link>
              <br/><Link href="https://moodavis.weebly.com/holy-temple" target="_blank">Clue 5</Link>
              <br/><Link href="https://moodavis.weebly.com/cocky" target="_blank">Clue 6</Link>
              <br/><Link href="https://moodavis.weebly.com/why-join" target="_blank">Clue 7</Link>
              <br/><Link href="https://moodavis.weebly.com/major" target="_blank">Clue 8</Link>
              <br/><Link href="https://moodavis.weebly.com/rhyme" target="_blank">Clue 9</Link>
              <br/><Link href="https://moodavis.weebly.com/skeptical" target="_blank">Clue 10</Link>
              <br/><Link href="https://moodavis.weebly.com/nearly-at-end" target="_blank">Clue 11</Link>
              <br/><Link href="https://moodavis.weebly.com/this-is-it" target="_blank">Clue 12</Link>
              <br/><Link href="https://moodavis.weebly.com/you-did-it" target="_blank">Ending Dialogue</Link>
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

TempleOfMoo.getLayout = (page : ReactElement) => {
  return (
    <ProjectPageLayout>
      {page}
    </ProjectPageLayout>
  )
}