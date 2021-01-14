const messages = MESSAGES
const list = document.getElementById('list')




renderCard(list, {
        "id": 1,
        "phone": "+63 (924) 979-2252",
        "name": "Guss Marvelley",
        "text": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "avatar": "https://robohash.org/repellendusimpeditnisi.png?size=50x50&set=set1",
        "date": "1609595510000",
        "seen": false
      })


      addCards(list, messages)
function addCards(elem, messages) {

    for (let i = 0; i < messages.length; i++) {
        const mail = messages[i];
        renderCard(elem,mail)
    }
    
}

function renderCard(where, data) {
    const html =
        `<div class="letters-main">
        <div class="letter-section">
            <div class="sender-info">
                <div class="senders-photo"><img src="${data.avatar}" alt=""></div>
                <div>
                    <div class="sender-name">${data.name}</div>
                    <div class="sender-number">${data.phone}</div>
                </div>
            </div>
            <div class="message-info"> ${data.text}</div>
            <div class="date-time">
                <div class="time">${data.date}</div>
            </div>
        </div>
    </div>`

    where.insertAdjacentHTML('beforeEnd', html)
}
// {
//     // "id": 1,
//     // "phone": "+63 (924) 979-2252",
//     // "name": "Guss Marvelley",
//     // "message": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
//     // "avatar": "https://robohash.org/repellendusimpeditnisi.png?size=50x50&set=set1",
//     // "date": "1609595510000",
//     // "seen": false
//   },







