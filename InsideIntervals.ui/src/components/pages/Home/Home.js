import React from 'react';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <section class="hero is-medium is-primary" id="homeHero">
          <div class="hero-body">
            <div class="columns">
              <div class="level">
                <div class="container column">
                  <h1 class="title">Learn The Basics Behind Music And Understanding Your Fretboard</h1>
                  <h2 class="subtitle">
                  This application will guide you through Intervals, the building blocks of music, and provide a straightforward guide on a way to better understand what you're playing on the guitar.
                  </h2>
                </div>
                <div class="column">
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
                      src="https://www.youtube.com/embed/Cy_c2InwkSk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
