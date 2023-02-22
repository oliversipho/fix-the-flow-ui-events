// --------------------
// "Interaction Animation"
// ------------------------
let flipAnimation = document.querySelector('a:nth-of-type(10)')

flipAnimation.addEventListener('click' , flipAnimationHandler)
flipAnimation.addEventListener('animationend' , flipAnimationHandler)


function flipAnimationHandler () {
  flipAnimation.classList.toggle('flip')
}

// ================== //
// "Frontend Animation"
// =================

let strobeAnimation = document.querySelector('a:nth-of-type(1)')

strobeAnimation.addEventListener('click' , strobeAnimationHandler)
strobeAnimation.addEventListener('animationed' , strobeAnimationHandler)

function strobeAnimationHandler () {
  strobeAnimation.classList.toggle('strobe')
}

// =============
// "Design Animation"
// ==========

let fadingAnimation = document.querySelector('a:nth-of-type(2)')

fadingAnimation.addEventListener('click' , fadingAnimationHandler)
fadingAnimation.addEventListener('animationend' , fadingAnimationHandler)

function fadingAnimationHandler () {
  fadingAnimation.classList.toggle('fading')
}

// =========
// "& Animation"
// ==========

let AmpersandAnimation = document.querySelector('a:nth-of-type(3)')

AmpersandAnimation.addEventListener('dblclick', AmpersandAnimationHandler)

function AmpersandAnimationHandler () {
  AmpersandAnimation.classList.toggle('button3CssAnimatie')
}

// =======
// "Development Animation"
// ========
let blurAnimatoin = document.querySelector('a:nth-of-type(4)')

blurAnimatoin.addEventListener('mouseover', blurAnimatoinHandler)
blurAnimatoin.addEventListener('animationend', blurAnimatoinHandler)

function blurAnimatoinHandler () {
  blurAnimatoin.classList.toggle('blur')
}

// ====
// "Sprint 5 Animation" 
// ====



let rainbowAnimation = document.querySelector('a:nth-of-type(5)')

rainbowAnimation.addEventListener('click', rainbowAnimationHandler)
rainbowAnimation.addEventListener('animationend', rainbowAnimationHandler)

function rainbowAnimationHandler () {
  rainbowAnimation.classList.toggle('rainbow')
}

// ===
// "Fix animation"
// =====
let swingAnimation = document.querySelector('a:nth-of-type(6)')

swingAnimation.addEventListener('click', swingAnimationHandler)
swingAnimation.addEventListener('animationend', swingAnimationHandler)

function swingAnimationHandler () {
  swingAnimation.classList.toggle('swing')
}

// =====
// "The Animation"
// =====

let beating = document.querySelector('a:nth-of-type(7)')

beating.addEventListener('click' , beatingHandler)
beating.addEventListener('animationend', beatingHandler)


function beatingHandler() {
  beating.classList.toggle('increasing')
}  

//====
// "Flow animation"
// ===

let rotation = document.querySelector('a:nth-of-type(8)')

rotation.addEventListener('mouseover', rotateHandler)
rotation.addEventListener('animationend', rotateHandler)

function rotateHandler() {
  rotation.classList.toggle('rotate')
  
}


// ====
// "User Animation"
// -----

let backgroundChanger = document.querySelector('a:nth-of-type(9)')

backgroundChanger.addEventListener('click' , backgroundChangerHandler)
backgroundChanger.addEventListener('animationend' , backgroundChangerHandler)


function backgroundChangerHandler () {
  backgroundChanger.classList.toggle('changeBackGroud')
}


// =====
// "Interface Animation" 
// ======
let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
  
}
