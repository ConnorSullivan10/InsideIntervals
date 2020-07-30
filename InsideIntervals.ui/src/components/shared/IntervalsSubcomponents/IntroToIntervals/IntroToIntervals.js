import React from 'react';
import ReactDOM from 'react-dom';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './IntroToIntervals.scss';

class IntroToIntervals extends React.Component {
  render() {
    return (
      <div className="IntroToIntervals">
        <h2 className="text-center">What are Intervals, and how do you learn them?</h2>
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
