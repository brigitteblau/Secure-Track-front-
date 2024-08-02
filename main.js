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
