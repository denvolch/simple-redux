// export const createStore = (rootReducer, initialState) => {
//     let state = initialState
//     const subscribers = []

//     return {
//         dispatch: action => {
//             state = rootReducer(state, action)
//             subscribers.forEach( sub => sub() )
//         },
//         subscribe: observer => subscribers.push(observer),
//         getState: () => state,
//     }
// }
