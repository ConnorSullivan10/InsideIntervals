import React from 'react';
import heroImage from '../../../images/notation.png';
import userData from '../../../helpers/data/userData';
import './Home.scss';

class Home extends React.Component {
state = {
  userName: '',
  userEmail: '',
  feedbackSubject: '',
  feedbackContent: '',
  emailValidationError: false,
}

nameChange = (e) => {
  e.preventDefault();
  this.setState({ userName: e.target.value });
}

emailChange = (e) => {
  e.preventDefault();
  this.setState({ userEmail: e.target.value });
}

subjectChange = (e) => {
  e.preventDefault();
  this.setState({ feedbackSubject: e.target.value });
}

contentChange = (e) => {
  e.preventDefault();
  this.setState({ feedbackContent: e.target.value });
}

submitUserFeedback = (e) => {
  e.preventDefault();
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.userEmail)) {
    const newFeedback = {
      UserName: this.state.userName,
      UserEmail: this.state.userEmail,
      FeedbackSubject: this.state.feedbackSubject,
      FeedbackContent: this.state.feedbackContent,
    };
    userData.addUserFeedback(newFeedback)
      .then(() => {
        this.setState({
          userName: '',
          userEmail: '',
          feedbackSubject: '',
          feedbackContent: '',
          emailValidationError: false,
        });
      });
  }
  this.setState({
    emailValidationError: true,
  });
}

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
                    <a className="button is-rounded is-large" href="/Intervals" id="getStartedBtn">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    <section id="homeSection2">
      <div className="tile is-ancestor" id="section2Tiles">
        <div className="tile is-parent">
          <article className="tile is-child box" id ="tile1">
            <div className="hero">
              <div className="hero-body">
                <p className="title">Why learn intervals?</p>
                <div className="row"></div>
                <p className="subtitle">Intervals are your key to figuring out how to make the sounds you want. There's no need to get stuck with the same old barre chords, or what you're typically limited by when learning via tabs or scales. Unlock the potential to make the music you hear in your head.</p>
              </div>
            </div>
          </article>
        </div>
      <div className="tile is-parent">
        <article className="tile is-child box" id="tile2">
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
                        src="https://www.youtube.com/embed/Cy_c2InwkSk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                      />
              </div>
            </div>
          </article>
        </div>
      </div>
        <div className="tile is-parent" id="tile3">
          <div className="tile is-child box columns">
            <article className="column" id ="tile3Title">
                <div className="hero">
                  <div className="hero-body">
                    <p className="title">Suggestions?</p>
                    <div className="row"></div>
                    <p className="subtitle">We're always open to hearing suggestions about other topics and functionality you'd like to see on the app. Feel free to send us a message if you have any questions or suggestions.</p>
                  </div>
                </div>
            </article>
            <article className="notification column">
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">From</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <p className="control is-expanded has-icons-left">
                          <input className="input" type="text" placeholder="Name" value={this.state.userName} onChange={this.nameChange}/>
                          <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                          </span>
                        </p>
                      </div>
                      <div className="field">
                        <p className="control is-expanded has-icons-left has-icons-right">
                          <input className="input" type="email" placeholder="Email" value={this.state.userEmail} onChange={this.emailChange}/>
                          {this.state.emailValidationError ? (<p class="alert-danger">Please enter a valid email.</p>) : ''}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Subject</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <input className="input" type="text" placeholder="i.e. Suggestion" value={this.state.feedbackSubject} onChange={this.subjectChange}/>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">Feedback</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <textarea className="textarea" placeholder="Explain how we can help you" value={this.state.feedbackContent} onChange={this.contentChange}></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal">
                    <div className="field-label">
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <button className="button is-primary" onClick={this.submitUserFeedback}>
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
