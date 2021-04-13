let messages = [...DATA]//
const listEl = document.getElementById('list')//
const allCountEl = document.getElementById('allCount')
const unreadCountEl = document.getElementById('unreadCount')
const refreshBtnEl = document.getElementById('refreshBtn')
const searchFormEl = document.getElementById('searchForm')


const dateFormat = new Intl.DateTimeFormat(undefined)//
const timeFormat = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
})
// console.dir(allCountEl);



addMessages(listEl, messages)//






refreshBtnEl.addEventListener('click', event => {//
    messages = [...DATA]
    addMessages(listEl, messages)
})
listEl.addEventListener('click', event => { //добавляем на елемент наблюдатель и функцыю по клику наблюдатель будет говорить где произошел клик
    const messageEl = event.target.closest('.letter-section')//происходит клик на ближайший родительский елемент 
    if (messageEl) {//локальная константа
        let id = messageEl.dataset.id //переменная id = dtaset.id
        console.log('click', id);
        checkMessage(id)
    }
})
function checkMessage(id) {//название функции
    messages.forEach((message, i) => {//в масиве меседжес вызиваем функцыю для каждого елемента
        if (message.id == id) {//если id = ??????????
            if (!message.seen) {//если seen = false то
                messages[i] = {...message, seen: true}//перезапись 
            } else if (message.seen) {//удаление
                messages.splice(i, 1)//удаляем улементы и вставляем items
            }
        }
    })
    addMessages(listEl, messages)//??77
}


searchFormEl.addEventListener('submit', function (event) {
    event.preventDefault()
    let query = event.target.search.value.toLowerCase().trim().split(' ')
    const fieldsForSearch = ['phone', 'name', 'text']
    const filteredMessages = messages.filter(messages => {
        return query.every(word => {
            return fieldsForSearch.some(field => {
                return `${messages[field]}`.toLowerCase().includes(word)
            })
        })
    })
    event.target.reset()
    addMessages(listEl, filteredMessages)
    
})


     
function addMessages(elem, messages) {
    allCountEl.textContent = messages.length//не прочитаные и посчитаные сообщения равны длинне масива
    const unreadMessages = messages.filter(message => !message.seen)
    unreadCountEl.textContent = unreadMessages.length//не прочитаные и посчитаные сообщения равны длинне длинне нового чегото

    elem.innerHTML = ''
    
     messages.sort((a,b) => {
         return a.seen - b.seen || b.date - a.date//??
     })

    let messagesHtml = '' //переменная равна строке
    messages.forEach(message => {//функцыя для каждого елемента
        messagesHtml += renderMessage(message)//messagesHtml добавляем renderMessage
    });
    elem.innerHTML = messagesHtml//приравниваем
}

function renderMessage(data) {//каркас секции
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
    return html//возвращаем результат
}


