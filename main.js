document.querySelector('form').addEventListener('submit', function (e) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Por favor, complete todos los campos.');
        e.preventDefault();
    }

    if (true) {
        location.href = "selectorItems.html"
    }
});

//acordion 
document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    const floorsButtons = document.querySelectorAll('.floors-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            content.classList.toggle('active');
            button.querySelector('.arrow').textContent = content.classList.contains('active') ? '▲' : '▼';
        });
    });

    floorsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            if (content) {
                content.classList.toggle('active');
                button.querySelector('.arrow').textContent = content.classList.contains('active') ? '▲' : '▼';
            }
        });
    });
});

