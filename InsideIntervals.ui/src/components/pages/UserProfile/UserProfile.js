import React from 'react';
import UserFileUpload from '../../shared/UserFileUpload/UserFileUpload';
import UserSongIdeas from '../../shared/UserSongIdeas/UserSongIdeas';
// import IntervalTranslator from '../../shared/IntervalsSubcomponents/IntervalTranslator/IntervalTranslator';
import './UserProfile.scss';

class UserProfile extends React.Component {
  render() {
    const { firebaseUid } = this.props;
    return (
      <div id="UserProfile">
        <UserFileUpload firebaseUid={firebaseUid}/>
        <UserSongIdeas id="userSongIdeas"/>
        {/* <IntervalTranslator/> */}
      </div>
    );
  }
}

export default UserProfile;
