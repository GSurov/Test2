
// let i = 0

// while (i < 10){
//     console.log(i)
//     i++
// }

// for(let i = 100; i >= 0; i--){
//     console.log(i)
// }

// do{
//     console.log(i)
//     i--
// }while(i > 0)



function createCards() {
    const container = document.getElementById("cards");
    container.innerHTML = "";

    const count = Number(prompt("Сколько карточек хотите создать?"));

    for (let i = 1; i <= count; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<h3>Карточка ${i}</h3><p>Описание карточки</p>`;
        container.appendChild(card);
    }
}