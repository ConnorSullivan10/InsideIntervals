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
import './ModeTypeTabs.scss';

const ModeTypeTabs = (props) => {
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
            Major
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Minor
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Major Scale Modes</h4>
              <p>When the major scale starts from a different note, the order of these intervals changes and produces seven new scales, called 'modes'.
                 Each mode has its own distinctive mood. The best way to get a feel for each mode is to compare the different intervals that each
                 starting point produces. The Ionian mode is the same as the major scale and has the intervals: 1 2 3 4 5 6 7. All other modes and
                 their intervals are compared to it.
              </p>
              <p>Here The Seven Modes Of The Major Scale :</p>
              <ul>
                <li>Ionian Mode | Interval pattern is 1-2-3-4-5-6-7</li>
                <li>Dorian Mode | Interval pattern is 1-2-b3-4-5-6-b7</li>
                <li>Phrygian Mode | Interval pattern is 1-b2-b3-4-5-b6-b7</li>
                <li>Lydian Mode | Interval pattern is 1-2-3-#4-5-6-7</li>
                <li>Mixolydian Mode | Interval pattern is 1-2-3-4-5-6-b7</li>
                <li>Aeolian Mode | Interval pattern is 1-2-b3-4-5-b6-b7</li>
                <li>Locrian Mode | Interval pattern is 1-b2-b3-4-b5-b6-b7</li>
              </ul>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
        <Row>
            <Col sm="12">
              <h4 className="is-size-5">Melodic Minor Modes</h4>
              <p>Here The Seven Modes Of The Melodic Minor Scale :</p>
              <p>The melodic minor scale is one of the most useful scales in jazz.</p>
              <ul>
                <li>Melodic Minor Mode | Interval pattern is 1-2-b3-4-5-6-7</li>
                <li>Dorian b2/Phrygian #6 Mode | Interval pattern is 1-b2-b3-4-5-6-b7</li>
                <li>Lydian Augmented Mode | Interval pattern is 1-2-3-#4-#5-6-7</li>
                <li>Lydian Dominant (Overtone) Mode | Interval pattern is 1-2-3-#4-5-6-b7</li>
                <li>Mixolydian b6 Mode | Interval pattern is 1-2-3-4-5-b6-b7</li>
                <li>Aeolian b5/Locrian #2 Mode | Interval pattern is 1-2-b3-4-b5-b6-b7</li>
                <li>Altered (Super Locrian) Mode | Interval pattern is 1-b2-b3-b4-b5-b6-b7</li>
              </ul>
              <p></p>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ModeTypeTabs;
