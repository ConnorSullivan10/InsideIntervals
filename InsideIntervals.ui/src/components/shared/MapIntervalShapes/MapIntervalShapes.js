import React from 'react';
import './MapIntervalShapes.scss';

class MapIntervalShapes extends React.Component {
  render() {
    const { filterByAscendingOrDescending, shapes } = this.props;
    const filteredShapes = shapes.filter((shape) => shape.ascendingOrDescending === filterByAscendingOrDescending);
    if (filterByAscendingOrDescending === 'all' || '') {
      return (
        <div className="results d-flex flex-wrap">
          {this.props.shapes.map((shape) => <img src={shape.shapeImgFile} alt="fretboardShapes"></img>)}
        </div>
      );
    }
    return (
        <div className="results d-flex flex-wrap">
          {filteredShapes.map((shape) => <img src={shape.shapeImgFile} alt="fretboardShapes"></img>)}
        </div>
    );
  }
}

export default MapIntervalShapes;
