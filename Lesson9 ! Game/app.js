let heroHP = 100;
let enemyHP = 100;
let isGameOver = false;

function attack() {
    if (isGameOver) return;

    let damage = Math.floor(Math.random() * 10) + 8;
    enemyHP -= damage;

    updateLog(`⚔️ Ты нанес ${damage} урона!`);

    enemyTurn();
    updateScreen();
    checkWinner();
}

function heal() {
    if (isGameOver) return;

    let healAmount = 23;
    heroHP += healAmount;
    if (heroHP > 100) heroHP = 100;

    updateLog(`💊 Ты выпил зелье (+${healAmount} HP)`);

    enemyTurn();
    updateScreen();
    checkWinner();
}

function enemyTurn() {
    let enemyDamage = Math.floor(Math.random() * 10) + 5;
    heroHP -= enemyDamage;

    updateLog(`😈 Враг нанес ${enemyDamage} урона!`);
}

function updateScreen() {
    if (heroHP < 0) heroHP = 0;
    if (enemyHP < 0) enemyHP = 0;

    document.getElementById('hero-health').style.width = heroHP + "%";
    document.getElementById('enemy-health').style.width = enemyHP + "%";

    document.getElementById('hero-hp-text').innerText = heroHP + " / 100";
    document.getElementById('enemy-hp-text').innerText = enemyHP + " / 100";
}

function updateLog(message) {
    document.getElementById('log').innerText = message;
}

function checkWinner() {
    if (enemyHP <= 0) {
        updateLog("🏆 ПОБЕДА! Злодей повержен!");
        document.querySelector('.btn-attack').style.display = 'none';
        document.querySelector('.btn-heal').style.display = 'none';
        isGameOver = true;
    } 
    else if (heroHP <= 0) {
        updateLog("💀 ВЫ ПРОИГРАЛИ... Попробуйте снова.");
        isGameOver = true;
    }
}
