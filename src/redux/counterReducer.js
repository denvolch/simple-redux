import { DECREMENT, INCREMENT, ASYNC_INCREMENT } from "./actionCreators"

export default function counterReducer(state = { count: 0 }, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 }
        case DECREMENT:
            return { ...state, count: state.count - 1 }
        case ASYNC_INCREMENT:
            return { ...state, count: state.count + 1 }
        default:
            return state
    }
}