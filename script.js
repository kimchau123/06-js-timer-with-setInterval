// Select the timer display, counter display, and increment button elements
const timerDisplay = document.querySelector('#timer');
const counterDisplay = document.querySelector('#counter');
const incrementButton = document.querySelector('#incrementButton');
const startButton = document.querySelector('#startButton');

// Initialize the timer value
let timerValue = 10;
let countdownInterval = null;
let challengeActive = false;
let confettiShown = false;

// Function to start the countdown
function startCountdown() {
    clearInterval(countdownInterval);
    timerValue = 10;
    timerDisplay.textContent = timerValue;
    counterValue = 0;
    counterDisplay.textContent = counterValue;
    confettiShown = false;
    challengeActive = true;

    countdownInterval = setInterval(function() {
        // Decrement the timer value
        timerValue--;
        // Update the timer display
        timerDisplay.textContent = timerValue;

        // Stop the countdown when the timer reaches 0
        if (timerValue <= 0) {
            clearInterval(countdownInterval);
            countdownInterval = null;
            challengeActive = false;
            timerDisplay.textContent = '0'; // Ensure the display shows 0
        }
    }, 1000);
}

// Initialize the counter value
let counterValue = 0;

// Function to increase the counter
function increaseCounter() {
    // Increment the counter value
    counterValue++;
    // Update the counter display
    counterDisplay.textContent = counterValue;

    // Show confetti once when the counter reaches 10 during the 10-second challenge
    if (challengeActive && counterValue >= 10 && !confettiShown) {
        confettiShown = true;
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
}

// Add an event listener to the increment button to increase the counter when clicked
incrementButton.addEventListener('click', increaseCounter);

// Add an event listener to the start button to start the countdown when clicked
startButton.addEventListener('click', startCountdown);
