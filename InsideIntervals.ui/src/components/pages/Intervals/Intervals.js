import React from 'react';
import IntroToIntervals from '../../shared/IntervalsSubcomponents/IntroToIntervals/IntroToIntervals';
import SelectAnInterval from '../../shared/IntervalsSubcomponents/SelectAnInterval/SelectAnInterval';
import './Intervals.scss';

class Intervals extends React.Component {
  render() {
    return (
      <div className="Intervals">
        <h1 className="text-center">Intervals</h1>
        <IntroToIntervals/>
        <SelectAnInterval/>
      </div>
    );
  }
}

export default Intervals;
