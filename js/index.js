const body = document.querySelector('body');
const colorModeButton = document.querySelector('.color-mode')

colorModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode')
})