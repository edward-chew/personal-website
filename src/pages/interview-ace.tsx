import type { ReactElement } from "react";
import Link from "next/link";
import Head from "next/head";

import ProjectPageLayout from "../../components/layouts/ProjectPageLayout";

import Logo from '@/../public/images/InterviewAce/Logo.svg';
import Demo from '@/../public/images/InterviewAce/Demo.gif';

import projStyles from "../styles/project-page.module.css";

export default function InterviewAce() {
  return (
    <>
      <Head>
        <title>Interview Ace / Edward Chew</title>

        <meta property="og:title" content="Interview Ace / Edward Chew" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.edwardchew.me/interview-ace" />
        <meta property="og:image" content="https://www.edwardchew.me/images/Home/SecondaryProjects/InterviewAce.png" />
      </Head>

      <div className={` ${projStyles["project-page"]} `}>
        <div className={projStyles["title"]}>
          <img className={projStyles["logo"]} src={Logo.src} alt="Open AI logo"/>
          <h1>Interview Ace</h1>
          <h5 className="italic">Updated 9.4.2023</h5>
        </div>

        <section className="row">
          <div className="col-md-9">
            <h2 className="demi">The Job Hunt</h2>
            <p className="small-body">
              As my time at UC Davis wrapped up, I spent many hours applying to jobs and practicing problems on LeetCode. My confidence on technical interviews began increasing, but I hadn’t done nearly as much to prepare for behavioral rounds. Plus, in my interviews in the past, I was often asked high-level technical questions, which LeetCode wasn’t preparing me for.
            </p>
            <p className="small-body">
              And so I built Interview Ace, a GPT-4-powered platform to prep for tech interviews. Users can access the large question bank, submit their responses to questions, and get AI feedback on their responses.
            </p>
            <p className="small-body">
              The site isn't live, and it will likely stay that way since the OpenAI API is paid. You can view the GitHub repo <Link className="small-body" href="https://github.com/edward-chew/interview-ace" target="blank_">here</Link>.
            </p>
            <img src={Demo.src} alt="Project demo" className="no-shadow" />
          </div>
          <div className="col-md-3">
            <h2 className="demi">Duration</h2>
            <p className="small-body">
              4 weeks
              <br/>August 2023
            </p>
            <h2 className="demi">Tools</h2>
            <p className="small-body">
              <span className="demi">Backend</span>
              <br/>Node.js
              <br/>MongoDB
              <br/>Mongoose
              <br/>Express
              <br/>Typescript
              <br/>OpenAI API
            </p>
            <p className="small-body">
              <span className="demi">Frontend</span>
              <br/>Next.js
              <br/>Tailwind CSS
              <br/>shadcn/ui and Radix UI
              <br/>SWR
              <br/>Typescript
            </p>
            <p className="small-body">
              <span className="demi">Design</span>
              <br/>Figma
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

InterviewAce.getLayout = (page : ReactElement) => {
  return (
    <ProjectPageLayout>
      {page}
    </ProjectPageLayout>
  )
}
