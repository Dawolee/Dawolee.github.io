let showtime = document.getElementById('show-projects')
let hidden = document.getElementById('more-projects')

showtime.addEventListener('click', function() {
  if (hidden.style.display === 'block') {
    hidden.style.display = 'none'
    showtime.classList.remove('u-margin-bottom-big')
    this.innerText = 'View More Projects'
  } else if (hidden.style.display !== 'block') {
    hidden.style.display = 'block'
    showtime.classList.add('u-margin-bottom-big')
    this.innerText = 'Hide Extra Projects'
  }
})

let homeBtn = document.getElementById('home-btn')
let aboutBtn = document.getElementById('about-btn')
let techStackBtn = document.getElementById('tech-btn')
let projectsBtn = document.getElementById('projects-btn')
let contactBtn = document.getElementById('contact-btn')

homeBtn.addEventListener('click', () => {
  document.getElementById('header-section').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

aboutBtn.addEventListener('click', () => {
  document.getElementById('about-section').scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  })
})

techStackBtn.addEventListener('click', () => {
  document.getElementById('tech-stack-section').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

projectsBtn.addEventListener('click', () => {
  document.getElementById('projects-section').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

contactBtn.addEventListener('click', () => {
  document.getElementById('contact-section').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})
