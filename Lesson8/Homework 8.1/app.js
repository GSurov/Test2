function addItem() {
    const input = document.getElementById("itemInput");
    const list = document.getElementById("list");

    if (input.value === "") return;

    const items = [];

    items.push(input.value);

    for (let i = 0; i < items.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${list.children.length + 1}. ${input.value}`;
        list.appendChild(li);
    }

    input.value = "";
}