const userDiv = document.getElementById("user")
const btn = document.getElementById("generate")

async function getUser() {
    try {
        const response = await fetch("https://randomuser.me/api/")
        const data = await response.json()

        const user = data.results[0]

        const firstName = user.name.first
        const lastName = user.name.last
        const photo = user.picture.large
        const country = user.location.country
        const city = user.location.city
        const email = user.email

        userDiv.innerHTML = ""

        userDiv.innerHTML = `
            <img src="${photo}" alt="${firstName}">
            <p><strong>Имя:</strong> ${firstName} ${lastName}</p>
            <p><strong>Город:</strong> ${city}, ${country}</p>
            <p><strong>Email:</strong> ${email}</p>
        `

    } catch (e) {
        console.log(e)
    }
}

btn.addEventListener("click", getUser)