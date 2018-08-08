let showtime = document.getElementById('show-projects')
let hidden = document.getElementById('more-projects')

showtime.addEventListener('click', function() {
  if (hidden.style.display === 'flex') {
    hidden.style.display = 'none'
    this.innerText = 'View More Projects'
  } else if (hidden.style.display !== 'flex') {
    hidden.style.display = 'flex'
    this.innerText = 'Hide Extra Projects'
  }
})

let aboutBtn = document.getElementById('about-btn')
let projectBtn = document.getElementById('project-btn')
let contactBtn = document.getElementById('contact-btn')

aboutBtn.addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

projectBtn.addEventListener('click', () => {
  document.getElementById('projects').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

contactBtn.addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})
