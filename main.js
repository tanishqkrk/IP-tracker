const apiKey = 'at_Afae2z1wztB5f4gRmhht2iZPnyeG3';
const currentIp = document.querySelector('.ip__value');
const currentLocation = document.querySelector('.location__value');
const currentTimeZone = document.querySelector('.timezone__value');
const currentIsp = document.querySelector('.isp__value');
let map = new L.map('map');
let x = 0;
let y = 0;
let z = 1;
const marker = L.marker([x, y], z);
const enteredIp = document.querySelector('.header__input--input');
const submitButton = document.querySelector('.header__input--button');

map.setView([x, y], z);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

submitButton.addEventListener('click', e => {
    marker.addTo(map).bindPopup(`${enteredIp.value}<br>${currentLocation.innerText}`);
})