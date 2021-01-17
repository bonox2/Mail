let messages = [...DATA]
const listEl = document.getElementById('list')
const allCountEl = document.getElementById('allCount')
const unreadCountEl = document.getElementById('unreadCount')
const refreshBtnEl = document.getElementById('refreshBtn')

const dateFormat = new Intl.DateTimeFormat(undefined)
const timeFormat = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
})
// console.dir(allCountEl);

refreshBtnEl.addEventListener('click', event => {
    messages = [...DATA]
    addMessages(listEl, messages)
})
listEl.addEventListener('click', event => {
    const messageEl = event.target.closest('.letter-section')
    if (messageEl) {
        let id = messageEl.dataset.id
        console.log('click', id);
    }
})

// function checkMessage(id) {
//     messages.find((message, i) => {

//         if () {//сделать прочитанным
            
//             //поменять seen
//             messages[i] = message//перезапись
//         } else if () {//удаление
//             messages.splice(i,1)
//         }


//     })
//     addMessages(listEl, messages)
// }

addMessages(listEl, messages)


function addMessages(elem, messages) {
    allCountEl.textContent = messages.length
    const unreadMessages = messages.filter(function (message) {
        if (message.seen == false) {
            return true
        } 
     })
    unreadCountEl.textContent = unreadMessages.length

    elem.innerHTML = ''

     messages.sort((a,b) => {
         return a.seen - b.seen || b.date - a.date
     })

    messages.forEach(message => {
        renderMessage(elem, message)
    });

}

function renderMessage(where, data) {
    const html =
        `<div class="letter-section ${data.seen ? 'seen' : 'not_seen'}" data-id="${data.id}">
            <div class="sender-info">
                <div class="senders-photo"><img width="50" height="50" loading="lazy" src="${data.avatar}" alt="${data.name}"></div>
                <div>
                    <div class="sender-name">${data.name}</div>
                    <div class="sender-number">${data.phone}</div>
                </div>
            </div>
            <div class="message-info"> ${data.text}</div>
            <div class="date-time">
                <div class="time">${timeFormat.format(data.date)}</div>
                <div class="time">${dateFormat.format(data.date)}</div>
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



console.log(1 || 'hello');



