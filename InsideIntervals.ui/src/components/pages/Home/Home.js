import React from 'react';
import heroImage from '../../../images/notation.png';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <section className="hero  is-primary" id="homeHero">
          <div className="hero-body">
            <div className="columns is-1">
              <div className="level" id="heroLevel">
                <div className="container column rows">
                  <h1 className="title row" id="heroTitle">Learn The Basics Behind Music And Understanding Your Fretboard</h1>
                  <div className="row"></div>
                  <h2 className="subtitle row" id="heroSubtitle">
                  This application will guide you through Intervals, the building blocks of music, and provide a straightforward guide on a way to better understand what you're playing on the guitar.
                  </h2>
                </div>
                <div className="column">
                  <img src={heroImage} alt="musicNotation"/>
                  <div className="has-text-centered">
                    <button class="button is-rounded is-large" href="/Intervals" id="getStartedBtn">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    <section>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Why learn intervals?</p>
            <p class="subtitle">Lorem ipsum</p>
          </article>
        </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <div className="tile is-child">
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
                        title="WhyIntervals"
                        style={{
                          position: 'absolute',
                          top: 0,
                          right: 1,
                          width: '100%',
                          height: '100%',
                        }}
                        src="https://www.youtube.com/embed/Cy_c2InwkSk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                      />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
    );
  }
}

export default Home;
