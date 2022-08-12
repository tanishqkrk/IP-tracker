let map = L.map('map').setView([0, 0], 0);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

let marker = L.marker([0, 0], 0).addTo(map);

function update(e) {
  document.querySelector('.ip__value').innerHTML = document.querySelector('.header__input--input').value

}

let submit = document.querySelector('.header__input--button');
submit.addEventListener('click', update)