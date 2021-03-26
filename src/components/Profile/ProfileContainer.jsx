import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile, getProfile, getStatus, updateStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
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
  }
}

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, { setUserProfile, getProfile, getStatus, updateStatus }),
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