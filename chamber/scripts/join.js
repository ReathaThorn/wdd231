// Timestamp
document.getElementById('timestamp').value = new Date().toISOString();

// Modal functionality
const modals = document.querySelectorAll('.modal');
const buttons = document.querySelectorAll('.membership-card button');
const closeButtons = document.querySelectorAll('.modal .close');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const modalId = btn.parentElement.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

closeButtons.forEach(span => {
    span.addEventListener('click', () => {
        span.parentElement.parentElement.style.display = 'none';
    });
});

// Close modal when clicking outside
window.addEventListener('click', e => {
    modals.forEach(modal => {
        if(e.target == modal){
            modal.style.display = 'none';
        }
    });
});

// Animate membership cards
window.addEventListener('load', () => {
    document.querySelectorAll('.membership-card').forEach(card => {
        card.classList.add('show');
    });
});
