
function setCookie(name, value, day){
    let expires = ""
    let date = new Date();
    date.setTime(date.getTime()+(1000*60*60*24*day))
    expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}   

let themeBtn = document.getElementById("themeBtn")
let body = document.body

themeBtn.addEventListener("click", () =>{
    const isDark = body.classList.contains('dark-theme');
    if (isDark){
        body.classList.remove('dark-theme')
        setCookie('myTheme', 'light', 30)
    } else{
        body.classList.add('dark-theme')
        setCookie('myTheme', 'dark', 30)
    }
})