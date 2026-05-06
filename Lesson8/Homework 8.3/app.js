function checkPassword() {
    const pass = document.getElementById("password").value;
    const result = document.getElementById("result");

    if (pass.length < 6) {
        result.textContent = "Слабый пароль";
        result.style.color = "red";
    } else if (pass.length <= 10) {
        result.textContent = "Средний пароль";
        result.style.color = "orange";
    } else {
        result.textContent = "Сильный пароль";
        result.style.color = "green";
    }
}