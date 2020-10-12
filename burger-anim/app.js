// Get Everything
const icon = document.querySelector('.icon')
const dropdown = document.querySelector('.dropdown')
const body = document.querySelector('body')


icon.addEventListener('click', () => {
    dropdown.classList.toggle('visible')
})