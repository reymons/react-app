import { connect } from 'react-redux';
import {
  updateCurrentPage,
  getUsersThunkCreator,
  followUserThunkCreator,
  unfollowUserThunkCreator
} from '../../redux/reducerUsers';
import Users from './Users';
import React from 'react';
import Preloader from './../common/Preloader/Preloader';
import { compose } from 'redux';
import {
  getPageSize, getUsers,
  getTotalUsersCount, getCurrentPage,
  getIdsInFollowingProcess
} from '../../redux/usersSelector';


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  render() {
    return (
      <>
        { this.props.isFetching
          ? <Preloader />
          : <Users {...this.props} onPageChanged={this.onPageChanged.bind(this)} />}
      </>
    );
  }

  onPageChanged(pageNumber) {
    this.props.updateCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    idsInFollowingProcess: getIdsInFollowingProcess(state),
  }
}



export default compose(
  connect(mapStateToProps, {
    updateCurrentPage, getUsers: getUsersThunkCreator,
    followUser: followUserThunkCreator, unfollowUser: unfollowUserThunkCreator
  })
)(UsersContainer);
