export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    getRandomColor,
    loadFromStorage,
    saveToStorage,
    padNum,
    getDayName,
    getMonthName,
    animateCSS,
    getRelativeTime,
}

function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

function padNum(num) {
    return (num > 9) ? num + '' : '0' + num
}

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    var color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function getDayName(date, locale) {
    date = new Date(date)
    return date.toLocaleDateString(locale, { weekday: 'long' })
}


function getMonthName(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    return monthNames[date.getMonth()]
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}


function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

function animateCSS(el, animation = 'bounce') {
    const prefix = 'animate__'
    return new Promise((resolve) => {
        const animationName = `${prefix}${animation}`
        el.classList.add(`${prefix}animated`, animationName)

        el.addEventListener('animationend', handleAnimationEnd, { once: true })

        function handleAnimationEnd(event) {
            event.stopPropagation()
            // el.classList.remove(`${prefix}animated`, animationName)
            resolve('Animation ended')
        }
    })
}

function getRelativeTime(timestamp) {
    const now = new Date();
    const date = new Date(timestamp)
    const diff = now - timestamp;
    const oneHour = 60 * 60 * 1000;
    const oneDay = 24 * oneHour;
    const oneWeek = 7 * oneDay;
    if (diff < oneDay) {
        // Less than 24 hours ago
        const hours = Math.floor(diff / oneHour);
        const minutes = Math.floor((diff % oneHour) / (60 * 1000));
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    } else if (diff < oneWeek) {
        // Less than a week ago
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayIndex = date.getDay();
        return days[dayIndex];
    } else {
        // Older than a week
        const year = date.getFullYear();
        const month = getMonthName(date)
        // const day = timestamp.getDate().toString().padStart(2, '0');
        return `${month} ${year}`;
    }
}