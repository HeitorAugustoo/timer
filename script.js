let hora = 0
let min = 0
let sec = 0
let interval


function twoDigits(digit) {
    if(digit < 10) {
        return(`0${digit}`)
    } else {
        return digit
    }
}

function run() {
    counter()
   interval = setInterval(counter, 1000)
}

function pause() {
    clearInterval(interval)
}

function stop() {
    clearInterval(interval)
    sec = 0
    min = 0
    hora = 0
    document.querySelector('#watch').innerText = `${twoDigits(hora)}:${twoDigits(min)}:${twoDigits(sec)}`
}

function counter() {
    sec++
    if(sec == 60) {
        min++
        sec = 0

        if(min == 60) {
            min = 0
            hora++
        }
    }
    document.querySelector('#watch').innerText = `${twoDigits(hora)}:${twoDigits(min)}:${twoDigits(sec)}`
}