const btn = document.querySelector('#themeBtn');
const body = document.body;

// ===== ФУНКЦИЯ ПЕРЕКЛЮЧЕНИЯ ТЕМЫ =====
btn.addEventListener('click', () => {

    // Переключаем класс
    body.classList.toggle('dark-theme');

    // Проверяем, включена ли тёмная тема
    if (body.classList.contains('dark-theme')) {
        btn.innerText = "Включить светлую тему ☀️";
        setCookie('myTheme', 'dark', 7);
    } else {
        btn.innerText = "Включить тёмную тему 🌙";
        setCookie('myTheme', 'light', 7);
    }

});


// ===== ПРОВЕРКА COOKIE ПРИ ЗАГРУЗКЕ =====

// 1. Смотрим, есть ли запись 'myTheme'
const savedTheme = getCookie('myTheme');

// 2. Если там 'dark'
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    btn.innerText = "Включить светлую тему ☀️";
} else {
    btn.innerText = "Включить тёмную тему 🌙";
}



// ===== ФУНКЦИИ ДЛЯ COOKIE =====

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');

    for(let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(cookieName) === 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return "";
}