const superSlowTypingDelay = 800
const slowTypingDelay = 400
const mediumTypingDelay = 200
const fastTypingDelay = 100

const normalDeletingDelay = 100
const fastDeletingDelay = 50

const typoEndDelay = 500
const typoRestartDelay = 400

const startPauseDelay = 1000
const endPauseDelay = 2500

const cursorElement = '<span aria-hidden="true"></span>'

function randomDelay(milliseconds) {
  const randomDelay = milliseconds - Math.random() * (milliseconds / 2)
  return new Promise((resolve) => {
    setTimeout(resolve, randomDelay)
  })
}

function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds)
  })
}

function getText(element) {
  return element.innerHTML.slice(0, -cursorElement.length)
}

function setText(element, text) {
  element.innerHTML = text + cursorElement
}

async function typeText(element, text, typingDelay = mediumTypingDelay) {
  for (let i = 0; i < text.length; i++) {
    await randomDelay(typingDelay)
    const char = text[i]
    const currentText = getText(element)
    setText(element, currentText + char)
  }
}

async function deleteChars(element, amount, deletingDelay = normalDeletingDelay) {
  for (let i = 0; i < amount; i++) {
    await randomDelay(deletingDelay)
    const currentText = getText(element)
    setText(element, currentText.slice(0, -1))
  }
}

async function deleteAll(element, deletingDelay = normalDeletingDelay) {
  const length = getText(element).length
  for (let i = 0; i < length; i++) {
    await randomDelay(deletingDelay)
    const currentText = getText(element)
    setText(element, currentText.slice(0, -1))
  }
}

async function typo(element, text) {
  await typeText(element, text)
  await delay(typoEndDelay)
  await deleteChars(element, text.length)
  await delay(typoRestartDelay)
}

async function helloWorldScenario(element) {
  await delay(startPauseDelay)
  await typeText(element, 'Helo')
  await deleteChars(element, 2)
  await typeText(element, 'llo world!')
  await delay(endPauseDelay)
  await deleteAll(element)
}

async function introductionScenario(element) {
  // Welcome to my site!
  await delay(startPauseDelay)
  await typeText(element, 'Welcome to my site!')
  await delay(endPauseDelay)
  await deleteAll(element)

  // My name is Szilárd Kósa.
  await delay(startPauseDelay)
  await typeText(element, 'My name is Szilárd Kósa.')
  await delay(endPauseDelay)
  await deleteAll(element)

  // I'm a web developer.
  await delay(startPauseDelay)
  await typeText(element, "I'm a web developer.")
  await delay(endPauseDelay)
  await deleteAll(element)

  // This will be my portfolio site.
  await delay(startPauseDelay)
  await typeText(element, 'This will be my portfolio site.')
  await delay(endPauseDelay)
  await deleteAll(element)

  // When I will have time to finish it...
  await delay(startPauseDelay)
  await typeText(element, 'When I will have time to finish it')
  await typeText(element, '...', superSlowTypingDelay)
  await delay(endPauseDelay)
  await deleteAll(element)

  // But for now, it's just...
  await delay(startPauseDelay)
  await typeText(element, "But for now, it's just")
  await typeText(element, '...', slowTypingDelay)
  await delay(endPauseDelay)
  await deleteAll(element)

  // ...my space.
  await delay(startPauseDelay)
  await typeText(element, '...my space.', slowTypingDelay)
  await delay(endPauseDelay)
  await deleteAll(element)

  // Get it?
  await delay(startPauseDelay)
  await typeText(element, 'Get it?', fastTypingDelay)
  await delay(endPauseDelay)
  await deleteAll(element)

  // It's a pun.
  await delay(startPauseDelay)
  await typeText(element, "It's a pun.")
  await delay(endPauseDelay)
  await deleteAll(element)

  // .....
  await delay(startPauseDelay)
  await typeText(element, '.....', slowTypingDelay)
  await delay(endPauseDelay)
  await deleteAll(element)

  // Because the background looks just like Space and because this site is still lacking content meaning it has a lot of empty space.
  await delay(startPauseDelay)
  await typeText(
    element,
    'Because the background looks just like Space and because this site is still lacking content meaning it has a lot of empty space.',
    fastTypingDelay
  )
  await delay(endPauseDelay * 2)
  await deleteAll(element, fastDeletingDelay)

  // Anyway.
  await delay(startPauseDelay)
  await typeText(element, 'Anyway.')
  await delay(endPauseDelay)
  await deleteAll(element)

  // I'm sure you got it.
  await delay(startPauseDelay)
  await typeText(element, "I'm sure you got it.")
  await delay(endPauseDelay)
  await deleteAll(element)

  // Okay, that's all.
  await delay(startPauseDelay)
  await typeText(element, "Okay, that's all.")
  await delay(endPauseDelay)
  await deleteAll(element)

  // Thanks for giving a visit!
  await delay(startPauseDelay)
  await typeText(element, 'Thanks for giving a visit!')
  await delay(endPauseDelay)
  await deleteAll(element)

  // Welcome to my site!
  await delay(startPauseDelay)
  await typeText(element, 'Welcome to my site!')
  await delay(endPauseDelay)
  await deleteAll(element)

  // Gotcha!! You thought the text will loop, huh?
  await delay(startPauseDelay)
  await typeText(element, 'Gotcha!! You thought the text will loop, huh?', fastTypingDelay)
  await delay(endPauseDelay * 1.5)
  await deleteAll(element)

  // Well it won't!
  await delay(startPauseDelay)
  await typeText(element, "Well it won't!")
  await delay(endPauseDelay)
  await deleteAll(element)

  // Or will it?
  await delay(startPauseDelay)
  await typeText(element, 'Or will it?')
  await delay(endPauseDelay)
  await deleteAll(element)

  // Welcome to my site!
  await delay(startPauseDelay)
  await typeText(element, 'Welcome to my site!')
  await delay(endPauseDelay)
  await deleteAll(element)

  // NO IT WON'T, I'M NOT DONE YET!
  await delay(startPauseDelay)
  await typeText(element, "NO IT WON'T, I'M NOT DONE YET!", fastTypingDelay)
  await delay(endPauseDelay * 1.5)
  await deleteAll(element)

  // MUHAHAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAHAHA
  await delay(startPauseDelay)
  await typeText(element, 'MUHAHAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAHAHA', fastTypingDelay)
  await delay(endPauseDelay)
  await deleteAll(element)

  // Alright.
  await delay(startPauseDelay)
  await typeText(element, 'Alright.')
  await delay(endPauseDelay)
  await deleteAll(element)

  // I'm done now.
  await delay(startPauseDelay)
  await typeText(element, "I'm done now.")
  await delay(endPauseDelay)
  await deleteAll(element)

  // Everything good must come to an end.
  await delay(startPauseDelay)
  await typeText(element, 'Everything good must come to an end.')
  await delay(endPauseDelay)
  await deleteAll(element)

  // I know you will miss me...
  await delay(startPauseDelay)
  await typeText(element, 'I know you will miss me...')
  await delay(endPauseDelay)
  await deleteAll(element)

  // ...I will miss you too.
  await delay(startPauseDelay)
  await typeText(element, '...I will miss you too.')
  await delay(endPauseDelay)
  await deleteAll(element)

  // But hey, I will be here when you need me.
  await delay(startPauseDelay)
  await typeText(element, 'But hey, I will be here when you need me.')
  await delay(endPauseDelay)
  await deleteAll(element)

  // You can revisit this site whenever you want.
  await delay(startPauseDelay)
  await typeText(element, 'You can revisit this site whenever you want.')
  await delay(endPauseDelay)
  await deleteAll(element)

  // Although this text will be gone probably, when the site finishes...
  await delay(startPauseDelay)
  await typeText(element, 'Although this text will be gone probably, when the site finishes')
  await typeText(element, '...', slowTypingDelay)
  await delay(endPauseDelay)
  await deleteAll(element)

  // ...but till then...
  await delay(startPauseDelay)
  await typeText(element, '...but till then...', slowTypingDelay)
  await delay(endPauseDelay)
  await deleteAll(element)

  // ...I will be here. :)
  await delay(startPauseDelay)
  await typeText(element, '...I will be here.', slowTypingDelay)
  await delay(startPauseDelay)
  await typeText(element, ' :)', superSlowTypingDelay)
  await delay(endPauseDelay * 2)
  await deleteAll(element)
}

async function start() {
  const typewriterContentElement = document.getElementById('typewriter-content')
  while (true) {
    await introductionScenario(typewriterContentElement)
  }
}

start()
  .then('success')
  .catch((e) => console.error(e))
