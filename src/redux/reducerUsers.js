import { usersAPI } from './../api/api'

const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';
const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const SET_IN_FOLLOWING_PROCESS = 'SET_IN_FOLLOWING_PROCESS';

let initialState = {
  usersData: [
  ],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  idsInFollowingProcess: [2, 3],
}

const reducerUsers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, usersData: [...action.users] };

    case UPDATE_CURRENT_PAGE:
      return { ...state, currentPage: action.newCurrentPage };

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.usersCount };

    case TOGGLE_FETCHING:
      return { ...state, isFetching: action.isFetching }

    case SET_IN_FOLLOWING_PROCESS:
      return {
        ...state,
        idsInFollowingProcess: action.isFetching
          ? [...state.idsInFollowingProcess, action.userID]
          : state.idsInFollowingProcess.filter(id => id !== action.userID)
      }

    case FOLLOW_USER:
      return {
        ...state,
        usersData: state.usersData.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: true }
          }
          return u;
        })
      }

    case UNFOLLOW_USER:
      return {
        ...state,
        usersData: state.usersData.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: false }
          }
          return u;
        })
      }

    default:
      return state;
  }
}

export const followUser = (userID) => {
  return { type: FOLLOW_USER, userID }
}

export const unfollowUser = (userID) => {
  return { type: UNFOLLOW_USER, userID }
}

export const setUsers = (users) => {
  return { type: SET_USERS, users }
}

export const updateCurrentPage = (newCurrentPage) => {
  return { type: UPDATE_CURRENT_PAGE, newCurrentPage }
}

export const setTotalUsersCount = (usersCount) => {
  return { type: SET_TOTAL_USERS_COUNT, usersCount }
}

export const toggleFetching = (isFetching) => {
  return { type: TOGGLE_FETCHING, isFetching }
}

export const setInFollowingProcess = (isFetching, userID) => {
  return { type: SET_IN_FOLLOWING_PROCESS, isFetching, userID }
}

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleFetching(true));
  usersAPI.getUsers(currentPage, pageSize)
    .then(data => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(toggleFetching(false));
    });
}

export const followUserThunkCreator = (userID) => (dispatch) => {
  dispatch(setInFollowingProcess(true, userID));
  usersAPI.followUser(userID)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(followUser(userID));
      }
      dispatch(setInFollowingProcess(false, userID));
    });
}

export const unfollowUserThunkCreator = (userID) => (dispatch) => {
  dispatch(setInFollowingProcess(true, userID));
  usersAPI.unfollowUser(userID)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollowUser(userID));
      }
      dispatch(setInFollowingProcess(false, userID));
    });
}

export default reducerUsers;