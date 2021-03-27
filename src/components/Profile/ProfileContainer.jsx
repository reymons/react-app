import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { updateStatus, getStatus, getProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Preloader from '../common/Preloader/Preloader';
import { isProfileInitialized } from '../../redux/profileSelectors';
// import withConnect from '../../hoc/withConnect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userID;
    if (!userId) {
      userId = this.props.authorizedId;
    }

    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return <Profile {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    authorizedId: state.auth.userId,
    status: state.profilePage.status,
    initialized: isProfileInitialized(state)
  }
}

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, { updateStatus, getStatus, getProfile }),
)(ProfileContainer);

// MY CONNECT (UNSUCCEEDED)

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setUserProfile: () => dispatch(setUserProfile()),
//     getProfile: () => dispatch(getProfile()),
//     getStatus: () => dispatch(getStatus()),
//     updateStatus: () => dispatch(setUserProfile()),
//   }
// }

// export default compose(
//   withAuthRedirect,
//   withRouter,
//   withConnect(mapStateToProps, mapDispatchToProps)
// )(ProfileContainer);