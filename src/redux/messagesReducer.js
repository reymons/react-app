const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
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
}

const reducerMessages = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let lastID = state.dialogData[state.dialogData.length - 1].id;
      const newMessage = {
        id: ++lastID,
        avatar: 'https://kurer-sreda.ru/wp-content/uploads/2020/01/013-8.jpg',
        message: action.message
      }
      return {
        ...state,
        dialogData: [...state.dialogData, newMessage]
      }
    }

    default:
      return state;
  }
}

export const addMessage = (message) => ({ type: ADD_MESSAGE, message })

export default reducerMessages;