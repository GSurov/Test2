const table = document.getElementById("table");

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.textContent = `${i} × ${j} = ${i * j}`;
        table.appendChild(cell);
    }
}