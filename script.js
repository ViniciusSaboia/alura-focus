const html = document.querySelector('html')
const focotBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')

focotBt.addEventListener('click', () => (
    html.setAttribute('data-contexto', 'foco')
))

curtoBt.addEventListener('click', () => (
    html.setAttribute('data-contexto', 'descanso-curto')
))

longoBt.addEventListener('click', () => (
    html.setAttribute('data-contexto', 'descanso-longo')
))