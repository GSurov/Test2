
function app(){

    const answer = document.getElementById("age")

    let age = prompt("Insert your age: ")
    if (age >= 18){
        answer.innerHTML = "Welcome to the website!"
        answer.style.color = "green"
    } 
    else{
        answer.innerHTML = "Sorry, access denied!"
        answer.style.color = "red"         
    }

}

function game(){

    const gameResult = document.getElementById("game-result")
    const askNumber = prompt("Enter a number 0-10: ")
    let number = Math.floor(Math.random()*10)+1

    if (askNumber == number){
        gameResult.innerHTML = "You guessed the number!"
        gameResult.style.color = "green"
    } 
    else{
        gameResult.innerHTML = "Sorry, you didn't guess the number. The number was:"+number
        gameResult.style.color = "red"         
    }

}

function timeOfDay() {
    const timeResult = document.getElementById("time-result");
    const askTime = Number(prompt("Введите текущий час (0–23):"));

    if (askTime >= 6 && askTime <= 11) {
        timeResult.innerHTML = "Доброе утро!";
    } 

    else if (askTime >= 12 && askTime <= 17) {
        timeResult.innerHTML = "Добрый день!";
    } 

    else if (askTime >= 18 && askTime <= 22) {
        timeResult.innerHTML = "Добрый вечер!";
    } 

    else if ((askTime >= 23 && askTime <= 23) || (askTime >= 0 && askTime <= 5)) {
        timeResult.innerHTML = "Доброй ночи!";
    } 
    
    else {
        timeResult.innerHTML = "Введите корректное время (0–23)";
    }

    timeResult.style.color = "black";
}