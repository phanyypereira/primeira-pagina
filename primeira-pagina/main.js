import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Versionando minha aplicação web</h1>
    <img src="https://imgnike-a.akamaihd.net/branding/cdp_corinthians_camisa_3/assets/img/carrossel-detalhes-camisa/img_a.jpg" />
  </div>
`

setupCounter(document.querySelector('#counter'))
