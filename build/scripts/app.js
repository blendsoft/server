import Dropzone from 'dropzone'
import { tryCreditals, adjustBorder } from './login'

const inputs = document.querySelectorAll('.login input')
const form = document.querySelector('.login form')

if (form) {
  form.addEventListener('submit', tryCreditals)
}

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keyup', adjustBorder)
}

const chest = document.querySelector('#chest')

if (chest) {
  const nav = chest.querySelector('nav')

  chest.querySelector('.toggle').addEventListener('click', function (event) {
    nav.classList.toggle('open')
    this.classList.toggle('on')

    event.preventDefault()
  })
}

if (document.body.classList.contains('media')) {
  const drop = new Dropzone(document.body, {
    clickable: '#title .add',
    url: '/admin/media/upload',
    previewsContainer: '#files',
    previewTemplate: document.getElementById('preview-template').innerHTML,
    thumbnailWidth: 360,
    thumbnailHeight: 360
  })

  const zone = document.querySelector('#drop-zone')

  drop.on('dragenter', function () {
    zone.classList.add('shown')
  })

  drop.on('drop', function () {
    zone.classList.remove('shown')
  })
}
