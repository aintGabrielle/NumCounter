let counter = document.getElementById('counter')
let saveEl = document.getElementById('save-el')
let count = 0


const Increment = () => {
    counter.textContent = ++count
}

const Save = () => {
    let countStr = count +  " - "
    saveEl.textContent += countStr
    count = 0
    counter.textContent = count
}

