import React from 'react';
import ReactDOM from 'react-dom';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './IntroToIntervals.scss';

class IntroToIntervals extends React.Component {
  render() {
    return (
      <div className="IntroToIntervals">
        <section className="hero  is-primary" id="introToIntervalsHero">
          <div className="hero-body">
            <div className="columns is-1">
              <div className="level" id="heroLevel">
                <div className="container column rows">
                  <h1 className="title row" id="heroTitle">What Are Intervals?</h1>
                  <div className="row"></div>
                  <h2 className="subtitle row" id="introToIntervalsSubtitle1">
                  Simply put, an interval is the distance in pitch between 2 notes. Regardless of how you learn music: whether it be by ear, through sight reading, or by learning scales and modes, Intervals are what make up the difference between 2 notes.
                  </h2>
                  <h2 className="subtitle row" id="introToIntervalsSubtitle2">
                    There are 12 notes used in Western Music, and luckily for guitar players, all of these notes are covered between the first and 12th fret of every guitar. The guitar is laid out in a way that makes this fairly easy to understand, since every consecutive fretted note you play on the guitar is always a semi-tone (or what's also known as a half-step) apart.
                  </h2>
                  <h2 className="subtitle row" id="introToIntervalsSubtitle3">
                  Check out the videos in the carousel to the right to get a more in depth explanation of how you can learn these intervals.
                  </h2>
                </div>
                <div className="column">
                  <Carousel>
                    <div>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/bOxR7nP2H4U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/77JzblP6URE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/ADoJqngXUSM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/hxH8BiKi7M8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="my-3"/>
        <h2 className="text-center">Applying Intervals</h2>
        <div
          className="video"
          style={{
            position: 'relative',
            paddingBottom: '56.25%' /* 16:9 */,
            paddingTop: 25,
            height: 0,
          }}
        >
          <iframe
            title="ApplyingIntervals"
            style={{
              position: 'absolute',
              top: 0,
              right: 1,
              width: '100%',
              height: '100%',
            }}
            src="https://www.youtube.com/embed/-aiPPUbG6XY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
          />
        </div>
      </div>
    );
  }
}

export default IntroToIntervals;
