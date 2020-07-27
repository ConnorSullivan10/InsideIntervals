import React from 'react';
import { baseUrl } from '../../../helpers/apiKeys.json';
import './MapIntervalShapes.scss';

class MapIntervalShapes extends React.Component {
  render() {
    const { filterByAscendingOrDescending, shapes } = this.props;
    const filteredShapes = shapes.filter((shape) => shape.ascendingOrDescending === filterByAscendingOrDescending);
    if (filterByAscendingOrDescending === 'all' || '') {
      return (
        <div className="mappedIntervalShapes d-flex flex-wrap">
          {shapes.map((shape) => <img src={`${baseUrl}/intervals/shape/${shape.shapeId}/image`} alt="fretboardShapes"></img>)}
        </div>
      );
    }
    return (
        <div className="mappedIntervalShapes d-flex flex-wrap">
          {filteredShapes.map((shape) => <img src={`${baseUrl}/intervals/shape/${shape.shapeId}/image`} alt="fretboardShapes"></img>)}
        </div>
    );
  }
}

export default MapIntervalShapes;
