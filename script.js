const heart = document.getElementById('heart');
const gameContainer = document.getElementById('game-container');
const message = document.getElementById('message');
const pumpkinPie = document.getElementById('pumpkin-pie');

let clickCount = 0;

const messages = [
    "You caught the heart! You're awesome, now eat some pumpkin pie!",
    "Kuma and Marl love you alot",
    "You're amazing! Eat some Tiramisu!",
    "Go and eat some Pumpkin pie!"];

function moveHeart() {
    const x = Math.random() * (gameContainer.clientWidth - heart.clientWidth);
    const y = Math.random() * (gameContainer.clientHeight - heart.clientHeight);
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
}

heart.addEventListener('click', () => {
    clickCount++;
    const messageText = messages[Math.floor(Math.random() * messages.length)];
    message.innerText = "Cheer up, Taylor!\n" + messageText;
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 2000);

    if (clickCount % 3 === 0) {
        pumpkinPie.style.display = 'block';
        setTimeout(() => {
            pumpkinPie.style.display = 'none';
        }, 2000);
    }

    moveHeart();
});

// Initial position
moveHeart();
