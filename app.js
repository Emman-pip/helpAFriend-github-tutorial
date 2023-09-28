const button = document.querySelector('.btn')
const quoteContainer = document.querySelector('.quote-container')
const randomQuotes = [
    `"The only way to do great work is to love what you do." — Steve Jobs`,
    `"In three words I can sum up everything I've learned about life: it goes on." — Robert Frost`,
    `"Success is not final, failure is not fatal: It is the courage to continue that counts." — Winston Churchill`,
    `"Life is what happens when you're busy making other plans." — John Lennon`,
    `"The future belongs to those who believe in the beauty of their dreams." — Eleanor Roosevelt`,
    `"Don't count the days; make the days count." — Muhammad Ali`,
    `"The only limit to our realization of tomorrow will be our doubts of today." — Franklin D. Roosevelt`,
    `"In the middle of every difficulty lies opportunity." — Albert Einstein`,
    `"It does not matter how slowly you go as long as you do not stop." — Confucius`,
    `"The best way to predict the future is to create it." — Peter Drucker`
]

function displayQuote() {
    const randomIndex = Math.floor(Math.random() * randomQuotes.length)
    const randomQuote = randomQuotes[randomIndex];
    quoteContainer.textContent = randomQuote
}
button.addEventListener('click', displayQuote);
// Comment 