// import $ from 'jquery';
import React from 'react';
import ModeTypeTabs from '../ModeTypeTabs/ModeTypeTabs';
import './ModesCollapse.scss';

class ModesCollapse extends React.Component {
  render() {
    // const toggleShow = () => {
    //   $('.collapse').collapse();
    // };
    return (
      <div className="ModesCollapse">
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What are Modes?
                </button>
              </h5>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
              <p>
                Modes are a great resource for both improvising and composing. They give us a great variety of harmonic choices, but it’s often difficult to remember the difference between
                one and the other. A mode is like a scale: It is a collection of pitches which have a certain relationship between each other. Just like any major or minor scale, a mode has
               a Tonic (a point of rest) and a “Dominant” (a point of tension which needs resolution). I have put the word Dominant in quotations because in the case of modes, the dominant
               is not always found on the 5th degree — like in any major scale for example — but it is the degree(s) which contain the characteristic note (the note that gives a certain
               mode its peculiar sound) that functions as a dominant.
                </p>
                <br/>
                <p>
                As we can see, the scales which are used the most in the Western musical system (the ones commonly called Major and Minor scales) are the modes built on the first and sixth
                degrees of a Major scale.The fact that among all modes, these two were chosen as the pillars of our system, resulted from a predominance in the use of these two scales from
                 the Baroque Period onwards. To put it differently, the modes above share all the same notes, but since they start from a different degree of the major scale, each mode has
                 a slightly different construction, and feel to it. The differences between the modes and their respective Major or Minor counterparts is often only one note.
                </p>
              </div>
              <ModeTypeTabs/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModesCollapse;
