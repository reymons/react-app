import reducerMessages from "./reducerMessages";
import reducerProfile from "./reducerProfile";

let store = {
  _state: {
    messages: {
      contactData: [
        { id: '1', name: 'Данил Сечин' },
        { id: '2', name: 'Денис Багутский' },
        { id: '3', name: 'Виктория Дымова' },
        { id: '4', name: 'Роман Яремко' },
        { id: '5', name: 'Алина Волкоморова' },
        { id: '6', name: 'Влад Савицкий' },
        { id: '7', name: 'Егор Плужник' },
      ],
      dialogData: [
        { 
          id: 1, 
          avatar: 'https://kurer-sreda.ru/wp-content/uploads/2020/01/013-8.jpg',
          message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, saepe!'
        },
        { 
          id: 2, 
          avatar: 'https://vmnews.ru/img/news/6f/955f1758266f.jpg',
          message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ratione unde, qui ipsum amet inventore.'
        }
      ],
      currentMessageInput: '',
    },
    profile: {
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
      currentCommentInput: '',
    }
  },
  getState() {
    return this._state;
  },
  _callSubsriber() { },

  subscribe(observer) {
    this._callSubsriber = observer;
  },
  
  async dispatch(action) {
    new Promise((resolve) => {
      this._state.profile = reducerProfile(this._state.profile, action);
      resolve();
    }).then(() => this._callSubsriber());
    new Promise((resolve) => {
      this._state.messages = reducerMessages(this._state.messages, action);
      resolve();
    }).then(() => this._callSubsriber());
  },
}

export default store;