const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
let time = 0 
const timeEL = document.querySelector('#time')
const board = document.querySelector('#board')
let score = 0

startBtn.addEventListener('click', (event) => {
  event.preventDefault()
  //отменяет стандартное поведение
  screens[0].classList.add('up')

})

timeList.addEventListener('click', event => {
  if (event.target.classList.contains('time-btn')) {
  time = parseInt(event.target.getAttribute('data-time'))
  screens[1].classList.add('up')
  // console.log(time)
  startGame()
  }
})
board.addEventListener('click', event => {
  if(event.target.classList.contains('circle')) {
    score++
    event.target.remove()
    createRandomCircle()
  }
})

function startGame() {
  setInterval(deceaseTime, 1000)
  createRandomCircle()
  setTime(time)
}

function deceaseTime() {
  if (time === 0){
    finishGame()
  }else {
let current = --time
if (current < 10) {
  current = `0${current}`
}
setTime(current)
  }
}

function setTime(value) {
  timeEL.innerHTML = `00:${value}`
}

function finishGame() {
  timeEL.parentNode.remove()
 board.innerHTML = `<h1>счет: <span class="primary">${score}</span></h1>`

}

function createRandomCircle () {
  const circle = document.createElement('div')
  const size = getRandomNumber(10, 60)
  const {width, height} = board.getBoundingClientRect()
const x = getRandomNumber(0, width - size)
const y = getRandomNumber(0, height - size)

  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  board.append(circle)
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}