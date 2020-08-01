import React from 'react';
import ModesCollapse from '../ModesCollapse/ModesCollapse';
import { baseUrl } from '../../../../helpers/apiKeys.json';
import './RelatedMode.scss';

class RelatedMode extends React.Component {
  render() {
    const { modes } = this.props;
    return (
      <div className="relatedModes">
        <p className="is-size-3">Related Modes</p>
        <div className="d-flex flex-wrap">
            {modes.map((mode) => <div className="relatedModeCard" key={mode.modeId} id={mode.modeId}>
                                                <div className="card-body">
                                                  <img className="card-img-top" src={`${baseUrl}/intervals/mode/${mode.modeId}/image`} alt="relatedModeImg"></img>
                                                  <h6 className="card-subtitle mb-2 text-muted">Intervals: {mode.uniqueIntervals}</h6>
                                                  <p className="card-text">{mode.modeDescription}</p>
                                                </div>
                                  </div>)}
        </div>
        <ModesCollapse/>
      </div>
    );
  }
}

export default RelatedMode;
