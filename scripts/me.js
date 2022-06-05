const meImg1 = document.getElementById('me-img1')
const meImg2 = document.getElementById('me-img2')
const me = document.getElementById('me')

me.addEventListener('mousedown', function () {
  meImg1.src = 'assets/me1pressed.png'
  meImg2.src = 'assets/me2pressed.png'
})
me.addEventListener('mouseup', function () {
  meImg1.src = 'assets/me1.png'
  meImg2.src = 'assets/me2.png'
})
