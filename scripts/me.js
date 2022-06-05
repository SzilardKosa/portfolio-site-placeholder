const meImg1 = document.getElementById('me-img1')
const meImg2 = document.getElementById('me-img2')
const me = document.getElementById('me')

me.addEventListener('mousedown', onPress)
me.addEventListener('mouseup', onRelease)
me.addEventListener('mouseleave', onRelease)

me.addEventListener('touchstart', onPress)
me.addEventListener('touchend', onRelease)
me.addEventListener('touchcancel', onRelease)

function onPress(event) {
  meImg1.src = 'assets/me1pressed.png'
  meImg2.src = 'assets/me2pressed.png'
  event.preventDefault()
}

function onRelease(event) {
  meImg1.src = 'assets/me1.png'
  meImg2.src = 'assets/me2.png'
  event.preventDefault()
}
