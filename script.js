let energy = parseInt(localStorage.getItem('energy')) || 100;
let health = parseInt(localStorage.getItem('health')) || 100;
let stars = parseInt(localStorage.getItem('stars')) || 10;
let name = localStorage.getItem('name') || '';
let birthday = localStorage.getItem('birthday') || '';

window.onload = () => {
    if (!name || !birthday) {
        name = prompt("Как тебя зовут?");
        birthday = prompt("Когда твой день рождения? (в формате ДД.ММ)");
        localStorage.setItem('name', name);
        localStorage.setItem('birthday', birthday);
        alert("Привет, " + name + "! Я Рикки!");
    } else {
        let today = new Date();
        let todayStr = ("0" + today.getDate()).slice(-2) + "." + ("0" + (today.getMonth() + 1)).slice(-2);
        if (birthday === todayStr) {
            alert("С Днём Рождения, " + name + "! Желаю тебе отличного дня!");
        }
    }
    updateUI();
};

function updateUI() {
    document.getElementById('energy-value').textContent = energy + "%";
    document.getElementById('health-value').textContent = health + "%";
    localStorage.setItem('energy', energy);
    localStorage.setItem('health', health);
    localStorage.setItem('stars', stars);
}

function goToSleep() {
    document.getElementById('ricky').src = 'assets/ricky_animations/ricky_sleep.svg';
    document.getElementById('energy-value').textContent = "Зарядка...";
    setTimeout(() => {
        energy = 100;
        updateUI();
        document.getElementById('ricky').src = 'assets/ricky_animations/ricky_idle.svg';
    }, 3000);
}

function openFeed() {
    if (health >= 100) {
        alert("Рикки уже сыт!");
    } else {
        health = Math.min(100, health + 30);
        document.getElementById('ricky').src = 'assets/ricky_animations/ricky_eat.svg';
        updateUI();
        setTimeout(() => {
            document.getElementById('ricky').src = 'assets/ricky_animations/ricky_idle.svg';
        }, 2000);
    }
}

function openGames() {
    if (health === 0) {
        alert("Рикки хочет кушать, покорми его чтобы продолжить!");
        return;
    }
    document.getElementById('ricky').src = 'assets/ricky_animations/ricky_play.svg';
    energy = Math.max(0, energy - 10);
    health = Math.max(0, health - 10);
    updateUI();
}

function openStore() {
    alert("Магазин пока в разработке. У тебя " + stars + " звезд.");
}

function showHomework() {
    alert("Домашка: Не забудь выучить алфавит и таблицу умножения!");
}