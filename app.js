let showtime = document.getElementById('show-projects')
let hidden = document.getElementById('more-projects')

showtime.addEventListener('click', function() {
  if (hidden.style.display === 'flex') {
    hidden.style.display = 'none'
    this.innerText = 'View More Projects'
  } else if (hidden.style.display !== 'flex') {
    hidden.style.display = 'flex'
    this.innerText = 'Hide Projects'
  }
})
