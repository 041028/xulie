const aliceTumbling = [
    { transform: 'rotate(0) scale(1)', opacity: 1 },
    { transform: 'rotate(360deg) scale(0)', opacity: 0 }
];

const aliceTiming = {
    duration: 1000,
    iterations: 1,
    fill: 'forwards'
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");
const startButton = document.getElementById('开始');

function animateAlice(aliceElement) {
    return aliceElement.animate(aliceTumbling, aliceTiming).finished;
}

startButton.addEventListener('click', () => {
    alice1.style.opacity = 1;
    animateAlice(alice1)
        .then(() => {
            alice2.style.opacity = 1;
            return animateAlice(alice2);
        })
        .then(() => {
            alice3.style.opacity = 1;
            return animateAlice(alice3);
        })
        .catch(error => console.error(`Error animating Alices: ${error}`));
});
