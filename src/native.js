import './styles.css'

const counter = document.getElementById('counter'),
      addButton = document.getElementById('add'),
      subButton = document.getElementById('sub'),
      setTimerButton = document.getElementById('async'),
      buttonThemeToggle = document.getElementById('theme')

let state = 0

const render = () => counter.textContent = state.toString()

addButton.addEventListener('click', () => {
    state++
    render()
})

subButton.addEventListener('click', () => {
    if ( state < 1 ) return
    state--
    render()
})

setTimerButton.addEventListener('click', () => {
    setTimeout(() => {
        state++
        render()
    }, 2000)
})

buttonThemeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})