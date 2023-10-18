import type { ReactElement } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import ProjectPageLayout from '../../components/layouts/ProjectPageLayout'

import Logo from '@/../public/images/Translation/Logo.png'
import Figure1 from '@/../public/images/Translation/Figure1.png'
import Figure2 from '@/../public/images/Translation/Figure2.png'
import Figure3 from '@/../public/images/Translation/Figure3.png'
import Pipelines from '@/../public/images/Translation/Pipelines.png'

import projStyles from '../styles/project-page.module.css'
import styles from '../styles/translation.module.css'

export default function Translation() {
  return (
    <>
      <Head>
        <title>Translation / Edward Chew</title>

        <meta property="og:title" content="Translation / Edward Chew"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://edwardchew.vercel.app/translation"/>
        <meta property="og:image" content="https://edwardchew.vercel.app/images/Home/PrimaryProjects/Translation.png"/>
      </Head>

      <div className={` ${projStyles["project-page"]} ${styles["translation"]} `}>
        <div className={projStyles["title"]}>
          <img className={projStyles["logo"]} src={Logo.src} alt="Google Translate logo"/>
          <h1>Evaluating Google Translate's Effectiveness in Preserving Semantic Content</h1>
          <h5 className="italic">Updated 10.13.2023</h5>
        </div>

        <section className="row">
          <div className="col-md-9">
            <h2 className="demi">A Major Research Project</h2>
            <p className="small-body">
              As part of my work at the <Link href="http://c2.ucdavis.edu/" target="_blank" className="small-body">Computational Communication Lab</Link> at UC Davis (under <Link className="small-body" href="https://enfascination.com/weblog/professional" target="blank_">Prof. Seth Frey</Link>), I took part in a project evaluating the effectiveness of Google Translate. Up to this point, this is the largest research project I've worked on. It was fun thinking about the impact of work on the world, not just the nuances of building out a product. This project was accepted to the International Communication Association 2022 conference, and will later be published as <i>Machine Translation for Accessible Multi-Language Text Analysis</i>.
            </p>
            <p className="small-body">
              Within the interdisciplinary team, I led the development work. The scripts were done in Python, and involved the application of ML/NLP tools and the use of Google's Translation API.
            </p>
            <h2 className="demi">Background</h2>
            <p className="small-body">
              Communications research is heavily English-focused, yet communications is inherently multilingual. English is far from the only language spoken in the world! In this project, we aim to demonstrate that there are existing machine translation tools that academics can apply to expand their research into other languages. To quantify the effectiveness of one of the most popular translation tools, Google Translate, we measure how the meaning of a text deteriorates as the text is translated back and forth between languages.
            </p>
          </div>
          <div className="col-md-3">
            <h2 className="demi">Duration</h2>
            <p className="small-body">
              12 months
              <br/>July 2021 - June 2022
            </p>
            <h2 className="demi">Team Members</h2>
            <p className="small-body">
              Edward Chew
              <br/>William Weisman
              <br/>Jingying Huang
              <br/>Seth Frey
            </p>
            <h2 className="demi">Tools</h2>
            <p className="small-body">
              Python
              <br/>pandas
              <br/>Polyglot
              <br/>Google Translate API
            </p>
          </div>
        </section>

        <section className={styles["background"]}>

        </section>

        <section className={styles["how"]}>
          <h2 className="demi">How We Did It</h2>
          <p className="small-body">
            We used Twitter posts as our texts, due to the large datasets already available. There were about 1.6 million tweets in 18 langauges, drawn from two research papers:
          </p>
          <ul className="small-body">
            <li className="demi">(Mozetičet et al., 2016) Multilingual Twitter Sentiment Classification: The Role of Human Annotators</li>
            <li className={styles["no-bullet"]}>
              <ul>
                <li>
                  1.6 million posts from Twitter, hand-labeled with Positive, Negative, or Neutral sentiments in 15 languages: Albanian, Bosnian, Bulgarian, Croatian, English, German, Hungarian, Polish, Portuguese, Russian, Serbian, Slovak, Slovenian, Spanish, and Swedish
                </li>
              </ul>
            </li>
            <li className="demi">(Imran et al., 2022) TBCOV: Two Billion Multilingual COVID-19 Tweets with Sentiment, Entity, Geo, and Gender Labels</li>
            <li className={styles["no-bullet"]}>
              <ul>
                <li>
                  30,000 posts from Twitter, with machine-generated Positive, Negative, or Neutral sentiment labels in 3 languages: Arabic, Chinese, and Hindi
                </li>
              </ul>
            </li>
          </ul>

          <p className="small-body">
            We then had two main computational tools:
          </p>
          <ul className="small-body">
            <li><Link className="demi" href="https://polyglot.readthedocs.io/en/latest/" target="_blank">Polyglot</Link>, a sentiment analysis tool used to measure the meaning of a text</li>
            <li><span className="demi">Google Cloud Translation API</span> to translate texts back and forth</li>
          </ul>

          <p className="small-body">
            Each of the datasets underwent text cleaning, including the removal of Twitter return handles, URLs, and numbers. Tweets empty after cleaning were removed.
            The tweets were then translated into the following three pipelines:
          </p>
          <ul className="small-body">
            <li>Pipeline 1: Original Language</li>
            <li>Pipeline 2: Translated to English</li>
            <li>Pipeline 3: Back Translated to Original Language</li>
          </ul>
          <p className="small-body">
            A sentiment label was then applied to each tweet in each pipeline with the Polyglot classifier (Positive, Negative, or Neutral). The accuracies for each language and pipeline were determined by comparing the Polyglot-generated labels with the ground truth labels of the dataset.
          </p>

          <img src={Pipelines.src} alt="Diagram of translation pipelines"/>
        </section>

        <section className={styles["found"]}>
          <h2 className="demi">What We Found</h2>
          <p className="small-body">
            Polyglot is a dictionary-based sentiment classifier. Due to the short text lengths of the tweets, many were classified as neutral. For our results, we focus on the tweets that do not have a ground truth label of neutral and were not labeled neutral by the classifier.
            Figures 1 and 2 compare the sentiment accuracies of the three pipelines, averaged across the original 15 languages.
          </p>
          <div className={` ${styles["fig12"]} row`}>
            <div className="col-6">
              <img src={Figure1.src} alt="Figure 1"/>
            </div>
            <div className="col-6">
              <img src={Figure2.src} alt="Figure 2"/>
            </div>
          </div>

          <p className="small-body">
            Figure 3 compares the pipelines of each individual language.
          </p>
          <img className={styles["fig3"]} src={Figure3.src} alt="Figure 3"/>

          <p className="small-body">
            From the above results, we noticed a few key items:
          </p>
          <ol className="small-body">
            <li><span className="demi">On average, the accuracy of the sentiment labels increased between pipelines 1 and 2.</span> This is likely a reflection of Polyglot's high accuracy when analyzing English, not the semantic loss we expect from translation.</li>
            <li><span className="demi">On average, the accuracy decreased slightly between pipelines 1 and 3.</span> While not flawless, Google Translate retains most of the text meaning.</li>
            <li><span className="demi">Several languages saw increases in accuracy between pipelines 1 and 3.</span> One hypothesis is that translation "simplifies" the text, so that more common words that can be picked up by Polyglot are used.</li>
          </ol>
        </section>

        <section className={styles["limitations"]}>
          <h2 className="demi">Limitations</h2>
          <p className="small-body">
            Despite out claims of global relevance, this study consists primarily of European languages. This study was also conducted by non-native speakers of the languages analyzed, so we are unable to offer explanations for the differences in results between the languages.
          </p>
          <p className="small-body">
            Possibly most importantly, though, this study currently only uses sentiment analysis as a measure of text meaning. Sentiment analysis is a valid, but may only capture one piece of text meaning. Future work includes application of topic clustering with Gibbs Sampling algorithm for the Dirichlet Multinomial Mixture (GSDMM) and word embeddings with 
            word2vec.
          </p>
        </section>

        <section className={styles["conclusion"]}>
          <h2 className="demi">Conclusion</h2>
          <p className="small-body">
            Sentiment analysis scores were high across the 17 non-English languages. This demonstrates that Google Translate is effective in retaining text meaning, and we hope this analysis gives researchers the confidence to apply machine translation to broaden the scope of their work.
          </p>
          <p className="small-body">
            This was overall a very fun project to work on. Much of my other software development work the past few years has been web development focused, so it was fun exploring the data science and machine learning application side of coding.
          </p>
        </section>

      </div>
    </>
  )
}

Translation.getLayout = (page : ReactElement) => {
  return (
    <ProjectPageLayout>
      {page}
    </ProjectPageLayout>
  )
}