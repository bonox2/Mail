const html = `<article class="card">
    <div class="card-img-wrap" >
        <div class="card-status-wrap">
            ${data.top ? `<div class="card-status top">TOP</div>` : ''}
            ${data.vip ? `<div class="card-status vip">VIP</div>` : ''}
        </div>
        <img loading="lazy" src="${data.img}" alt="${data.make} ${data.model} ${data.year}" class="card-img">
    </div>
    <div class="card-content">
        <header class="card-header">
            <h4 class="card-title">${data.make} ${data.model} ${data.year}</h4>
            <div class="card-header-chars">
                <h5 class="card-price">${currFormat.format(data.price * UAH_USD)}</h5>
                <div class="card-color">${data.color}</div>
                <div class="card-location">${data.country}</div>
            </div>
        </header>
        <div class="card-rating">${rating} ${data.rating}</div>
        <dl class="card-chars">
            <div>
                <dt>&#127778; Fuel type:</dt>
                <dd>${data.fuel}</dd>
            </div>
            <div>
                <dt>Engine volume:</dt>
                <dd>${data.engine_volume} L</dd>
            </div>
            <div>
                <dt>Transmossion type:</dt>
                <dd>${data.transmission}</dd>
            </div>
            <div>
                <dt>ODO (km):</dt>
                <dd>${data.odo}</dd>
            </div>
        </dl>
        <dl class="card-consume">
            <div>
                <dt>Road:</dt>
                <dd>${data.consume.road} L/100km</dd>
            </div>
            <div>
                <dt>City:</dt>
                <dd>${data.consume.city} L/100km</dd>
            </div>
            <div>
                <dt>Mixed:</dt>
                <dd>${data.consume.mixed} L/100km</dd>
            </div>
        </dl>
        ${data.vin ? `<div class="card-vin">${data.vin}</div>` : ''}
        <p class="card-text"></p>
        <a href="tel:${data.phone}" class="card-seller">&#128222; ${data.seller}, (${data.phone})</a>
        <footer class="card-footer">
            <small class="card-time">&#9201; ${dateFormat.format(data.timestamp)}</small>
            <small class="card-views">&#128065; ${data.views}</small>
        </footer>
    </div>
</article>`

    where.insertAdjacentHTML('beforeEnd', html)

// {
//     "id": 1,
//     "phone": "+63 (924) 979-2252",
//     "name": "Guss Marvelley",
//     "message": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
//     "avatar": "https://robohash.org/repellendusimpeditnisi.png?size=50x50&set=set1",
//     "date": "1609595510000",
//     "seen": false
//   },







