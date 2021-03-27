export const INCREMENT = 'INCREMENT',
             DECREMENT = 'DECREMENT',
             ASYNC_INCREMENT = 'ASYNC_INCREMENT',
             THEME_DARK = 'THEME_DARK',
             BUTTON_DISABLED = 'BUTTON_DISABLED',
             BUTTON_ENABLED = 'BUTTON_ENABLED'

export const incrementCounter = () => ({
    type: INCREMENT
})

export const decrementCounter = () => ({
    type: DECREMENT
})

export const incrementCounterAsync = () => async dispatch => {
    dispatch( disableButtons() )

    await setTimeout( () => {
        dispatch({ type: ASYNC_INCREMENT })
        dispatch( enableButtons() )
    }, 2000)
}

export const toogleTheme = newTheme => ({
    type: THEME_DARK,
    payload: newTheme
})

export const enableButtons = () => ({
    type: BUTTON_ENABLED
})

export const disableButtons = () => ({
    type: BUTTON_DISABLED
})