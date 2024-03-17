const uppButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container')
const slidesCount = mainSlide.querySelectorAll('div').length

let activesSlideIndex = 0;


sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

uppButton.addEventListener('click', () => {
  changeSlide('up')
})

downButton.addEventListener('click', () => {
  changeSlide('down')
})

function changeSlide(direction) {
  if (direction === 'up') {
    activesSlideIndex++
    if (activesSlideIndex === slidesCount) {
      activesSlideIndex = 0
    }
  } else if (direction === 'down') {
    activesSlideIndex--
    if (activesSlideIndex < 0) {
      activesSlideIndex = slidesCount - 1
    }
    
  }

  const heigth = container.clientHeight
 

  mainSlide.style.transform = `translateY(-${activesSlideIndex * heigth}px)`

  sidebar.style.transform = `translateY(${activesSlideIndex * heigth}px)`

}
