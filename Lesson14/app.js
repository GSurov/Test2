let time = document.getElementById("time")
let timeShift = document.getElementById("timeShift")

function format(num) {
    return num < 10 ? "0" + num : num
}

function currentTime(){
    let dateNow = new Date()

    let dateShift = new Date(dateNow)
    dateShift.setHours(dateShift.getHours() - 2)

    let h = format(dateNow.getHours())
    let m = format(dateNow.getMinutes())
    let s = format(dateNow.getSeconds())

    let h2 = format(dateShift.getHours())
    let m2 = format(dateShift.getMinutes())
    let s2 = format(dateShift.getSeconds())

    time.innerText = `${h}:${m}:${s}`
    timeShift.innerText = `${h2}:${m2}:${s2}`
}

currentTime()
setInterval(currentTime, 1000)