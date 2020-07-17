import React from 'react';
import RelatedMode from '../RelatedMode/RelatedMode';
import RelatedChord from '../RelatedChord/RelatedChord';
import './SingleInterval.scss';

class SingleInterval extends React.Component {
  render() {
    // const { userEmail, firebaseUid } = this.props;
    return (
      <div className="SingleInterval">
        <h1 className="text-center">Selected Interval</h1>
      </div>
    );
  }
}

export default SingleInterval;
