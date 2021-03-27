import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import { decrementCounter, incrementCounter, 
         incrementCounterAsync, toogleTheme } from './redux/actionCreators'
import rootReducer from './redux/rootReducer'

import './styles.css'

const counter = document.getElementById('counter'),
      addButton = document.getElementById('add'),
      subButton = document.getElementById('sub'),
      setTimerButton = document.getElementById('async'),
      buttonThemeToggle = document.getElementById('theme')

const store = createStore( 
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk, logger),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    )
)

counter.textContent = store.getState().counter.count

addButton.addEventListener('click', () => {
    store.dispatch( incrementCounter() ) 
})

subButton.addEventListener('click', () => {
    if (store.getState().counter.count < 1) return
    store.dispatch( decrementCounter() )
})

setTimerButton.addEventListener('click', () => {
    store.dispatch( incrementCounterAsync() )
})

buttonThemeToggle.addEventListener('click', () => {
    const newTheme = document.body.classList
        .contains('dark') ? 'light' : 'dark'
    store.dispatch( toogleTheme(newTheme) )
})

store.subscribe( () => {
    const state = store.getState()
    counter.textContent = state.counter.count
    document.body.classList = state.theme.value

    document.querySelectorAll('button').forEach( 
        elem => elem.disabled = state.theme.disabled
    )
})


// const logger = state => next => action => {
//     console.log(state)
//     console.log(next)
//     console.log(action)
//     next(action)
// }