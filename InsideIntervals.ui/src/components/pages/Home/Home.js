import React from 'react';
import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1 className="text-center">Home Page</h1>
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
    );
  }
}

export default Home;
