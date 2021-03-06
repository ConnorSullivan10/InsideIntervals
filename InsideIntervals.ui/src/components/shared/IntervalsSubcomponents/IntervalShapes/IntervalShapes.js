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
      <div id="selectAnInterval">
      <h4 className="is-size-3">Interval Shapes</h4>
      <p className="is-size-6">These are the shapes of the selected interval you can use to help learn and navigate the fretboard.
         Keep in mind that these positions apply to standard tuning (EADGBE) on a 6-string guitar, and apply
          at any root note (the first note in the shape), across the fretboard. You can select from the options
          below to view them in ascending or descending order.</p>
          <br></br>
      <p className="is-size-6">When mapping out the root and octave, keep in mind that the root note is typically the note you start out with on the fretboard, and the lower or higher octave is the note either 12 semitones below or above that note.</p>
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
