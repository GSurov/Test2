import confetti from 'canvas-confetti';

const smallBtn = document.querySelector('#smallBtn');
const bigBtn = document.querySelector('#bigBtn');

smallBtn.addEventListener('click', () => {
  confetti({
    particleCount: 50,
    spread: 50
  });
});

bigBtn.addEventListener('click', () => {
  confetti({
    particleCount: 200,
    spread: 100
  });
});