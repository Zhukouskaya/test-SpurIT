/* Я комментарий, который ждал тебя здесь. Удали меня и напиши хороший код! */

const button = document.querySelector('.collapsible__button')
const btns = document.querySelectorAll('.collapsible__action')
const content = document.querySelector('.collapsible__content') 
const btnTextVisible = document.querySelector('.collapsible__action--visible')
const btnTextHidden = document.querySelector('.collapsible__action--hidden')
content.style.visibility = 'hidden'
btnTextVisible.style.display = 'none'

const keyframesVisible = [
  {transform: 'translateY(-125%)', opacity: 0},
  {transform: 'translateY(15%)',  opacity: 1}
]

const keyframesHidden = [
  {transform: 'translateY(20%)', opacity: 1},
  {transform: 'translateY(-125%)', opacity: 0}
]

const properties = {
  duration: 1000,
  iteration: 1,
  easing: 'ease-in-out'
}

function addClassActive () {
  button.classList.add('active-btn')
}

function removeClassActive () {
  button.classList.remove('active-btn')
}

function visibleCillapsibe () {
  content.style.visibility = 'visible'
  content.animate(keyframesVisible, properties)
}

function hiddenCillapsibe () {
  content.animate(keyframesHidden, properties)
  setTimeout(()=> {
    content.style.visibility = 'hidden'
  }, 1000);
}

function visibleTextBtn () {
  btnTextVisible.style.display = 'block'
  btnTextHidden.style.display = 'none'
}

function hiddenTextBtn () {
  setTimeout(()=> {
    btnTextHidden.style.display = 'block'
    btnTextVisible.style.display = 'none'
  }, 1000);
}

btns.forEach(btn => {
  btn.addEventListener('click', ()=> {
  if (btn.classList.contains('collapsible__action--visible') && button.classList.contains('active-btn')) {
      removeClassActive ()
      hiddenCillapsibe ()
      hiddenTextBtn()
    } else if (btn.classList.contains('collapsible__action--hidden') && button.classList.contains('active-btn') === false) {
      addClassActive ()
      visibleCillapsibe ()
      visibleTextBtn ()
    }
  })
})


