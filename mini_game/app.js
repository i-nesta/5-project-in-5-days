const board = document.querySelector('#board')
const colors = ['#890d94', '#7481f7', '#3bf541', '#d63aaa', '#fcf649', '#ff9c2b', '#f0411a', '#fff']
 const SQARES_NUMBER = 1008

 for (let i = 0; i < SQARES_NUMBER; i++) {
  //динамически создавать элемент
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () =>
  setColor(square) 
  )
// тут события мышки
  square.addEventListener('mouseleave', () =>
  removeColor(square) 
  )

  board.append(square)

  function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    //обратные кавычки позволяют передавать вычисляемые значения
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
  }

  function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
  }

  function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
  }
 }

 