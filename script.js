const ratingCard = document.querySelector('.card__rating')
const thanksCard = document.querySelector('.thanks__rating')
const ratingValor = document.querySelectorAll(".valor__number")
const ratingBtn = document.querySelector('.rating__btn')
const yourRating = document.querySelector('.your-rate')

let rating = 0

ratingValor.forEach(el => {
  el.addEventListener("click", event => {
    event.preventDefault()
    rating = event.target.innerText
  })
})

ratingBtn.addEventListener("click", event => {
  event.preventDefault()
  yourRating.innerText = rating
  thanksCard.classList.remove("visually-hidden")
  ratingCard.classList.add("visually-hidden")
})

addEventListener("keydown", event => {
  event.preventDefault()
  if(event.key === 'Backspace') {
    yourRating.innerText = rating
    thanksCard.classList.add("visually-hidden")
    ratingCard.classList.remove("visually-hidden")
  }
})
