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
                    <a class="button is-rounded is-large" href="/Intervals" id="getStartedBtn">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    <section id="homeSection2">
      <div class="tile is-ancestor" id="section2Tiles">
        <div class="tile is-parent">
          <article class="tile is-child box" id ="tile1">
            <div class="hero">
              <div class="hero-body">
                <p class="title">Why learn intervals?</p>
                <div className="row"></div>
                <p class="subtitle">Intervals are your key to figuring out how to make the sounds you want. There's no need to get stuck with the same old barre chords, or what you're typically limited by when learning via tabs or scales. Unlock the potential to make the music you hear in your head.</p>
              </div>
            </div>
          </article>
        </div>
      <div class="tile is-parent">
        <article class="tile is-child box" id="tile2">
          <div className="tile is-child">
            <div
                      className="video"
                      style={{
                        position: 'relative',
                        paddingBottom: '45.25%' /* 16:9 */,
                        paddingTop: 75,
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
        <div class="tile is-parent" id="tile3">
          <div class="tile is-child box columns">
            <article class="column" id ="tile3Title">
                <div class="hero">
                  <div class="hero-body">
                    <p class="title">Suggestions?</p>
                    <div className="row"></div>
                    <p class="subtitle">We're always open to hearing suggestions about other topics and functionality you'd like to see on the app. Feel free to send us a message if you have any questions or suggestions.</p>
                  </div>
                </div>
            </article>
            <article class="notification column">
                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">From</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <p class="control is-expanded has-icons-left">
                          <input class="input" type="text" placeholder="Name"/>
                          <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                          </span>
                        </p>
                      </div>
                      <div class="field">
                        <p class="control is-expanded has-icons-left has-icons-right">
                          <input class="input" type="email" placeholder="Email"/>
                          <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                          </span>
                          <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">Subject</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <div class="control">
                          <input class="input" type="text" placeholder="i.e. Suggestion"/>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">Question</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <div class="control">
                          <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="field is-horizontal">
                    <div class="field-label">
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <div class="control">
                          <button class="button is-primary">
                            Send message
                          </button>
                        </div>
                      </div>
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
