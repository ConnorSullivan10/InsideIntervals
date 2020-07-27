import React from 'react';
import MapIntervalShapes from '../MapIntervalShapes/MapIntervalShapes';
import './IntervalShapes.scss';

class IntervalShapes extends React.Component {
  state = {
    filterByAscendingOrDescending: 'all',
  }

  handleShapeChange = (event) => {
    this.setState({
      filterByAscendingOrDescending: event.target.value,
    });
  }

  render() {
    const { filterByAscendingOrDescending } = this.state;
    return (
      <div className="SelectAnInterval">
      <h6>These are the shapes of the selected interval you can use to help learn and navigate the fretboard.
         Keep in mind that these positions apply to standard tuning (EADGBE) on a 6-string guitar, and apply
          at any root note (the first note in the shape), across the fretboard. You can select from the options
          below to view them in ascending or descending order.</h6>
        <select name="plan" id="selectAnInterval" onChange={this.handleShapeChange}>
          <option value="all" defaultValue>All</option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
        <MapIntervalShapes filterByAscendingOrDescending={filterByAscendingOrDescending} shapes={this.props.shapes}/>
      </div>
    );
  }
}

export default IntervalShapes;
