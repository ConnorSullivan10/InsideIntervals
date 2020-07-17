import React from 'react';
import ModesCollapse from '../../shared/ModesCollapse/ModesCollapse';
import SelectAnInterval from '../../shared/SelectAnInterval/SelectAnInterval';
import './Intervals.scss';

class Intervals extends React.Component {
  render() {
    return (
      <div className="Intervals">
        <h1 className="text-center">Intervals Ed</h1>
        <SelectAnInterval/>
        <ModesCollapse/>
      </div>
    );
  }
}

export default Intervals;
