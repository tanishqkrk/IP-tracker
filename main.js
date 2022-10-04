const outerFunction = () => {
    let map = L.map('map');
    const mainFunction = e => {
        let ipAddress = document.querySelector('.header__input--input').value;
        let userIp = document.querySelector('.ip__value');
        let userLocation = document.querySelector('.location__value');
        let userTimezone = document.querySelector('.timezone__value');
        let userIsp = document.querySelector('.isp__value');
        const apiKey = 'at_Afae2z1wztB5f4gRmhht2iZPnyeG3';
        const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;
        console.log(URL);
        fetch(URL).then(response => response.json())
            .then(data => update(data))
        // .catch(data => clear(data))

        const clear = () => {
            ip.innerHTML = '-';
            location.innerHTML = '-'
            timezone.innerHTML = '-'
            isp.innerHTML = '-'
        }

        const update = (data) => {
            const updateMap = () => {
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
            }
            userIp.innerHTML = ipAddress;
            userLocation.innerHTML = data.location.city
            userTimezone.innerHTML = data.location.timezone
            userIsp.innerHTML = data.isp
            updateMap();
        }
    }
    if (document.querySelector('.header__input').value != '') {
        document.querySelector('.header__input--button').addEventListener('click', mainFunction)
    }
}

outerFunction()

