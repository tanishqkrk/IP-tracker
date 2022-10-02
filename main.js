const mainFunction = e => {
    // Selectors
    const ipAddress = document.querySelector('.header__input--input').value;
    const ip = document.querySelector('.ip__value');
    const location = document.querySelector('.location__value');
    const timezone = document.querySelector('.timezone__value');
    const isp = document.querySelector('.isp__value');

    const apiKey = 'at_ptq5iCtbeeu2pV1kxSlEAZ43nLKYS';
    const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;
    console.log(URL);
    fetch(URL).then(response => response.json())
        .then(data => update(data))
        .catch(data => clear(data))

    const clear = () => {
        ip.innerHTML = '-';
        location.innerHTML = '-'
        timezone.innerHTML = '-'
        isp.innerHTML = '-'
    }

    const update = (data) => {
        console.log(data)
        const map = L.map('map');
        let x = data.location.lat;
        let y = data.location.lng;
        let z = 8;
        map.setView([x, y], z);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map)
        L.marker([x, y]).addTo(map)
            .bindPopup(ipAddress)
            .openPopup();

        ip.innerHTML = ipAddress;
        location.innerHTML = data.location.city
        timezone.innerHTML = data.location.timezone
        isp.innerHTML = data.isp
    }
}


if (document.querySelector('.header__input').value != '') {
    document.querySelector('.header__input--button').addEventListener('click', mainFunction)
}