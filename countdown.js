// countdown.js
// Target Date: December 3, 2025, set to 00:00:00 UTC for maximum consistency
const BIRTHDAY_DATE = new Date('2025-12-06T00:00:00Z').getTime();

/**
 * Updates the birthday countdown timer displayed on the memories page.
 */
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = BIRTHDAY_DATE - now;

    const countdownTitle = document.querySelector('.countdown-title');

    if (timeLeft < 0) {
        // If the birthday has passed
        const elements = ['days', 'hours', 'minutes', 'seconds'];
        elements.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = '00';
        });
        if (countdownTitle) countdownTitle.textContent = 'HAPPY BIRTHDAY IS TODAY!';
        return;
    }

    // Change title back if it's not today yet (in case of transition)
    if (countdownTitle) countdownTitle.textContent = 'Countdown to the Real Day!';

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the HTML elements
    const updateElement = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value.toString().padStart(2, '0');
    };

    updateElement('days', days);
    updateElement('hours', hours);
    updateElement('minutes', minutes);
    updateElement('seconds', seconds);
}