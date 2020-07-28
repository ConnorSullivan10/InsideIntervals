import React from 'react';
import SelectAnInterval from '../../shared/IntervalsSubcomponents/SelectAnInterval/SelectAnInterval';
import './Intervals.scss';

class Intervals extends React.Component {
  render() {
    return (
      <div className="Intervals">
        <h1 className="text-center">Intervals</h1>
        <SelectAnInterval/>
      </div>
    );
  }
}

export default Intervals;
