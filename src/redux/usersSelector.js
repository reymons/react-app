import { createSelector } from "reselect";

export const getPageSize = (state) => state.usersPage.pageSize;

export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;

export const getCurrentPage = (state) => state.usersPage.currentPage;

export const getIdsInFollowingProcess = (state) => state.usersPage.idsInFollowingProcess;

export const getUsers = createSelector(
  (state) => state.usersPage.usersData, 
  (usersData) => usersData,
);

// MY RESELECTOR ( I HOPE IT WORKS FINE :o )
//
// const state = {
//   usersPage: {
//     usersData: [
//       {
//         id: 1,
//         name: "John"
//       },
//       {
//         id: 2,
//         name: "Peter"
//       },
//       {
//         id: 3,
//         name: "Jason"
//       },
//     ]
//   }
// }
//
// function generateSelector(selector, reselector) {
//   let prevData;
//   return function(state) {
//     let currentData = selector(state);
//     if (currentData !== prevData) {
//       let newData = reselector(currentData);
//       prevData = newData;
//       console.log("Rerender");
//       return newData;
//     }
//     console.log("The same");
//     return prevData;
//   }
// }

// export const getUsersTest = generateSelector(getUsers, (users) => users.filter(u => u.id !== 1));

// window.state = state;

// setInterval(() => {
//   state.usersPage.usersData = getUsersTest(state);
// }, 2000);