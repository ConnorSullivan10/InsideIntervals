import React, { useState } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  // Card,
  // Button,
  // CardTitle,
  // CardText,
  Row,
  Col,
} from 'reactstrap';
import classnames from 'classnames';
import './ChordTypeTabs.scss';

const ChordTypeTabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Triads
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Sevenths
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Triads</h4>
              <p>A triad is a chord made of three notes. It consists of a root and the third and fifth above it. The most common triads are:</p>
              <ul>
                <li>Major Triad | Interval pattern is 1-3-5</li>
                <li>Minor Triad | Interval pattern is 1-b3-5</li>
                <li>Diminished Triad | Interval pattern is 1-b3-bb5</li>
                <li>Augmented Triad | Interval pattern is 1-3-#5</li>
              </ul>
              <p>Since 5ths are perfect intervals, and there's no such thing as a major or minor 5th, we call a flatted 5th: Diminished, which is 1 fret before a perfect 5th.
                Augmented intervals in opposition are typically 1 semitone sharper than the perfect interval, meaning an Augmented 5th would be 1 fret higher than a regular 5th.
              </p>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
        <Row>
            <Col sm="12">
              <h4>Seventh Chords</h4>
              <p>These chords are triads with a supplementary diatonic third superposed. The most common seventh chords are:</p>
              <ul>
                <li>Major 7 | Interval pattern is 1-3-5-7</li>
                <li>7th aka Dominant 7 | Interval pattern is 1-3-5-b7</li>
                <li>Minor 7 | Interval pattern is 1-b3-5-b7</li>
                <li>Diminished 7 | Interval pattern is 1-b3-b5-bb7</li>
                <li>Augmented 7 | Interval pattern is 1-3-#5-b7</li>
              </ul>
              <p>* A diminished 7th is 1 fret before a minor 7th, or can be seen as 1 fret after a major 6th.</p>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ChordTypeTabs;
