import { profileAPI } from "../api/api";

const ADD_COMMENT = 'ADD-COMMENT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = "SET_USER_STATUS";

const initialState = {
  commentData: [
    {
      avatar: 'https://w-dog.ru/wallpapers/6/1/318392262078439/art-ryuuka-nagare-koshka-morda-pryachetsya-pokryvalo.jpg',
      text: 'Очень классный сайт! Мне всё нравится!!! (Пошутил)',
      nickname: 'Katze001',
      likeCount: 555
    },
    {
      avatar: 'https://cdn5.imgbb.ru/adm2/21/217475/user/users/201907/9252e7c0f73886ca23dc871644cb7f90.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nam, a velit sit officiis molestiae fugit eum quas incidunt beatae laborum esse sapiente, minus reiciendis.',
      nickname: 'SomeGirl',
      likeCount: 1488
    },
    {
      avatar: 'https://i.ytimg.com/vi/edwMzogFpiQ/maxresdefault.jpg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptate.',
      nickname: 'Navalny',
      likeCount: 41
    },
  ],
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      const newComment = {
        avatar: 'https://i.ytimg.com/vi/edwMzogFpiQ/maxresdefault.jpg',
        text: action.comment,
        nickname: 'FriedChicken',
        likeCount: 0
      };
      return {
        ...state,
        commentData: [...state.commentData, newComment],
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_USER_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
}

export const addComment = (comment) => ({ type: ADD_COMMENT, comment })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setStatus = (status) => ({ type: SET_USER_STATUS, status })

export const getProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId)
    .then(data => dispatch(setUserProfile(data)));
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(status => dispatch(setStatus(status)));
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    })
}

export default profileReducer;