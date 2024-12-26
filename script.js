// JavaScript pentru gestionarea formularului
const form = document.getElementById('booking-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Previne trimiterea standard a formularului

    // Afișează mesajul de succes
    successMessage.classList.remove('hidden');
    successMessage.style.animation = 'fadeIn 1s ease';

    // Resetează formularul
    form.reset();
});
