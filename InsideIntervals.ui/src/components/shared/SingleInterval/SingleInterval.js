import React from 'react';
import RelatedMode from '../RelatedMode/RelatedMode';
import RelatedChord from '../RelatedChord/RelatedChord';
import './SingleInterval.scss';

class SingleInterval extends React.Component {
  render() {
    const { intervalName } = this.props;
    return (
      <div className="SingleInterval">
        <h1 className="text-center">{intervalName}</h1>
      </div>
    );
  }
}

export default SingleInterval;
