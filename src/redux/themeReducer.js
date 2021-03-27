import { BUTTON_DISABLED, BUTTON_ENABLED, THEME_DARK } from "./actionCreators"

const defaultState = {
    value: 'light',
    disabled: false,
}

export default function themeReducer(state = defaultState, action) {
    switch (action.type) {
        case THEME_DARK:
            return { ...state, value: action.payload }
        case BUTTON_DISABLED:
            return { ...state,  disabled: !state.disabled }
        case BUTTON_ENABLED:
            return { ...state,  disabled: !state.disabled }
        default:
            return state
    }
}